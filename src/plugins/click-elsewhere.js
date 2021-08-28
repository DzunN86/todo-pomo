/* Terinspirasi dari vue-clickaway */

import Vue from "vue";

function install(vue) {
  if (install.installed) {
    return;
  }
  install.installed = true;

  const CLICKHANDLER = "__clickElsewhereHandler__";

  const EVENT_OPTIONS = { passive: true, capture: true };
  // capture => meskipun pada child el terdapat event click.stop, maka ini tetep dijalankan

  function bind(el, binding, vnode) {
    unbind(el);

    const Callback = binding.value;
    if (typeof Callback !== "function") {
      return;
    }

    vue.nextTick(() => {
      el[CLICKHANDLER] = function (event) {
        let path =
          event.path || (event.composedPath ? event.composedPath() : undefined);
        let isElsewhere = path
          ? path.indexOf(el) < 0
          : !el.contains(event.target);

        if (isElsewhere) {
          return Callback.call(vnode.context, event);
        }
      };

      document.documentElement.addEventListener(
        "click",
        el[CLICKHANDLER],
        EVENT_OPTIONS
      );
    });
  }

  function unbind(el) {
    if (el[CLICKHANDLER]) {
      document.documentElement.removeEventListener(
        "click",
        el[CLICKHANDLER],
        EVENT_OPTIONS
      );
      delete el[CLICKHANDLER];
    }
  }

  function update(el, binding, vnode) {
    if (binding.value === binding.oldValue) {
      return;
    }

    bind(el, binding, vnode);
  }

  vue.directive("click-elsewhere", {
    bind,
    unbind,
    update,
  });
}

Vue.use(install);
