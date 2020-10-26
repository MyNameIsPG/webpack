<template>
  <div>
    <baseLayout title="基础用法" subTitle="适用广泛的基础单选">
      <e-select v-model="value1" placeholder="请选择">
        <e-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </e-option>
      </e-select>
    </baseLayout>
    <baseLayout title="有禁用选项">
      <e-select v-model="value1" placeholder="请选择">
        <e-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :disabled="item.disabled"
          :value="item.value"
        >
        </e-option>
      </e-select>
    </baseLayout>
    <baseLayout title="禁用状态" subTitle="选择器不可用状态">
      <e-select v-model="value1" placeholder="请选择" disabled>
        <e-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </e-option>
      </e-select>
    </baseLayout>
    <baseLayout
      title="可清空单选"
      subTitle="包含清空按钮，可将选择器清空为初始状态"
    >
    </baseLayout>
    <baseLayout
      title="基础多选"
      subTitle="适用性较广的基础多选，用 Tag 展示已选项"
    >
    </baseLayout>
    <baseLayout title="自定义模板" subTitle="可以自定义备选项"> </baseLayout>
    <baseLayout title="分组" subTitle="备选项进行分组展示"> </baseLayout>
    <baseLayout title="可搜索" subTitle="可以利用搜索功能快速查找选项">
    </baseLayout>
    <baseLayout
      title="远程搜索"
      subTitle="从服务器搜索数据，输入关键字进行查找"
    >
    </baseLayout>
    <baseLayout title="创建条目" subTitle="可以创建并选中选项中不存在的条目">
    </baseLayout>
  </div>
</template>

<script>
export default {
  name: "selects",
  data() {
    return {
      options1: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
          disabled: true,
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value1: "",
    };
  },
};
</script>

<style lang="stylus" scoped></style>