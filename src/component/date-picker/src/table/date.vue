<template>
  <table class="e-date-table">
    <tbody>
      <tr>
        <th>日</th>
        <th>一</th>
        <th>二</th>
        <th>三</th>
        <th>四</th>
        <th>五</th>
        <th>六</th>
      </tr>
      <tr class="e-date-table__row" v-for="(row, index) in rows" :key="index">
        <td
          v-for="(cell, index) in row"
          :key="index"
          :class="[cell.type, cell.today, getCurrentStyle(cell)]"
        >
          <div @click="handleDateTableClick(cell)">
            <span>{{cell.text}}</span>
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
  name: "EDateTable",
  inject: ["EDatePicker"],
  props: {
    date: Date,
  },
  computed: {
    rows() {
      let { year, month, day } = dateUtil.getYearMonthDay(this.date);
      let nowDate = dateUtil.getYearMonthDay(new Date());
      let currentDays = dateUtil.getDate(year, month, 1);
      let week = currentDays.getDay();
      week = week === 0 ? 7 : week;
      let startDay = currentDays - week * 60 * 60 * 1000 * 24;
      let rows = [];
      for (let i = 0; i < 42; i++) {
        let date = new Date(startDay + i * 60 * 60 * 1000 * 24);
        let newDate = dateUtil.getYearMonthDay(date);
        let cell = {};
        cell.year = newDate.year;
        cell.month = newDate.month;
        cell.day = newDate.day;
        cell.text = newDate.day;
        if (month === newDate.month) {
          cell.type = "available";
        } else {
          cell.type = "next-month";
        }
        if (
          newDate.year === nowDate.year &&
          newDate.month === nowDate.month &&
          newDate.day === nowDate.day
        ) {
          cell.today = "today";
        } else {
          cell.today = "";
        }
        rows.push(cell);
      }
      return arrayUtil.arrTrans(7, rows);
    },
  },
  methods: {
    getCurrentStyle(cell) {
      return cell.year === this.EDatePicker.selectYearValue &&
        cell.month === this.EDatePicker.selectMonthValue &&
        cell.day === this.EDatePicker.selectDayValue
        ? "current"
        : "";
    },
    handleDateTableClick(cell) {
      this.$emit("pick", cell);
    },
  },
};
</script>

<style lang="stylus" scoped></style>