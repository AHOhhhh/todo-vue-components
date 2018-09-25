// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./assets/css/base.css";
import "./assets/css/index.css";
import Vue from "vue";
import App from "./App";
import store from "./store/store";

Vue.config.productionTip = false;
Vue.prototype.$store = store;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
