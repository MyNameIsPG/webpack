<template>
  <div>form</div>
</template>

<script>
export default {
  name: "EForm",
  props: {
    model: Object,
    rules: Object,
    inline: Boolean,
    labelWidth: String,
    size: {
      type: String,
      default: "default",
      validator: (val) => {
        return ["medium", "small", "mini"].includes(val);
      },
    },
    disabled: Boolean,
  },
};
</script>

<style lang="stylus" scoped></style>