<template>
  <e-popper :visible="visible" width="100%" height="184px">
    <ul class="e-select-dropdown__list">
      <slot></slot>
    </ul>
  </e-popper>
</template>

<script>
import EPopper from "../../popper/src/popper.vue";
export default {
  name: "EOptionGroup",
  components: {
    EPopper,
  },
  props: {
    visible: Boolean,
  },
};
</script>

<style lang="stylus" scoped>
.e-select-dropdown__list {
  list-style: none;
  padding: 6px 0;
  margin: 0;
  box-sizing: border-box;
}
</style>