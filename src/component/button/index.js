import EButton from './src/index.vue';

EButton.install = function (Vue) {
  Vue.component(EButton.name, EButton);
};

export default EButton;