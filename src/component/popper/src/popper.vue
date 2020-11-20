<template>
  <transition name="fade">
    <div class="e-popper" :style="{ height: height, width: width }" v-show="visible">
      <div class="popper__arrow"></div>
      <div class="e-popper-wrap">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "EPopper",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: "300px",
    },
    width: {
      type: String,
      default: "360px",
    },
  },
};
</script>

<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.e-popper {
  position: absolute;
  z-index: 1001;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 10px 0;
  width: 100%;

  .e-popper-wrap {
    height: 100%;
    width: 100%;
    overflow: auto;
  }

  .popper__arrow, .popper__arrow:after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }

  .popper__arrow {
    border-width: 6px;
    filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
    top: -6px;
    left: 35px;
    margin-right: 3px;
    border-top-width: 0;
    border-bottom-color: #ebeef5;

    &:after {
      content: ' ';
      border-width: 6px;
      top: 1px;
      margin-left: -6px;
      border-top-width: 0;
      border-bottom-color: #fff;
    }
  }
}
</style>