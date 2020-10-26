<template>
  <label
    class="e-radio"
    :class="[
      model === label ? 'e-radio-checked' : '',
      disabled ? 'e-radio-disabled' : '',
    ]"
  >
    <span class="e-radio__input">
      <span class="e-radio__inner"></span>
      <input
        ref="radio"
        class="e-radio-original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="model"
        @change="handleChange"
        tabindex="-1"
        :disabled="disabled"
      />
    </span>
    <span class="e-radio__label"
      ><slot>{{ label }}</slot></span
    >
  </label>
</template>

<script>
import Emitter from "@/mixins/emitter";
export default {
  name: "ERadio",
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Number, Boolean],
    },
    label: {
      type: [String, Number, Boolean],
    },
    disabled: Boolean,
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== "ERadioGroup") {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }
      return false;
    },
    model: {
      get() {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch("ERadioGroup", "input", [val]);
        } else {
          this.$emit("input", val);
        }
      },
    },
  },
  methods: {
    handleChange() {
      if (!this.disabled) {
        this.$nextTick(() => {
          this.$emit("change", this.model);
          this.isGroup &&
            this.dispatch("ERadioGroup", "handleChange", this.model);
        });
      }
    },
  },
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

  .e-radio-original {
    opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
  }
}
</style>