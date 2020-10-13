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
      <div>
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
      </div>
      <br />
      <div>
        <button
          class="e-button e-button-default e-button-plain e-button-disabled"
        >
          默认按钮
        </button>
        <button
          class="e-button e-button-primary e-button-plain e-button-disabled"
        >
          主要按钮
        </button>
        <button
          class="e-button e-button-success e-button-plain e-button-disabled"
        >
          成功按钮
        </button>
        <button class="e-button e-button-info e-button-plain e-button-disabled">
          信息按钮
        </button>
        <button
          class="e-button e-button-warning e-button-plain e-button-disabled"
        >
          警告按钮
        </button>
        <button
          class="e-button e-button-danger e-button-plain e-button-disabled"
        >
          危险按钮
        </button>
      </div>
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
  border: 1px solid #dcdfe6;
  cursor: pointer;

  &.e-button-default {
    background: #fff;
    border-color: #dcdfe6;
    color: #606266;

    &.e-button-disabled {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;

      &:focus, &:hover {
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
      }
    }

    &:focus, &:hover {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }

    &.e-button-plain {
      &:focus, &:hover {
        background: #ffffff;
        border-color: #3a8ee6;
        color: #3a8ee6;
      }

      &.e-button-disabled {
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;

        &:focus, &:hover {
          color: #c0c4cc;
          cursor: not-allowed;
          background-image: none;
          background-color: #fff;
          border-color: #ebeef5;
        }
      }
    }
  }

  &.e-button-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &:focus, &:hover {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }

    &.e-button-disabled {
      cursor: not-allowed;
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;

      &:focus, &:hover {
        cursor: not-allowed;
        color: #fff;
        background-color: #a0cfff;
        border-color: #a0cfff;
      }
    }

    &.e-button-plain {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;

      &:focus, &:hover {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
      }

      &.e-button-disabled {
        cursor: not-allowed;
        color: #8cc5ff;
        background-color: #ecf5ff;
        border-color: #d9ecff;

        &:focus, &:hover {
          cursor: not-allowed;
          color: #8cc5ff;
          background-color: #ecf5ff;
          border-color: #d9ecff;
        }
      }
    }
  }

  &.e-button-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;

    &:focus, &:hover {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }

    &.e-button-disabled {
      cursor: not-allowed;
      color: #fff;
      background-color: #b3e19d;
      border-color: #b3e19d;

      &:focus, &:hover {
        cursor: not-allowed;
        color: #fff;
        background-color: #b3e19d;
        border-color: #b3e19d;
      }
    }

    &.e-button-plain {
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;

      &:focus, &:hover {
        background: #5daf34;
        border-color: #5daf34;
        color: #fff;
      }

      &.e-button-disabled {
        cursor: not-allowed;
        color: #a4da89;
        background-color: #f0f9eb;
        border-color: #e1f3d8;

        &:focus, &:hover {
          cursor: not-allowed;
          color: #a4da89;
          background-color: #f0f9eb;
          border-color: #e1f3d8;
        }
      }
    }
  }

  &.e-button-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;

    &:focus, &:hover {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }

    &.e-button-disabled {
      cursor: not-allowed;
      color: #fff;
      background-color: #c8c9cc;
      border-color: #c8c9cc;

      &:focus, &:hover {
        cursor: not-allowed;
        color: #fff;
        background-color: #c8c9cc;
        border-color: #c8c9cc;
      }
    }

    &.e-button-plain {
      color: #909399;
      background: #f4f4f5;
      border-color: #d3d4d6;

      &:focus, &:hover {
        background: #909399;
        border-color: #909399;
        color: #fff;
      }

      &.e-button-disabled {
        cursor: not-allowed;
        color: #bcbec2;
        background-color: #f4f4f5;
        border-color: #e9e9eb;

        &:focus, &:hover {
          cursor: not-allowed;
          color: #bcbec2;
          background-color: #f4f4f5;
          border-color: #e9e9eb;
        }
      }
    }
  }

  &.e-button-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;

    &:focus, &:hover {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }

    &.e-button-disabled {
      cursor: not-allowed;
      color: #fff;
      background-color: #f3d19e;
      border-color: #f3d19e;

      &:focus, &:hover {
        cursor: not-allowed;
        color: #fff;
        background-color: #f3d19e;
        border-color: #f3d19e;
      }
    }

    &.e-button-plain {
      color: #e6a23c;
      background: #fdf6ec;
      border-color: #f5dab1;

      &:focus, &:hover {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
      }

      &.e-button-disabled {
        cursor: not-allowed;
        color: #f0c78a;
        background-color: #fdf6ec;
        border-color: #faecd8;

        &:focus, &:hover {
          cursor: not-allowed;
          color: #f0c78a;
          background-color: #fdf6ec;
          border-color: #faecd8;
        }
      }
    }
  }

  &.e-button-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &:focus, &:hover {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }

    &.e-button-disabled {
      cursor: not-allowed;
      color: #fff;
      background-color: #fab6b6;
      border-color: #fab6b6;

      &:focus, &:hover {
        cursor: not-allowed;
        color: #fff;
        background-color: #fab6b6;
        border-color: #fab6b6;
      }
    }

    &.e-button-plain {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;

      &:focus, &:hover {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
      }

      &.e-button-disabled {
        cursor: not-allowed;
        color: #f9a7a7;
        background-color: #fef0f0;
        border-color: #fde2e2;

        &:focus, &:hover {
          cursor: not-allowed;
          color: #f9a7a7;
          background-color: #fef0f0;
          border-color: #fde2e2;
        }
      }
    }
  }

  &.e-button-round {
    border-radius: 20px;
    padding: 12px 23px;
  }

  &.e-button-circle {
    border-radius: 50%;
    padding: 12px;
  }

  &.e-button-medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }

  &.e-button-small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }

  &.e-button-mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
  }

  &.e-button-text {
    border-color: transparent;
    color: #3a8ee6;
    background-color: transparent;

    &:focus, &:hover {
      color: #66b1ff;
    }

    &.e-button-disabled {
      cursor: not-allowed;
      color: #c0c4cc;

      &:focus, &:hover {
        cursor: not-allowed;
        color: #c0c4cc;
      }
    }
  }
}
</style>