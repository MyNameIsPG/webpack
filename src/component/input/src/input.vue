<template>
  <div
    :class="[
      type !== 'textarea' ? 'e-input' : 'e-textarea',
      size ? 'e-input-' + size : '',
      {
        'e-input-disabled': disabled,
        'e-input--prefix': $slots.prefix || prefixIcon,
        'e-input--suffix':
          $slots.suffix || suffixIcon || clearable || showPassword,
      },
    ]"
  >
    <template v-if="type !== 'textarea'">
      <input
        ref="input"
        class="e-input__inner"
        :value="value"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : 'text'"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />
      <!-- 前置内容 -->
      <span class="e-input__prefix" v-if="$slots.prefix || prefixIcon">
        <span class="e-input__prefix-inner">
          <slot name="prefix"></slot>
          <i class="e-input-icon" v-if="prefixIcon" :class="prefixIcon"> </i>
        </span>
      </span>
      <span
        class="e-input__suffix"
        v-if="clearable || showPassword || suffixIcon || $slots.suffix"
      >
        <span class="e-input__suffix-inner">
          <i
            class="e-input-icon icon-e-reeor"
            v-if="clearable"
            @click="clear"
          ></i>
          <i
            class="e-input-icon icon-e-browse"
            v-if="showPassword"
            @click="handlePasswordVisible"
          ></i>
          <slot name="suffix"></slot>
          <i class="e-input-icon" v-if="suffixIcon" :class="suffixIcon"> </i>
        </span>
      </span>
    </template>
    <template v-else>
      <textarea
        ref="textarea"
        class="e-input__inner"
        :value="value"
        :rows="rows"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      ></textarea>
    </template>
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
    // 是否清空
    clearable: Boolean,
    // 是否密码框
    showPassword: Boolean,
    prefixIcon: String,
    suffixIcon: String,
  },
  data() {
    return {
      hovering: false,
      focused: false,
      isComposing: false,
      passwordVisible: false,
    };
  },
  methods: {
    getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    focus() {
      this.getInput().focus();
    },
    blur() {
      this.getInput().blur();
    },
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
    handleFocus(event) {
      this.$emit("focus", event);
    },
    handleBlur(event) {
      this.$emit("blur", event);
    },
    handleChange(event) {
      this.$emit("change", event);
    },
    handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
      this.focus();
    },
    clear() {
      this.$emit("input", "");
      this.$emit("change", "");
      this.$emit("clear");
    },
  },
};
</script>

<style lang="stylus" scoped>
.e-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;

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

  .e-input__prefix {
    position: absolute;
    height: 100%;
    left: 5px;
    top: 0;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    width: 25px;

    .e-input__prefix-inner {
      line-height: 40px;

      .e-input-icon {
        font-size: 18px;
        color: #c0c4cc;
        transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:hover {
          color: #909399;
        }
      }
    }
  }

  .e-input__suffix {
    position: absolute;
    height: 100%;
    right: 5px;
    top: 0;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    width: 25px;

    .e-input__suffix-inner {
      line-height: 40px;
      width: 25px;

      .icon-e-reeor, .icon-e-browse {
        cursor: pointer;
      }

      .e-input-icon {
        font-size: 18px;
        color: #c0c4cc;
        transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:hover {
          color: #909399;
        }
      }
    }
  }

  &.e-input--prefix {
    .e-input__inner {
      padding-left: 30px;
    }
  }

  &.e-input--suffix {
    .e-input__inner {
      padding-right: 30px;
    }
  }

  &.e-input--suffix + &.e-input-medium {
    .e-input__suffix-inner {
      line-height: 36px;
    }
  }

  &.e-input--suffix + &.e-input-small {
    .e-input__suffix-inner {
      line-height: 32px;
    }
  }

  &.e-input--suffix + &.e-input-mini {
    .e-input__suffix-inner {
      line-height: 28px;
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