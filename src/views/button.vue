<template>
  <div>
    <baseLayout title="默认按钮" subTitle="基础类型按钮用法。">
      <div>
        <e-button @click="handleClick">默认按钮</e-button>
        <e-button type="primary">主要按钮</e-button>
        <e-button type="success">成功按钮</e-button>
        <e-button type="info">信息按钮</e-button>
        <e-button type="warning">警告按钮</e-button>
        <e-button type="danger">危险按钮</e-button>
      </div>
    </baseLayout>
    <baseLayout title="朴素按钮" subTitle="是否朴素按钮">
      <div>
        <e-button plain>默认按钮</e-button>
        <e-button type="primary" plain>主要按钮</e-button>
        <e-button type="success" plain>成功按钮</e-button>
        <e-button type="info" plain>信息按钮</e-button>
        <e-button type="warning" plain>警告按钮</e-button>
        <e-button type="danger" plain>危险按钮</e-button>
      </div>
    </baseLayout>
    <baseLayout title="圆角按钮" subTitle="是否圆角按钮">
      <div>
        <e-button round>默认按钮</e-button>
        <e-button type="primary" round>主要按钮</e-button>
        <e-button type="success" round>成功按钮</e-button>
        <e-button type="info" round>信息按钮</e-button>
        <e-button type="warning" round>警告按钮</e-button>
        <e-button type="danger" round>危险按钮</e-button>
      </div>
      <br />
      <div>
        <e-button plain round>默认按钮</e-button>
        <e-button plain type="primary" round>主要按钮</e-button>
        <e-button plain type="success" round>成功按钮</e-button>
        <e-button plain type="info" round>信息按钮</e-button>
        <e-button plain type="warning" round>警告按钮</e-button>
        <e-button plain type="danger" round>危险按钮</e-button>
      </div>
    </baseLayout>
    <baseLayout title="圆圈按钮" subTitle="是否圆形按钮">
      <div>
        <e-button circle icon="icon-e-pic"></e-button>
        <e-button type="primary" circle icon="icon-e-arrow-left"></e-button>
        <e-button type="success" circle icon="icon-e-arrow-right"></e-button>
        <e-button type="info" circle icon="icon-e-search"></e-button>
        <e-button type="danger" circle icon="icon-e-prompt"></e-button>
      </div>
    </baseLayout>
    <baseLayout title="禁用按钮" subTitle="是否禁用状态">
      <div>
        <e-button disabled>默认按钮</e-button>
        <e-button type="primary" disabled>主要按钮</e-button>
        <e-button type="success" disabled>成功按钮</e-button>
        <e-button type="info" disabled>信息按钮</e-button>
        <e-button type="warning" disabled>警告按钮</e-button>
        <e-button type="danger" disabled>危险按钮</e-button>
      </div>
      <br />
      <div>
        <e-button plain disabled>默认按钮</e-button>
        <e-button plain type="primary" disabled>主要按钮</e-button>
        <e-button plain type="success" disabled>成功按钮</e-button>
        <e-button plain type="info" disabled>信息按钮</e-button>
        <e-button plain type="warning" disabled>警告按钮</e-button>
        <e-button plain type="danger" disabled>危险按钮</e-button>
      </div>
    </baseLayout>
    <baseLayout title="文字按钮" subTitle="没有边框和背景色的按钮。">
      <e-button type="text">文字按钮</e-button>
      <e-button type="text" disabled>文字按钮</e-button>
    </baseLayout>
    <baseLayout
      title="不同尺寸"
      subTitle="Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。"
    >
      <div>
        <e-button>默认按钮</e-button>
        <e-button size="medium">默认按钮</e-button>
        <e-button size="small">默认按钮</e-button>
        <e-button size="mini">默认按钮</e-button>
      </div>
      <br />
      <div>
        <e-button plain round>默认按钮</e-button>
        <e-button plain round size="medium">默认按钮</e-button>
        <e-button plain round size="small">默认按钮</e-button>
        <e-button plain round size="mini">默认按钮</e-button>
      </div>
    </baseLayout>
  </div>
</template>

<script>
export default {
  name: "buttons",
  methods: {
    handleClick(evt) {
      console.log(evt);
    },
  },
};
</script>

<style lang="stylus" scoped>
.e-button+.e-button {
  margin-left: 10px;
}
</style>