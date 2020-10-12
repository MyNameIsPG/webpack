<template>
  <div>
    <baseLayout title="默认按钮" subTitle="基础类型按钮用法。">
      <button class="e-button e-button-default">默认按钮</button>
      <button class="e-button e-button-primary">主要按钮</button>
      <button class="e-button e-button-success">成功按钮</button>
      <button class="e-button e-button-info">信息按钮</button>
      <button class="e-button e-button-warning">警告按钮</button>
      <button class="e-button e-button-danger">危险按钮</button>
    </baseLayout>
    <baseLayout title="朴素按钮" subTitle="是否朴素按钮">
      <button class="e-button e-button-default e-button-plain">默认按钮</button>
      <button class="e-button e-button-primary e-button-plain">主要按钮</button>
      <button class="e-button e-button-success e-button-plain">成功按钮</button>
      <button class="e-button e-button-info e-button-plain">信息按钮</button>
      <button class="e-button e-button-warning e-button-plain">警告按钮</button>
      <button class="e-button e-button-danger e-button-plain">危险按钮</button>
    </baseLayout>
    <baseLayout title="圆角按钮" subTitle="是否圆角按钮">
      <button class="e-button e-button-default e-button-round">默认按钮</button>
      <button class="e-button e-button-primary e-button-round">主要按钮</button>
      <button class="e-button e-button-success e-button-round">成功按钮</button>
      <button class="e-button e-button-info e-button-round">信息按钮</button>
      <button class="e-button e-button-warning e-button-round">警告按钮</button>
      <button class="e-button e-button-danger e-button-round">危险按钮</button>
    </baseLayout>
    <baseLayout title="圆圈按钮" subTitle="是否圆形按钮">
      <button class="e-button e-button-default e-button-circle">
        <i class="icon icone e-pic"></i>
      </button>
      <button class="e-button e-button-primary e-button-circle">
        <i class="icon icone e-arrow-left"></i>
      </button>
      <button class="e-button e-button-success e-button-circle">
        <i class="icon icone e-arrow-right"></i>
      </button>
      <button class="e-button e-button-info e-button-circle">
        <i class="icon icone e-search"></i>
      </button>
      <button class="e-button e-button-danger e-button-circle">
        <i class="icon icone e-prompt"></i>
      </button>
    </baseLayout>
    <baseLayout title="禁用按钮" subTitle="是否禁用状态">
      <button class="e-button e-button-default e-button-disabled" disabled>
        默认按钮
      </button>
      <button class="e-button e-button-primary e-button-disabled" disabled>
        主要按钮
      </button>
      <button class="e-button e-button-success e-button-disabled" disabled>
        成功按钮
      </button>
      <button class="e-button e-button-info e-button-disabled" disabled>
        信息按钮
      </button>
      <button class="e-button e-button-warning e-button-disabled" disabled>
        警告按钮
      </button>
      <button class="e-button e-button-danger e-button-disabled" disabled>
        危险按钮
      </button>
    </baseLayout>
    <baseLayout title="文字按钮" subTitle="没有边框和背景色的按钮。">
      <button class="e-button e-button-text">文字按钮</button>
      <button class="e-button e-button-text e-button-disabled">文字按钮</button>
    </baseLayout>
    <baseLayout
      title="不同尺寸"
      subTitle="Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。"
    >
      <button class="e-button e-button-default">默认按钮</button>
      <button class="e-button e-button-default e-button-medium">
        默认按钮
      </button>
      <button class="e-button e-button-default e-button-small">默认按钮</button>
      <button class="e-button e-button-default e-button-mini">默认按钮</button>
    </baseLayout>
  </div>
</template>

<script>
export default {
  name: "button",
};
</script>

<style lang="stylus" scoped>
.e-button {
  display: inline-block;
  outline: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  cursor: pointer;
}

.e-button-default {
  &:focus, &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  &.e-button-plain {
    &:focus, &:hover {
      background: #fff;
      border-color: #409eff;
      color: #409eff;
    }
  }
}

.e-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:focus, &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}

// .e-button-plain:focus, .e-button-plain:hover {
// background: #fff;
// border-color: #409eff;
// color: #409eff;
// }
.e-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:focus, &:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}

.e-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:focus, &:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}

.e-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:focus, &:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}

.e-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:focus, &:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}
</style>