import Vue from "vue";
import App from "./App.vue";
import MiniMicroApp from "mini-micro-app";

Vue.config.productionTip = false;

MiniMicroApp.start();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
