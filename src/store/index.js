import Vue from "vue";
import Vuex from "vuex";

import config from "../config";

/*
  Saat buat vuex pertama kali, => cek localStorage apakah ada token ? jika iya, jadikan nilai inisialisasi
  selanjutnya setiap ada perubahan pada state => update localStorage
*/
const initStorePlugin = (store) => {
  // called when the store is initialized
  let prevToken = localStorage.getItem("token");
  let prevExptimestamp = localStorage.getItem("exptimestamp") || 0;
  let config = localStorage.getItem("cnf");

  if (prevExptimestamp > 0) {
    store.commit("setExptimestamp", prevExptimestamp);
  }
  if (prevToken) {
    store.commit("setToken", prevToken);
  }
  if (config) store.commit("config", JSON.parse(config));

  store.subscribe((mutation, state) => {
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.

    if (mutation.type === "setToken" && prevToken !== mutation.payload) {
      localStorage.setItem("token", mutation.payload);
      prevToken = state.token;
    }

    if (
      mutation.type === "setExptimestamp" &&
      prevExptimestamp !== mutation.payload
    ) {
      localStorage.setItem("exptimestamp", mutation.payload);
      prevExptimestamp = state.exptimestamp;
    }
    if (mutation.type === "config")
      localStorage.setItem("cnf", JSON.stringify(store.state.config));
  });
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    initAuthCheck: true,
    isAuthCheckFailed: false,
    token: "",
    loading: false,
    exptimestamp: 0,
    config: {
      viewMode: config.app.viewMode,
    },
  },
  mutations: {
    setInitAuthCheck(state, val) {
      state.initAuthCheck = val;
    },
    setIsAuthCheckFailed(state, val) {
      state.isAuthCheckFailed = val;
    },
    setToken(state, val) {
      state.token = val;
    },
    config(state, data) {
      for (var k in data) {
        if (state.config.hasOwnProperty(k)) {
          state.config[k] = data[k];
        }
      }
    },
    setLoading(state, val) {
      state.loading = val;
    },
    setExptimestamp(state, val) {
      state.exptimestamp = val;
    },
  },
  actions: {},
  modules: {},
  plugins: [initStorePlugin],
});
