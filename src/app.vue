<template>
  <div id="app">
    <ul class="bf-range-list">
      <li>
        <span class="bf-range-name">X</span>
        <div class="bf-section-range" id="sectionX">
          <range v-model="value1" />
        </div>
      </li>
      <li>
        <span class="bf-range-name">Y</span>
        <div class="bf-section-range" id="sectionY">
          <range v-model="value2" />
        </div>
      </li>
      <li>
        <span class="bf-range-name">Z</span>
        <div class="bf-section-range" id="sectionZ">
          <range v-model="value3" />
        </div>
      </li>
    </ul>

    <el-button>22222222</el-button>
  </div>
</template>

<script>
import range from "./range";
export default {
  data() {
    return {
      a: "2222222",
      value1: [4, 8],
      value2: [4, 8],
      value3: [4, 8],
    };
  },
  components: {
    range,
  },
};
</script>

<style>
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
  width: 152px;
  float: left;
  padding: 7px 0;
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
}
</style>