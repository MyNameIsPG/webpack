<template>
  <div>
    <baseLayout
      title="基础用法"
      subTitle="单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。"
    >
      <label class="e-checkbox e-checkbox-checked">
        <span class="e-checkbox__input">
          <span class="e-checkbox__inner"></span>
        </span>
        <span class="e-checkbox__label">备选项</span>
      </label>
      <label class="e-checkbox">
        <span class="e-checkbox__input">
          <span class="e-checkbox__inner"></span>
        </span>
        <span class="e-checkbox__label">备选项</span>
      </label>
    </baseLayout>
    <baseLayout
      title="基础用法"
      subTitle="单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。"
    >
      <label class="e-checkbox e-checkbox-checked e-checkbox-disabled">
        <span class="e-checkbox__input">
          <span class="e-checkbox__inner"></span>
        </span>
        <span class="e-checkbox__label">备选项</span>
      </label>
      <label class="e-checkbox e-checkbox-disabled">
        <span class="e-checkbox__input">
          <span class="e-checkbox__inner"></span>
        </span>
        <span class="e-checkbox__label">备选项</span>
      </label>
    </baseLayout>
    <baseLayout
      title="indeterminate 状态"
      subTitle="indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果"
    >
      <label class="e-checkbox e-checkbox-indeterminate">
        <span class="e-checkbox__input">
          <span class="e-checkbox__inner"></span>
        </span>
        <span class="e-checkbox__label">备选项</span>
      </label>
      <label class="e-checkbox e-checkbox-indeterminate e-checkbox-disabled">
        <span class="e-checkbox__input">
          <span class="e-checkbox__inner"></span>
        </span>
        <span class="e-checkbox__label">备选项</span>
      </label>
    </baseLayout>
  </div>
</template>

<script>
export default {
  name: "checkbox",
};
</script>

<style lang="stylus" scoped>
.e-checkbox {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  .e-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .e-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);

      &:hover {
        border-color: #409eff;
      }

      &:after {
        box-sizing: content-box;
        content: '';
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
  }

  .e-checkbox__label {
    font-size: 14px;
    padding-left: 6px;
  }

  &.e-checkbox-checked {
    .e-checkbox__input {
      .e-checkbox__inner {
        border-color: #409eff;
        background: #409eff;

        &:after {
          transform: rotate(45deg) scaleY(1);
        }
      }
    }
  }

  &.e-checkbox-disabled {
    .e-checkbox__input {
      .e-checkbox__inner {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        cursor: not-allowed;

        &:after {
          border-color: #c0c4cc;
        }
      }
    }

    .e-checkbox__label {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }

  &.e-checkbox-indeterminate {
    .e-checkbox__input {
      .e-checkbox__inner {
        border-color: #409eff;
        background: #409eff;

        &:before {
          content: '';
          position: absolute;
          display: block;
          background-color: #fff;
          height: 2px;
          transform: scale(0.5);
          left: 0;
          right: 0;
          top: 5px;
        }
      }
    }

    &.e-checkbox-disabled {
      .e-checkbox__input {
        .e-checkbox__inner {
          background-color: #f5f7fa;
          border-color: #e4e7ed;
          cursor: not-allowed;

          &:before {
            content: '';
            position: absolute;
            display: block;
            background-color: #fff;
            height: 2px;
            transform: scale(0.5);
            left: 0;
            right: 0;
            top: 5px;
            background-color: #C0C4CC;
            border-color: #C0C4CC;
          }
        }
      }
    }
  }
}
</style>