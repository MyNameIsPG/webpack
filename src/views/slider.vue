<template>
  <div>
    <baseLayout title="基本用法" subTitle="在拖动滑块时，显示当前值">
      {{value1}}
      <e-slider v-model="value1"></e-slider>
      <br />
      {{value2}}
      <e-slider v-model="value2"></e-slider>
      <br />
      {{formatTooltip(value3)}}
      <e-slider v-model="value3" :format-tooltip="formatTooltip"></e-slider>
    </baseLayout>
  </div>
</template>

<script>
export default {
  name: "sliders",
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
    };
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    },
  },
};
</script>

<style lang="stylus" scoped></style>