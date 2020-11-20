<template>
  <div>
    <baseLayout title="基础用法" subTitle="单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。">
      <e-checkbox v-model="checked1">备选项1</e-checkbox>
      <e-checkbox v-model="checked2" label="备选项2"></e-checkbox>
    </baseLayout>
    <baseLayout title="禁用状态" subTitle="多选框不可用状态。">
      <e-checkbox v-model="checked1" disabled>备选项1</e-checkbox>
      <e-checkbox v-model="checked2" label="备选项2" disabled></e-checkbox>
    </baseLayout>
    <baseLayout title="多选框组" subTitle="适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。">
      <e-checkbox-group v-model="checkList">
        <e-checkbox label="复选框 A"></e-checkbox>
        <e-checkbox label="复选框 B"></e-checkbox>
        <e-checkbox label="复选框 C"></e-checkbox>
        <e-checkbox label="禁用" disabled></e-checkbox>
        <e-checkbox label="选中且禁用" disabled></e-checkbox>
      </e-checkbox-group>
    </baseLayout>
    <baseLayout
      title="indeterminate 状态"
      subTitle="indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果"
    >
      <e-checkbox :indeterminate="isIndeterminate" v-model="checked1">全选/反选</e-checkbox>
      <br />
      <br />
      <e-checkbox-group v-model="checkedCities">
        <e-checkbox label="复选框 A"></e-checkbox>
        <e-checkbox label="复选框 B"></e-checkbox>
        <e-checkbox label="复选框 C"></e-checkbox>
        <e-checkbox label="禁用"></e-checkbox>
        <e-checkbox label="选中且禁用"></e-checkbox>
      </e-checkbox-group>
    </baseLayout>
  </div>
</template>

<script>
export default {
  name: "checkbox",
  data() {
    return {
      checked1: true,
      checked2: false,
      checkList: ["选中且禁用", "复选框 A"],
      isIndeterminate: true,
      checkAll: false,
      checkedCities: [],
    };
  },
};
</script>

<style lang="stylus" scoped></style>