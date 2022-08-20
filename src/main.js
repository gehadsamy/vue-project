import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import "./assets/snow.min.css";
import vuetify from '@/plugins/vuetify'
import "./assets/main.css";
import VueFormulate from '@braid/vue-formulate';
// import Vuetify from 'vuetify';



Vue.use(VueFormulate);
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

