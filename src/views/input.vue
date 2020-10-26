<template>
  <div class="wrappers">
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
    <baseLayout title="可清空">
      <e-input v-model="input2" clearable />
    </baseLayout>
    <baseLayout title="密码框">
      <e-input v-model="input2" placeholder="请输入密码" show-password />
    </baseLayout>
    <baseLayout title="带 icon 的输入框 属性方式">
      <e-input v-model="input2" prefix-icon="icon-e-pic" />
      <e-input v-model="input2" suffix-icon="icon-e-pic" />
    </baseLayout>
    <baseLayout title="带 icon 的输入框 slot 方式">
      <e-input v-model="input2">
        <i slot="prefix" class="e-input-icon icon-e-pic"></i
      ></e-input>
      <e-input v-model="input2">
        <i slot="suffix" class="e-input-icon icon-e-pic"></i
      ></e-input>
    </baseLayout>
    <baseLayout title="复合型输入框"> </baseLayout>
    <baseLayout title="输入长度限制"> </baseLayout>
    <baseLayout title="尺寸">
      <e-input />
      <e-input v-model="input3" size="medium" />
      <e-input v-model="input3" size="small" />
      <e-input v-model="input3" size="mini" />
      <br />
      <br />
      <e-input v-model="input2" clearable />
      <e-input v-model="input2" clearable size="medium" />
      <e-input v-model="input2" clearable size="small" />
      <e-input v-model="input2" clearable size="mini" />
    </baseLayout>
    <baseLayout title="文本域">
      <e-input type="textarea" v-model="input4" />
      <br /><br />
      <e-input
        type="textarea"
        v-model="input4"
        :rows="5"
        placeholder="请输入内容"
      />
      <br /><br />
      <e-input
        type="textarea"
        v-model="input4"
        :rows="5"
        disabled
        placeholder="请输入内容"
      />
    </baseLayout>
  </div>
</template>

<script>
export default {
  name: "inputs",
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    };
  },
};
</script>

<style lang="stylus" scoped>
.wrappers {
  /deep/ .e-input {
    width: 180px;
  }
}
</style>