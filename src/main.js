import Vue from "vue"
import App from "./app"
import router from "./router";

import "./assets/style.styl";
import PButton from './component/button/index';

const components = [
  PButton
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}


install(Vue);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

