import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Buefy from "buefy";

import "buefy/dist/buefy.css";
import "./registerServiceWorker";

import router from "./routers/index";

Vue.use(Buefy);
Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
