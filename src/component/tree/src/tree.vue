<template>
  <div>
    ETree
    <ul class="e-tree">
      <li class="e-treeitem">
        <div class="e-treeitem_content">
          <span class="treeitem_content_icon">
            <i class="icon-e-turning-right"></i>
          </span>
          <span class="treeitem_content_label">名称</span>
        </div>
        <ul class="e-tree">
          <li class="e-treeitem">
            <div class="e-treeitem_content">
              <span class="treeitem_content_icon">
                <i class="icon-e-turning-right"></i>
              </span>
              <span class="treeitem_content_label">名称</span>
            </div>
          </li>
          <li class="e-treeitem">
            <div class="e-treeitem_content">
              <span class="treeitem_content_icon">
                <i class="icon-e-turning-right"></i>
              </span>
              <span class="treeitem_content_label">名称</span>
            </div>
          </li>
        </ul>
      </li>
      <li class="e-treeitem">
        <div class="e-treeitem_content">
          <span class="treeitem_content_icon">
            <i class="icon-e-turning-right"></i>
          </span>
          <span class="treeitem_content_label">名称</span>
        </div>
        <ul class="e-tree">
          <li class="e-treeitem">
            <div class="e-treeitem_content">
              <span class="treeitem_content_icon">
                <i class="icon-e-turning-right"></i>
              </span>
              <span class="treeitem_content_label">名称</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ETree",
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      root: JSON,
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
        i {
          font-size: 20px;
          cursor: pointer;
          color: #c0c4cc;
        }
      }

      .treeitem_content_label {
        font-size: 14px;
      }
    }
  }
}
</style>