<template>
  <li
    class="e-select-dropdown__item"
    :class="[
      disabled ? 'is-disabled' : '',
      isSelected == value ? 'selected' : '',
    ]"
    @mousedown="selectOptionClick"
  >
    {{ label }}
  </li>
</template>

<script>
import Emitter from "@/mixins/emitter";
export default {
  name: "EOption",
  mixins: [Emitter],
  props: {
    value: [String, Number, Boolean],
    label: [String, Number],
    disabled: Boolean,
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== "ESelect") {
          parent = parent.$parent;
        } else {
          this._select = parent;
          return true;
        }
      }
      return false;
    },
    isSelected() {
      return this.isGroup ? this._select.value : "";
    },
  },
  methods: {
    selectOptionClick() {
      if (!this.disabled) {
        this.dispatch("ESelect", "handleOptionClick", {
          label: this.label,
          value: this.value,
        });
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.e-select-dropdown__item {
  font-size: 14px;
  padding: 0 20px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606266;
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #f5f7fa;
  }

  &.selected {
    color: #409eff;
    font-weight: 700;
  }

  &.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
</style>