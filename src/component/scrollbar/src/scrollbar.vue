<template>
  <div class="e-scrollbar" ref="eScrollbar">
    <div class="e-scrollbar__wrap">
      {{arr}}
      <button @click="tt">按钮</button>
      <div class="e-scrollbar__view">
        <slot></slot>
      </div>
    </div>
    <div class="e-scrollbar__bar is-horizontal">
      <div class="e-scrollbar__thumb"></div>
    </div>
    <div class="e-scrollbar__bar is-vertical">
      <div class="e-scrollbar__thumb" style="height: 12.2481%; transform: translateY(51.0204%);"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EScrollbar",
  data() {
    return {
      arr: [1, 2],
    };
  },
  mounted() {
    let wrap_clientHeight = this.$refs.eScrollbar.clientHeight;
    let pd = this.$refs.eScrollbar.parentElement.clientHeight;
    console.log(pd);
    console.log(wrap_clientHeight);
  },
  methods: {
    tt(){
      //this.$set(this.arr, 0, 10)
      this.arr = [2,3]
    }
  }
};
</script>

<style lang="stylus" scoped>
.e-scrollbar {
  overflow: hidden;
  position: relative;

  .e-scrollbar__wrap {
    overflow: hidden;
    height: 100%;
    margin-bottom: -17px;
    margin-right: -17px;
    overflow-y: scroll;
  }

  .e-scrollbar__bar {
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 1;
    border-radius: 4px;
    transition: opacity 0.12s ease-out;

    .e-scrollbar__thumb {
      position: relative;
      display: block;
      width: 0;
      height: 0;
      cursor: pointer;
      border-radius: inherit;
      background-color: rgba(144, 147, 153, 0.3);
      transition: background-color 0.3s;
    }

    &.is-horizontal {
      height: 6px;
      left: 2px;

      > div {
        height: 100%;
      }
    }

    &.is-vertical {
      width: 6px;
      top: 2px;

      > div {
        width: 100%;
      }
    }
  }
}
</style>