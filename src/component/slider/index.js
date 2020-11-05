import ESlider from './src/slider.vue';

ESlider.install = function (Vue) {
  Vue.component(ESlider.name, ESlider);
};

export default ESlider;