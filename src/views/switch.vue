<template>
  <div>
    <baseLayout title="基本用法">
      <e-switch v-model="value1"></e-switch>
    </baseLayout>
    <baseLayout title="禁用状态">
      <e-switch v-model="value2" disabled></e-switch>
      <e-switch v-model="value3" disabled></e-switch>
    </baseLayout>
  </div>
</template>

<script>
export default {
  name: "switchs",
  data() {
    return {
      value1: true,
      value2: true,
      value3: false,
    };
  },
};
</script>

<style lang="stylus" scoped></style>