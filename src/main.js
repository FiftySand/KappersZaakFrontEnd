import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  data()
  {
    return{
      Role: localStorage.getItem('userRole'),
    }

  },
  mounted()
  {
  },
  render: h => h(App)
}).$mount("#app")

