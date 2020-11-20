<template>
  <div>
    <baseLayout title="尺寸">
      <e-button @click="change">按钮</e-button>
      <e-popper :visible="visible"></e-popper>
    </baseLayout>
  </div>
</template>

<script>
export default {
  name: "popper",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    change() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style lang="stylus" scoped></style>