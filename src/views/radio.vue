<template>
  <div>
    <baseLayout
      title="基础用法"
      subTitle="由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。"
    >
      <label class="e-radio e-radio-checked">
        <span class="e-radio__input">
          <span class="e-radio__inner"></span>
        </span>
        <span class="e-radio__label">备选项</span>
      </label>
      <label class="e-radio">
        <span class="e-radio__input">
          <span class="e-radio__inner"></span>
        </span>
        <span class="e-radio__label">备选项</span>
      </label>
    </baseLayout>
    <baseLayout title="禁用状态" subTitle="单选框不可用的状态。">
      <label class="e-radio e-radio-checked e-radio-disabled">
        <span class="e-radio__input">
          <span class="e-radio__inner"></span>
        </span>
        <span class="e-radio__label">备选项</span>
      </label>
      <label class="e-radio e-radio-disabled">
        <span class="e-radio__input">
          <span class="e-radio__inner"></span>
        </span>
        <span class="e-radio__label">备选项</span>
      </label>
    </baseLayout>
  </div>
</template>

<script>
export default {
  name: "radio",
};
</script>

<style lang="stylus" scoped>
.e-radio {
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

  .e-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .e-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;

      &:hover {
        border-color: #409eff;
      }

      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
  }

  .e-radio__label {
    font-size: 14px;
    padding-left: 6px;
  }

  &.e-radio-checked {
    .e-radio__input {
      .e-radio__inner {
        border-color: #409eff;
        background: #409eff;

        &:after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
  }

  &.e-radio-disabled {
    .e-radio__input {
      .e-radio__inner {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        cursor: not-allowed;

        &:after {
          background-color: #c0c4cc;
        }
      }
    }

    .e-radio__label {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
</style>