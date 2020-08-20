<template>
  <div class="bf-multiple-range" ref="bfMultipleRange">
    <div class="bf-range-track" ref="bfRangeTrack"></div>
    <span
      class="bf-slider bf-slider-min"
      ref="bfSliderMin"
      @mousedown="onButtonDown($event, 'min')"
    ></span>
    <span
      class="bf-slider bf-slider-max"
      ref="bfSliderMax"
      @mousedown="onButtonDown($event, 'max')"
    ></span>
  </div>
</template>

<script>
export default {
  name: "Range",
  props: {
    value: {
      type: [Number, Array],
    },
    leftValueChange: Function,
    rightValueChange: Function,
  },
  data() {
    return {
      valueArr: [],
    };
  },
  created() {
    this.valueArr = this.value;
  },
  methods: {
    onButtonDown(e, type) {
      let _this = this;
      e = e || window.event;
      e.stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
      if (type == "min") {
        this.$refs.bfSliderMin.style.zIndex = 9;
        this.$refs.bfSliderMax.style.zIndex = 8;
      } else {
        this.$refs.bfSliderMin.style.zIndex = 8;
        this.$refs.bfSliderMax.style.zIndex = 9;
      }
      let mixValue = this.valueArr[0];
      let maxValue = this.valueArr[1];
      let bfMultipleRangeOffsetLeft = this.$refs.bfMultipleRange.getBoundingClientRect().x;
      // 鼠标拖动事件
      function fnMoveRange(e) {
        e = e || window.event;
        let left = e.pageX - bfMultipleRangeOffsetLeft;
        if (left < 0) {
          left = 0;
        } else if (left >= 100) {
          left = 100;
        }
        // 左边小球跟右边小球
        if (type == "min") {
          let minValue = left;
          if (minValue > maxValue) {
            return false;
          }
          let arr = [minValue, maxValue];
          _this.valueArr = arr;
          if (_this.leftValueChange) {
            _this.leftValueChange(minValue);
          }
        } else {
          let maxValue = left;
          if (maxValue < mixValue) {
            return false;
          }
          let arr = [mixValue, maxValue];
          _this.valueArr = arr;
          if (_this.rightValueChange) {
            _this.rightValueChange(maxValue);
          }
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
    setSliderStyle(val) {
      // 获取进度条的总宽度
      let bfMultipleRangeWidth = this.$refs.bfMultipleRange.offsetWidth;
      // 获取要改变的值的dom
      let bfRangeTrackDom = this.$refs.bfRangeTrack;
      // 获取左侧小球的dom
      let bfSliderMin = this.$refs.bfSliderMin;
      // 获取右侧小球的dom
      let bfSliderMax = this.$refs.bfSliderMax;
      // 给左侧小球设置偏移的位置
      bfSliderMin.style.left =
        bfMultipleRangeWidth * (val[0] / 100) - 6 + "px";
      // 给右侧小球设置偏移的位置
      bfSliderMax.style.left =
        (bfMultipleRangeWidth / 100) * val[1] + 6 + "px";
      // 计算中间色块的宽度 （总宽度/100）* （第二个值-第一个值）- 12
      let width =
        (bfMultipleRangeWidth / 100) * val[1] -
        (bfMultipleRangeWidth / 100) * val[0];
      // 给中间色块设置偏移
      bfRangeTrackDom.style.left =
        bfMultipleRangeWidth * (val[0] / 100) + "px";
      // 给中间色块设置背景颜色
      bfRangeTrackDom.style.backgroundColor = "#409EFF";
      // 给中间色块设置宽度
      bfRangeTrackDom.style.width = width + "px";
    },
  },
  watch: {
    valueArr(val) {
      this.setSliderStyle(val);
      this.$emit("input", val);
    },
  },
};
</script>