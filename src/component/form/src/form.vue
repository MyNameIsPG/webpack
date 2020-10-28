<template>
  <form class="e-form" :class="[inline ? 'e-form--inline' : '']">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "EForm",
  model: {
    prop: "model",
    event: "input",
  },
  provide() {
    return {
      eForm: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: Object,
    inline: Boolean,
    labelWidth: String,
    size: {
      type: String,
      default: "default",
      validator: (val) => {
        return ["default", "medium", "small", "mini"].includes(val);
      },
    },
    disabled: Boolean,
  },
  methods: {
    validate(callback) {
      const tasks = this.$children
        .filter((item) => this.rules[item.prop])
        .map((item) => item.validate());
      Promise.all(tasks)
        .then(() => {
          callback(true);
        })
        .catch(() => {
          callback(false);
        });
    },
    resetFields() {
      this.$children
        .filter((item) => this.rules[item.prop])
        .map((item) => item.resetValidate());
    },
  },
};
</script>

<style lang="stylus" scoped></style>