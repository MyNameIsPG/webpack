<template>
  <table class="e-month-table">
    <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td
          v-for="(cell, cellIndex) in row"
          :key="cellIndex"
          :class="[cell.type, getCurrentStyle(cell)]"
        >
          <div @click="handleMonthTableClick(cell)">
            <a class="cell">{{months[cell.text]}}</a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import dateUtil from "@/utils/date-util";
import arrayUtil from "@/utils/array-util";
export default {
  name: "EMonthTable",
  inject: ["EDatePicker"],
  props: {
    date: Date,
  },
  data() {
    return {
      months: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
    };
  },
  computed: {
    rows() {
      let { year, month } = dateUtil.getYearMonthDay(this.date);
      let nowDate = dateUtil.getYearMonthDay(new Date());
      let rows = [];
      for (let i = 0; i < 12; i++) {
        let cell = {};
        cell.year = year;
        cell.month = i;
        cell.text = i;
        if (nowDate.year === year && nowDate.month === i) {
          cell.type = "today";
        } else {
          cell.type = "";
        }
        cell.current = false;
        rows.push(cell);
      }
      return arrayUtil.arrTrans(4, rows);
    },
  },
  methods: {
    getCurrentStyle(cell) {
      return cell.year === this.EDatePicker.selectYearValue &&
        cell.month === this.EDatePicker.selectMonthValue
        ? "current"
        : "";
    },
    handleMonthTableClick(cell) {
      this.$emit("pick", cell);
    },
  },
};
</script>

<style lang="stylus" scoped></style>