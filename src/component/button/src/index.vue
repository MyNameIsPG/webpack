<template>
  <button
    type="button"
    class="e-button"
    :class="[
      'e-button-' + type,
      plain ? 'e-button-plain' : '',
      round ? 'e-button-round' : '',
      circle ? 'e-button-circle' : '',
      disabled ? 'e-button-disabled' : '',
      size ? 'e-button-' + size : '',
      icon ? 'e-button-icon' : '',
    ]"
    @click="handleClick"
  >
    <slot></slot>
    <span v-if="icon" class="icons" :class="icon"></span>
  </button>
</template>

<script>
export default {
  name: "EButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (val) => {
        return [
          "default",
          "primary",
          "success",
          "warning",
          "info",
          "danger",
          "text",
        ].includes(val);
      },
    },
    size: {
      type: String,
      validator: (val) => {
        return ["medium", "small", "mini"].includes(val);
      },
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
    icon: String,
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
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
  line-height: 1;

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

    &.e-button-medium {
      padding: 10px 20px;
      border-radius: 20px;
    }

    &.e-button-small {
      padding: 9px 15px;
      border-radius: 20px;
    }

    &.e-button-mini {
      padding: 7px 15px;
      border-radius: 20px;
    }
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

  &.e-button-default {
    &.e-button-icon {
      .icons {
        color: #333;
      }
    }
  }

  &.e-button-icon {
    .icons {
      color: #fff;
      font-size: 14px;
    }
  }
}

.e-button + .e-button {
  margin-left: 10px;
}
</style>