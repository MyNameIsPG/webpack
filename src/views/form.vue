<template>
  <div>
    <baseLayout
      title="典型表单"
      subTitle="包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。"
    >
      <e-form ref="form" :model="typicalForm" label-width="80px"> </e-form>
    </baseLayout>
    <baseLayout
      title="行内表单"
      subTitle="当垂直方向空间受限且表单较简单时，可以在一行内放置表单。"
    >
    </baseLayout>
    <baseLayout
      title="对齐方式"
      subTitle="根据具体目标和制约因素，选择最佳的标签对齐方式。"
    >
    </baseLayout>
    <baseLayout
      title="表单验证"
      subTitle="在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。"
    >
    </baseLayout>
    <baseLayout
      title="自定义校验规则"
      subTitle="这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。"
    >
    </baseLayout>
    <baseLayout title="动态增减表单项"> </baseLayout>
    <baseLayout title="数字类型验证"> </baseLayout>
    <baseLayout
      title="表单内组件尺寸控制"
      subTitle="通过设置 Form 上的 size 属性可以使该表单内所有可调节大小的组件继承该尺寸。Form-Item 也具有该属性。"
    >
    </baseLayout>
  </div>
</template>

<script>
export default {
  name: "form",
  data() {
    return {
      typicalForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
};
</script>

<style lang="stylus" scoped></style>