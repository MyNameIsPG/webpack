import Vue from "vue"
import App from "./app"
import router from "./router";

import "./assets/style.styl";
import baseLayout from "./views/base/baseLayout.vue"
import PButton from './component/button/index';

const components = [
  baseLayout,
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

