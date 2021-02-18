<template>
  <div>
    <ul class="e-tree">
      <e-tree-item v-for="item in store" :key="item.id" :root="item" :show-checkbox="showCheckbox" :indent="indent"></e-tree-item>
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
    showCheckbox: {
      type: Boolean,
      default: false
    },
    indent: {
      type: Number,
      default: 18
    },
  },
  data() {
    return {
      store: [],
    };
  },
  created() {
    const store = new TreeStore({
      data: JSON.parse(JSON.stringify(this.data)),
      props: this.props,
    });
    this.store = store.data
  }
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