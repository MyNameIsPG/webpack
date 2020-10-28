<template>
  <div class="e-select">
    <e-input
      readonly
      :placeholder="placeholder"
      @focus="handleFocus"
      @blur="handelBlur"
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
export default {
  name: "ESelect",
  components: { EOptionGroup, EInput },
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
    handleFocus() {
      this.visible = true;
    },
    handelBlur() {
      this.visible = false;
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