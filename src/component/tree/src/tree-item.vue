<template>
  <li class="e-treeitem" :class="{ 'is-expanded': root.expanded }">
    <div class="e-treeitem_content" :style="{ 'padding-left': (root.level - 1) * indent + 'px' }">
      <span class="treeitem_content_icon" :class="[root.children && root.children.length > 0 ? '' : 'is-leaf']">
        <i @click="handleExpandIconClick(root)" :class="[root.expanded ? 'icon-e-turning-down' : 'icon-e-turning-right']"></i>
      </span>
      <span class="treeitem_checkbox" v-if="showCheckbox">
        <e-checkbox v-model="root.checked" @change="handleCheckedClick"></e-checkbox>
      </span>
      <span class="treeitem_content_label">{{root.text}}</span>
    </div>
    <ul class="e-tree" v-if="root.children">
      <e-tree-item v-for="item in root.children" :key="item.id" :root="item" :show-checkbox="showCheckbox" :indent="indent"></e-tree-item>
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
      check: false,
    };
  },
  methods: {
    handleExpandIconClick(data) {
      data.expanded = !data.expanded
    },
    handleCheckedClick(val) {
      // 选中
      if(this.root.children){
        this.selectAll(this.root.children, val)
      }
      // 反选
    },
    selectAll(data, flag) {
      data.map(item => {
        item.checked = flag
        if(item.children && item.children.length>0) {
          this.selectAll(item.children, flag)
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.e-tree {
  list-style: none;
  color: #606266;
  padding: 0px;
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
      &.is-leaf {
        cursor: default;
        width: 18px;
        height: 20px;
        i {
          display none
        }
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

  &.is-expanded {
    .e-tree {
      display: none;
    }
  }
}
</style>