import Vue from "vue";

import Quasar from "quasar";
import "quasar-framework/dist/umd/quasar.mat.css";
Vue.use(Quasar);

import router from './router'
import App from "./App.vue";

import './scss/index.scss'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
