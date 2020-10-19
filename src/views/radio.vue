<template>
  <div>
    <baseLayout
      title="基础用法"
      subTitle="由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。"
    >
      <e-radio v-model="radio" label="1" @change="change1">备选项</e-radio>
      <e-radio v-model="radio" label="2" @change="change1">备选项1</e-radio>
      <e-radio v-model="radio" label="3" @change="change1"></e-radio>
    </baseLayout>
    <baseLayout title="禁用状态" subTitle="单选框不可用的状态。">
      <e-radio v-model="radio1" label="1" disabled @change="change2"
        >备选项</e-radio
      >
      <e-radio v-model="radio1" label="2" disabled @change="change2"
        >备选项1</e-radio
      >
      <e-radio
        v-model="radio1"
        label="ada"
        disabled
        @change="change2"
      ></e-radio>
    </baseLayout>

    <baseLayout
      title="单选框组"
      subTitle="适用于在多个互斥的选项中选择的场景"
    >
      <e-radio-group v-model="radio3" @change="change3">
        <e-radio label="1">备选项</e-radio>
        <e-radio label="2" disabled>备选项1</e-radio>
        <e-radio label="3"></e-radio>
      </e-radio-group>
    </baseLayout>
  </div>
</template>

<script>
export default {
  name: "radios",
  data() {
    return {
      radio: "1",
      radio1: "1",
      radio3: "1",
    };
  },
  methods: {
    change1(a) {
      console.log(a);
    },
    change2(b) {
      console.log(b);
    },
    change3(b) {
      console.log(b);
    },
  },
};
</script>

<style lang="stylus" scoped></style>