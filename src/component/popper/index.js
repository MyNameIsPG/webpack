import EPopper from './src/popper.vue';

EPopper.install = function (Vue) {
  Vue.component(EPopper.name, EPopper);
};

export default EPopper;