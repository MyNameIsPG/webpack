<template>
  <div class="e-checkbox-group"><slot></slot></div>
</template>

<script>
export default {
  name: "ECheckboxGroup",
  props: {
    value: Array,
  },
};
</script>

<style lang="stylus" scoped></style>