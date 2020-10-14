<template>
  <div class="e-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ERadioGroup",
  props: {
    value: [String, Number, Boolean],
  },
  created() {
    this.$on("handleChange", (value) => {
      this.$emit("change", value);
    });
  },
};
</script>

<style lang="stylus" scoped></style>