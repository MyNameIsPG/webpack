<template>
  <div id="app">
    <img src="./assets/img/1.png" alt="">
    <ul class="bf-range-list">
      {{value1}}
      <li>
        
        <span class="bf-range-name">X</span>
        <div class="bf-section-range" id="sectionX">
          <range v-model="value1" />
        </div>
      </li>
      {{value2}}
      <li>
        
        <span class="bf-range-name">Y</span>
        <div class="bf-section-range" id="sectionY">
          <range v-model="value2" />
        </div>
      </li>
       {{value3}}
      <li>
       
        <span class="bf-range-name">Z</span>
        <div class="bf-section-range" id="sectionZ">
          <range
            v-model="value3"
            :leftValueChange="leftValueChange"
            :rightValueChange="rightValueChange"
          />
        </div>
      </li>
    </ul>
    我是背景图片
    <br>
    <div class="bg"></div>
    <br>
    <br>
    <div class="bg1"></div>
  </div>
</template>

<script>
import range from "./range";
export default {
  data() {
    return {
      value1: [20, 50],
      value2: [40, 80],
      value3: [0, 100]
    };
  },
  components: {
    range
  },
  methods: {
    leftValueChange(value) {
      console.log("左边小球的值", (value - 50) / 50);
    },
    rightValueChange(value) {
      let num = (value - 50) / 50;
      console.log("右边小球的值", num);
    }
  }
};
</script>

<style lang="stylus">
.bf-range-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.bf-range-list li {
  height: 30px;
  line-height: 30px;
}

.bf-range-list .bf-range-name {
  display: block;
  width: 22px;
  float: left;
  font-size: 12px;
}

.bf-range-list .bf-section-range {
  margin: 0;
  width: 100px;
  padding: 7px 0;
  float: left;
}

.bf-multiple-range {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 6px;
  background: #ccc;
  border-radius: 5px;
  margin: 5px 0;
}

.bf-multiple-range {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 6px;
  background: #ccc;
  border-radius: 5px;
  margin: 5px 0;
}

.bf-range-track {
  position: absolute;
  height: 100%;
}

.bf-slider {
  box-sizing: border-box;
  position: absolute;
  width: 12px;
  height: 12px;
  background: #ddd;
  border: 1px solid #979797;
  border-radius: 100px;
  top: -3px;
  cursor: pointer;
}

.bf-slider {
  box-sizing: border-box;
  position: absolute;
  width: 12px;
  height: 12px;
  background: #ddd;
  border: 1px solid #979797;
  border-radius: 100px;
  top: -3px;
  cursor: pointer;
}

.bf-slider-max {
  transform: translate(-100%, 0);
}</style>

