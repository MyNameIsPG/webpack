import ETree from './src/tree.vue';

ETree.install = function (Vue) {
  Vue.component(ETree.name, ETree);
};

export default ETree;