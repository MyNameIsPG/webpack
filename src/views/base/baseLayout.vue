<template>
  <div class="baseLayout">
    <h2 class="mainTitle">{{ title }}</h2>
    <p class="subtitle">{{ subTitle }}</p>
    <slot />
  </div>
</template>

<script>
export default {
  name: "baseLayout",
  props: {
    title: String,
    subTitle: String,
  },
};
</script>

<style lang="stylus" scoped>
.baseLayout {
  margin-bottom: 30px;
}

.mainTitle {
  font-weight: 400;
  color: #1f2f3d;
  font-size: 28px;
  color: #1f2d3d;
  margin: 0;
}

.subtitle {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}
</style>