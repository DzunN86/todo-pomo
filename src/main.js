import Vue from 'vue'
import axios from "./plugins/axios-vue";
import "./plugins"; /* perlu diletakkan paling atas */
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import titleMixin from "./mixins/title";


import './assets/tailwind.css'

import TopProgressBar from "@/components/TopProgressBar.vue";

/* GLOBAL PROGRESS-BAR ELEMENT */
const bar = (Vue.prototype.$topprogressbar = new Vue(TopProgressBar).$mount());
document.body.appendChild(bar.$el);

Vue.config.productionTip = false


/* GLOBAL MIXIN */
Vue.mixin(titleMixin); // for handling document.title

new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
