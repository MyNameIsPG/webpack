import EScrollbar from './src/scrollbar.vue';

EScrollbar.install = function (Vue) {
  Vue.component(EScrollbar.name, EScrollbar);
};

export default EScrollbar;