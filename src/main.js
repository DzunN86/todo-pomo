import Vue from 'vue'
import axios from "./plugins/axios-vue";
import "./plugins"; /* perlu diletakkan paling atas */
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import titleMixin from "./mixins/title";
import config from "./config";

import VueChart from 'vue-charts';

import VueRouteMiddleware from "vue-route-middleware";
import AuthMiddleware from "./router/middlewares/auth";
import GuestMiddleware from "./router/middlewares/guest";


import './assets/tailwind.css'

import TopProgressBar from "@/components/TopProgressBar.vue";

/* GLOBAL PROGRESS-BAR ELEMENT */
const bar = (Vue.prototype.$topprogressbar = new Vue(TopProgressBar).$mount());
document.body.appendChild(bar.$el);

/* GLOBAL APP OBJECT */
Vue.prototype.$App = Object.freeze({
  config,
});

Vue.use(VueChart);

Vue.config.productionTip = false

router.beforeEach(VueRouteMiddleware({ AuthMiddleware, GuestMiddleware }));


/* GLOBAL MIXIN */
Vue.mixin(titleMixin); // for handling document.title

new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
