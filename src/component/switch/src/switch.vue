<template>
  <div
    class="e-switch"
    :class="[value ? 'is-checked' : '', disabled ? 'is-disabled':'']"
    @click="handelClick"
  >
    <span class="e-switch__core"></span>
  </div>
</template>

<script>
export default {
  name: "ESwitch",
  props: {
    value: Boolean,
    disabled: Boolean,
  },
  methods: {
    handelClick() {
      if (!this.disabled) {
        this.$emit("input", !this.value);
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.e-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;

  .e-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;

    &:after {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }

  &.is-checked {
    .e-switch__core {
      border-color: #409eff;
      background-color: #409eff;

      &:after {
        left: 100%;
        margin-left: -17px;
      }
    }
  }

  &.is-disabled {
    opacity: 0.6;

    .e-switch__core {
      cursor: not-allowed;
    }
  }
}
</style>