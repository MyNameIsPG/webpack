<template>
  <div class="e-select" v-popup-click="visible" :disabled="disabled">
    <e-input
      readonly
      :placeholder="placeholder"
      :disabled="disabled"
      :value="label"
      :suffix-icon="visible ? 'icon-e-arrow-up' : 'icon-e-arrow-down'"
    />
    <e-option-group :visible="visible">
      <slot />
    </e-option-group>
  </div>
</template>

<script>
import EOptionGroup from "./option-group.vue";
import EInput from "../../input/src/input.vue";
import popupClick from "@/utils/directives/popup-click";
export default {
  name: "ESelect",
  components: { EOptionGroup, EInput },
  directives: {
    popupClick,
  },
  provide() {
    return {
      eSelect: this,
    };
  },
  props: {
    placeholder: String,
    disabled: Boolean,
    value: String,
  },
  data() {
    return {
      visible: false,
      label: "",
    };
  },
  created() {
    this.$on("handleChange", (value) => {
      this.handleChange(value);
    });
  },
  methods: {
    setValue(value) {
      this.$emit("input", value);
    },
    handleChange(value) {
      this.$emit("change", value);
      this.$parent.$emit("validate");
    },
  },
};
</script>

<style lang="stylus" scoped>
.e-select {
  display: inline-block;
  position: relative;
}
</style>