<template>
  <div class="e-select-dropdown e-popper" v-show="visible">
    <div class="popper__arrow"></div>
    <div class="e-select-dropdown-wrap">
      <ul class="e-select-dropdown__list">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "EOptionGroup",
  props: {
    visible: Boolean,
  },
};
</script>

<style lang="stylus" scoped>
.e-select-dropdown {
  position: absolute;
  z-index: 1001;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 10px 0;
  width: 100%;

  .e-select-dropdown-wrap {
    max-height: 274px;
    overflow: auto;

    .e-select-dropdown__list {
      list-style: none;
      padding: 6px 0;
      margin: 0;
      box-sizing: border-box;
    }
  }

  .popper__arrow, .popper__arrow:after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }

  .popper__arrow {
    border-width: 6px;
    filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
    top: -6px;
    left: 35px;
    margin-right: 3px;
    border-top-width: 0;
    border-bottom-color: #ebeef5;

    &:after {
      content: ' ';
      border-width: 6px;
      top: 1px;
      margin-left: -6px;
      border-top-width: 0;
      border-bottom-color: #fff;
    }
  }
}
</style>