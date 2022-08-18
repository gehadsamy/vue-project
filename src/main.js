import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import "./assets/snow.min.css";

import "./assets/main.css";
import VueFormulate from '@braid/vue-formulate'

Vue.use(VueFormulate)
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
