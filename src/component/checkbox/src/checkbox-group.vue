<template>
  <div class="e-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ECheckboxGroup",
  props: {
    value: Array,
  },
  created() {
    this.$on("handleChange", (value) => {
      this.$emit("change", value);
    });
  },
};
</script>

<style lang="stylus" scoped></style>