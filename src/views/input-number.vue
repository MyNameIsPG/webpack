<template>
  <div>
    <baseLayout title="基础用法">
      <e-input-number v-model="num1" :min="1" :max="10"></e-input-number>
    </baseLayout>
    <baseLayout title="禁用状态">
      <e-input-number v-model="num2" disabled></e-input-number>
    </baseLayout>
    <baseLayout title="步数" subTitle="允许定义递增递减的步数控制">
      <e-input-number v-model="num3" :step="2"></e-input-number>
    </baseLayout>
    <baseLayout title="严格步数">
      <e-input-number v-model="num4" :step="2" step-strictly></e-input-number>
    </baseLayout>
    <baseLayout title="精度">
      <e-input-number v-model="num5" :precision="3" :step="0.001" :max="10"></e-input-number>
    </baseLayout>
    <baseLayout title="尺寸"></baseLayout>
  </div>
</template>

<script>
export default {
  name: "inputNumber",
  data() {
    return {
      num1: 1,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 1,
    };
  },
};
</script>

<style lang="stylus" scoped></style>