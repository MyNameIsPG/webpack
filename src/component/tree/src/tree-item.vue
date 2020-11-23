<template>
  <li class="e-treeitem">
    <div class="e-treeitem_content">
      <span class="treeitem_content_icon">
        <i class="icon-e-turning-right"></i>
      </span>
      <span class="treeitem_checkbox">
        <e-checkbox v-model="check"></e-checkbox>
      </span>
      <span class="treeitem_content_label">{{root.label}}</span>
    </div>
    <ul class="e-tree" v-if="root.children && root.children.length>0">
      <e-tree-item v-for="item in root.children" :key="item.id" :root="item"></e-tree-item>
    </ul>
  </li>
</template>

<script>
import ECheckbox from "../../checkbox/src/checkbox.vue";
export default {
  name: "ETreeItem",
  components: {
    ECheckbox,
  },
  props: {
    root: Object,
  },
  data() {
    return {
      check: false,
    };
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

.e-treeitem {
  .e-treeitem_content {
    display: flex;
    align-items: center;
    height: 26px;
    cursor: pointer;

    &:hover {
      background: #f5f7fa;
    }

    .treeitem_content_icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      i {
        font-size: 18px;
        cursor: pointer;
        color: #c0c4cc;
      }
    }

    .treeitem_checkbox {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      >>>.e-checkbox {
        margin-right: 0px;
        line-height: normal;
      }
    }

    .treeitem_content_label {
      font-size: 14px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>