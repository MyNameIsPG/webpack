<template>
  <div>
    <baseLayout
      title="基础用法"
      subTitle="由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。"
    >
      <e-input v-model="input1" placeholder="请输入" />
    </baseLayout>
    <baseLayout title="禁用状态">
      <e-input v-model="input2" disabled />
      <e-input v-model="input2" readonly />
    </baseLayout>
    <baseLayout title="尺寸">
      <e-input />
      <e-input v-model="input3" size="medium" />
      <e-input v-model="input3" size="small" />
      <e-input v-model="input3" size="mini" />
    </baseLayout>
    <baseLayout title="文本域">
      <e-input type="textarea" />
      <br /><br />
      <e-input type="textarea" rows="5" placeholder="请输入内容" />
      <br /><br />
      <e-input type="textarea" rows="5" disabled placeholder="请输入内容" />
    </baseLayout>
  </div>
</template>

<script>
export default {
  name: "inputs",
  data() {
    return {
      input1: "",
      input2: "2",
      input3: "",
    };
  },
};
</script>

<style lang="stylus" scoped></style>