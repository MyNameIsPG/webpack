import Vue from "vue"
import App from "./app"
import router from "./router"

import "./assets/style.styl"
import baseLayout from "./views/base/baseLayout.vue"
import EButton from "./component/button/index"
import ECheckbox from "./component/checkbox/index"
import ECheckboxGroup from "./component/checkbox-group/index"
import EDatePicker from "./component/date-picker/index"
import EForm from "./component/form/index"
import EFormItem from "./component/form-item/index"
import EInput from "./component/input/index"
import EInputNumber from "./component/input-number/index"
import EOption from "./component/oprion/index"
import EOptionGroup from "./component/option-group/index"
import EPopper from "./component/popper/index"
import ERadio from "./component/radio/index"
import ERadioGroup from "./component/radio-group/index"
import EScrollbar from "./component/scrollbar/index"
import ESelect from "./component/select/index"
import ESlider from "./component/slider/index"
import ESwitch from "./component/switch/index"
import ETree from "./component/tree/index"

const components = [
  baseLayout,
  EButton,
  ECheckbox,
  ECheckboxGroup,
  EDatePicker,
  EForm,
  EFormItem,
  EInput,
  EInputNumber,
  EOption,
  EOptionGroup,
  EPopper,
  ERadio,
  ERadioGroup,
  EScrollbar,
  ESelect,
  ESlider,
  ESwitch,
  ETree
]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

install(Vue);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

