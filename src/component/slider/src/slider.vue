<template>
  <div class="e-slider">
    <div class="e-slider__runway">
      <div class="e-slider__bar" ref="eSliderBar" style="left: 0px;"></div>
      <div
        class="e-slider__button-wrapper"
        ref="eSliderButton"
        @mousedown="handelMousedown($event)"
      >
        <div class="e-tooltip e-slider__button"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ESlider",
  props: {
    value: Number,
  },
  mounted() {
    this.setPosition(this.value);
  },
  watch: {
    value(value) {
      this.setPosition(value);
    },
  },
  methods: {
    setPosition(value) {
      let eSliderBar = this.$refs.eSliderBar;
      let eSliderButton = this.$refs.eSliderButton;
      if (eSliderBar) {
        eSliderBar.style.width = value + "%";
        eSliderButton.style.left = value + "%";
      }
    },
    handelMousedown(e) {
      let _this = this;
      // 获取父级左边的偏移量
      let parentOffsetLeft = e.currentTarget.parentElement.offsetLeft;
      // 获取父级的宽度
      let parentOffsetWidth = e.currentTarget.parentElement.offsetWidth;
      // 左边偏移量 = 父级左边的偏移量
      let leftOffset = parentOffsetLeft;
      // 右边偏移量 = 父级左边的偏移量 + 父级的宽度
      let rightOffset = parentOffsetLeft + parentOffsetWidth;

      // 鼠标拖动事件
      function fnMoveRange(e) {
        // 移动的位置大于左边的偏移量并且小于右边的偏移量
        if (e.pageX >= leftOffset && e.pageX <= rightOffset) {
          // count = 当前偏移量 - 左边偏移量 / 父级的宽度 * 100
          let count = parseInt(
            ((e.pageX - leftOffset) / parentOffsetWidth) * 100
          );
          _this.$emit("input", count);
        }
      }
      // 移除事件
      function fnEndRange() {
        document.removeEventListener("mousemove", fnMoveRange, false);
        document.removeEventListener("mouseup", fnEndRange, false);
      }
      document.addEventListener("mousemove", fnMoveRange, false);
      document.addEventListener("mouseup", fnEndRange, false);
    },
  },
};
</script>

<style lang="stylus" scoped>
.e-slider {
  .e-slider__runway {
    width: 100%;
    height: 6px;
    margin: 16px 0;
    background-color: #e4e7ed;
    border-radius: 3px;
    position: relative;
    cursor: pointer;
    vertical-align: middle;

    .e-slider__bar {
      height: 6px;
      background-color: #409eff;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      position: absolute;
    }

    .e-slider__button-wrapper {
      height: 36px;
      width: 36px;
      position: absolute;
      z-index: 1001;
      top: -15px;
      transform: translateX(-50%);
      background-color: transparent;
      text-align: center;
      user-select: none;
      line-height: normal;
      display: flex;
      align-items: center;
      justify-content: center;

      &:after {
        content: '';
        height: 100%;
      }

      .e-slider__button {
        width: 16px;
        height: 16px;
        border: 2px solid #409eff;
        background-color: #fff;
        border-radius: 50%;
        transition: 0.2s;
        user-select: none;
      }
    }
  }
}
</style>