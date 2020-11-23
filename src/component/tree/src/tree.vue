<template>
  <div>
    <ul class="e-tree">
      <e-tree-item v-for="item in data" :key="item.id" :root="item"></e-tree-item>
    </ul>
  </div>
</template>

<script>
import ETreeItem from "./tree-item.vue";
import TreeStore from "./tree-store";
export default {
  name: "ETree",
  components: {
    ETreeItem,
  },
  props: {
    data: {
      type: Array,
      default: [],
    },
    props: {
      default() {
        return {
          children: "children",
          label: "label",
          disabled: "disabled",
        };
      },
    },
  },
  data() {
    return {
      store: null,
      root: null,
    };
  },
  created() {
    this.store = new TreeStore({
      data: this.data,
      props: this.props,
    });
    this.root = this.store.root
  },
};
</script>

<style lang="stylus" scoped>
.e-tree {
  list-style: none;
  color: #606266;
  padding: 0px;

  &.e-tree {
    padding-left: 20px;
  }
}
</style>