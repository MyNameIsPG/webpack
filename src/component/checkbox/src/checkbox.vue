<template>
  <label
    class="e-checkbox"
    :class="[
      model ? 'e-checkbox-checked' : '',
      disabled ? 'e-checkbox-disabled' : '',
    ]"
  >
    <span class="e-checkbox__input">
      <span class="e-checkbox__inner"></span>
      <input
        ref="checkbox"
        class="e-checkbox-original"
        :value="value"
        type="checkbox"
        aria-hidden="true"
        v-model="model"
        @change="handleChange"
        tabindex="-1"
        :disabled="disabled"
      />
    </span>
    <span class="e-checkbox__label"
      ><slot>{{ label }}</slot></span
    >
  </label>
</template>

<script>
Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};
import Emitter from "@/mixins/emitter";
export default {
  name: "ECheckbox",
  mixins: [Emitter],
  props: {
    value: [String, Number, Boolean],
    label: [String, Number, Boolean],
    disabled: Boolean,
  },
  data() {
    return {
      checked: false,
    };
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== "ECheckboxGroup") {
          parent = parent.$parent;
        } else {
          this._checkboxGroup = parent;
          return true;
        }
      }
      return false;
    },
    isChecked() {
      let data = this._checkboxGroup.value;
      let keys = "";
      if (data) {
        data.forEach((item) => {
          if (item === this.label) {
            keys = item;
          }
        });
      }
      return keys;
    },
    model: {
      get() {
        return this.isGroup ? this.isChecked : this.value;
      },
      set(val) {
        this.checked = val;
        this.$emit("input", val);
      },
    },
  },
  methods: {
    handleChange() {
      if (!this.disabled) {
        this.$nextTick(() => {
          if (this.isGroup) {
            let data = this._checkboxGroup.value;
            if (this.checked) {
              data.push(this.label);
            } else {
              data.remove(this.label);
            }
            this.isGroup &&
              this.dispatch("ECheckboxGroup", "handleChange", data);
          } else {
            this.$emit("change", this.value);
          }
        });
      }
    },
  },
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

  .e-checkbox-original {
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