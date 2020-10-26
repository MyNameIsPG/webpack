<template>
  <div class="e-select">
    <e-input
      readonly
      :placeholder="placeholder"
      @focus="handleFocus"
      @blur="handelBlur"
      :disabled="disabled"
      v-model="label"
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
  props: {
    placeholder: String,
    disabled: Boolean,
  },
  data() {
    return {
      visible: false,
      label: "",
      value: "",
    };
  },
  created() {
    this.$on("handleOptionClick", (obj) => {
      this.label = obj.label;
      this.value = obj.value;
      this.$emit("input", obj.value);
      this.handelBlur();
    });
  },
  methods: {
    handleFocus() {
      this.visible = true;
    },
    handelBlur() {
      this.visible = false;
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