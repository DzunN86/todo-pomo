import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './assets/tailwind.css'

import TopProgressBar from "@/components/TopProgressBar.vue";

/* GLOBAL PROGRESS-BAR ELEMENT */
const bar = (Vue.prototype.$topprogressbar = new Vue(TopProgressBar).$mount());
document.body.appendChild(bar.$el);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
