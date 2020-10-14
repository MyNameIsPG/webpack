import Vue from "vue"
import App from "./app"
import router from "./router"

import "./assets/style.styl"
import baseLayout from "./views/base/baseLayout.vue"
import EButton from "./component/button/index"
import ERadio from "./component/radio/index"
import ERadioGroup from "./component/radio-group/index"

const components = [
  baseLayout,
  EButton,
  ERadio,
  ERadioGroup
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

