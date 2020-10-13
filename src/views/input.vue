<template>
  <div>
    <baseLayout
      title="基础用法"
      subTitle="由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。"
    >
      <div class="e-input">
        <input class="e-input__inner" placeholder="请输入" />
      </div>
    </baseLayout>
    <baseLayout title="禁用状态">
      <div class="e-input e-input-disabled">
        <input class="e-input__inner" placeholder="请输入" />
      </div>
    </baseLayout>
    <baseLayout title="尺寸">
      <div class="e-input">
        <input class="e-input__inner" placeholder="请输入" />
      </div>
      <div class="e-input e-input-medium">
        <input class="e-input__inner" placeholder="请输入" />
      </div>
      <div class="e-input e-input-small">
        <input class="e-input__inner" placeholder="请输入" />
      </div>
      <div class="e-input e-input-mini">
        <input class="e-input__inner" placeholder="请输入" />
      </div>
    </baseLayout>
  </div>
</template>

<script>
export default {
  name: "input",
};
</script>

<style lang="stylus" scoped>
.e-input {
  position: relative;
  font-size: 14px;
  display: inline-block;

  .e-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    cursor: pointer;

    &:hover {
      border-color: #c0c4cc;
    }

    &:focus {
      outline: none;
      border-color: #409eff;
    }
  }

  &.e-input-disabled {
    .e-input__inner {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }

  &.e-input-medium {
    .e-input__inner {
      height: 36px;
      line-height: 36px;
    }
  }

  &.e-input-small {
    .e-input__inner {
      height: 32px;
      line-height: 32px;
    }
  }

  &.e-input-mini {
    .e-input__inner {
      height: 28px;
      line-height: 28px;
    }
  }
}
</style>