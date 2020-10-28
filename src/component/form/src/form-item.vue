<template>
  <div class="e-form-item" :class="[getProp ? 'is-required' : '', errorMsg ? 'is-error' : '']">
    <label v-if="label" class="e-form-item__label" :style="{ width: eForm.labelWidth }">{{ label }}</label>
    <div class="e-form-item__content" :style="{ marginLeft: eForm.labelWidth }">
      <slot></slot>
      <div v-if="errorMsg" class="e-form-item__error">{{ errorMsg }}</div>
    </div>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  name: "EFormItem",
  inject: ["eForm"],
  props: {
    label: String,
    prop: String,
  },
  data() {
    return {
      errorMsg: "",
    };
  },
  computed: {
    getProp() {
      if (this.prop) {
        return this.eForm.rules[this.prop];
      }
      return false;
    },
  },
  created() {
    this.$on("validate", () => {
      let rule = this.eForm.rules[this.prop];
      if (rule) {
        this.validate();
      }
    });
  },
  methods: {
    validate() {
      let value = this.eForm.model[this.prop];
      let rule = this.eForm.rules[this.prop];
      const validator = new Schema({ [this.prop]: rule });
      return validator.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.errorMsg = errors[0].message;
        } else {
          this.errorMsg = "";
        }
      });
    },
    resetValidate() {
      this.errorMsg = "";
    },
  },
};
</script>

<style lang="stylus" scoped>
.e-form-item {
  margin-bottom: 22px;

  .e-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }

  .e-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
  }
}

.e-form--inline {
  .e-form-item {
    display: inline-block;
    margin-right: 10px;
    vertical-align: top;

    .e-form-item__label {
      float: none;
      display: inline-block;
    }

    .e-form-item__content {
      display: inline-block;
      vertical-align: top;
    }
  }
}

.e-form-item__error {
  color: #f56c6c;
  font-size: 12px;
  line-height: 1;
  padding-top: 4px;
  position: absolute;
  top: 100%;
  left: 0;
}

.is-required {
  .e-form-item__label {
    &:before {
      content: '*';
      color: #f56c6c;
      margin-right: 4px;
    }
  }
}
</style>