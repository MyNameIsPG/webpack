<template>
  <div>
    <baseLayout title="选择日" subTitle="以「日」为基本单位，基础的日期选择控件">
      <div style="display: flex;">
        <div>
          <e-date-picker v-model="value1" format="yyyy" type="year" placeholder="选择年"></e-date-picker>
        </div>
        <div style="margin: 0 20px;">
          <e-date-picker v-model="value2" type="month" format="yyyy-MM" placeholder="选择年月"></e-date-picker>
        </div>
        <div>
          <e-date-picker v-model="value3" type="date" format="yyyy-MM-dd" placeholder="选择年月日"></e-date-picker>
        </div>
      </div>
    </baseLayout>
  </div>
</template>

<script>
export default {
  name: "datePickers",
  data() {
    return {
      value1: new Date(),
      value2: "",
      value3: "",
    };
  },
};
</script>

<style lang="stylus" scoped></style>