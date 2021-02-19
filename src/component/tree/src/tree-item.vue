<template>
  <li class="e-treeitem" :class="{ 'is-expanded': root.expanded }">
    <div class="e-treeitem_content" :style="{ 'padding-left': (root.level - 1) * indent + 'px' }">
      <span class="treeitem_content_icon" :class="[root.children && root.children.length > 0 ? '' : 'is-leaf']">
        <i @click="handleExpandIconClick(root)" :class="[root.expanded ? 'icon-e-turning-down' : 'icon-e-turning-right']"></i>
      </span>
      <span class="treeitem_checkbox" v-if="showCheckbox">
        <e-checkbox v-model="root.checked" @change="handleCheckedClick" :indeterminate="root.indeterminate"></e-checkbox>
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
  created() {
    if (this.$parent) this.tree = this.$parent

    this.$on('check', (data, ischecked) => {
      console.log(data, ischecked)
      // 设置选中状态
      if (this.root.children) {
        const arrs = this.root.children.filter(v => v.checked)
        if (arrs.length === 0) {
          this.root.checked = false
          this.tree.$emit('check', this.root, false)
        } else if (arrs.length > 0 && arrs.length < this.root.children.length) {
          this.root.indeterminate = true
          this.root.checked = false
          this.tree.$emit('check', this.root, false)
        } else {
          this.root.checked = true
          this.root.indeterminate = false
          this.tree.$emit('check', this.root, true)
        }

        if (this.root.children.filter(v => v.indeterminate).length > 0) {
          this.root.indeterminate = true
          this.tree.$emit('check', this.root, false)
        }
      }
    })
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
      this.tree.$emit('check', this.root, val)
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