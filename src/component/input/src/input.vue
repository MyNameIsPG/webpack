<template>
  <div
    :class="[
      type !== 'textarea' ? 'e-input' : 'e-textarea',
      disabled ? 'e-input-disabled' : '',
      size ? 'e-input-' + size : '',
    ]"
  >
    <input
      v-if="type !== 'textarea'"
      class="e-input__inner"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
    />
    <textarea
      v-else
      class="e-input__inner"
      :rows="rows"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "EInput",
  props: {
    value: [String, Number],
    disabled: Boolean,
    readonly: Boolean,
    size: {
      type: String,
      validator: (val) => {
        return ["medium", "small", "mini"].includes(val);
      },
    },
    type: String,
    placeholder: String,
    rows: Number,
  },
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

.e-textarea {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px;

  .e-input__inner {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

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
}
</style>