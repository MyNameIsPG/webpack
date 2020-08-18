import Vue from "vue"
import App from "./app"

import "./assets/style.css";
import ElButton from './component/button/index';

const components = [
  ElButton
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}


install(Vue);

new Vue({
  render: h => h(App)
}).$mount("#app");

