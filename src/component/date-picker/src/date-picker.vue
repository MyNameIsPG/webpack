<template>
  <div class="e-date-editor">
    <e-input
      :value="formatValue"
      prefixIcon="icon-e-calendar"
      :placeholder="placeholder"
      clearable
    />
    <div class="e-picker-panel">
      <div class="e-date-picker__header">
        <span @click="handlePrevYear" class="icon icon1 icon-e-double-arrow-left"></span>
        <span
          @click="handlePrevMonth"
          v-show="headerType=='date'"
          class="icon icon2 icon-e-arrow-left"
        ></span>
        <span class="text" v-show="headerType=='year'">{{ yearText }}</span>
        <span @click="handleMonth" class="text" v-show="headerType=='month'">{{ monthText }}</span>
        <span @click="handleDate" class="text" v-show="headerType=='date'">{{ dateText }}</span>
        <span @click="handleNextYear" class="icon icon4 icon-e-double-arro-right"></span>
        <span
          @click="handleNextMonth"
          v-show="headerType=='date'"
          class="icon icon3 icon-e-arrow-right"
        ></span>
      </div>
      <div class="e-picker-panel__content">
        <e-date-table :date="date" v-show="headerType=='date'" @pick="handleDatePick"></e-date-table>
        <e-month-table :date="date" v-show="headerType == 'month'" @pick="handleMonthPick"></e-month-table>
        <e-year-table :date="date" v-show="headerType == 'year'" @pick="handleYearPick"></e-year-table>
      </div>
    </div>
  </div>
</template>

<script>
import EInput from "../../input/src/input.vue";
import EYearTable from "./table/year.vue";
import EMonthTable from "./table/month.vue";
import EDateTable from "./table/date.vue";
import dateUtil from "@/utils/date-util";

export default {
  name: "EDatePicker",
  provide() {
    return {
      EDatePicker: this,
    };
  },
  components: {
    EInput,
    EYearTable,
    EMonthTable,
    EDateTable,
  },
  props: {
    type: String,
    value: {
      type: [Date, String],
      default: () => {
        return new Date();
      },
    },
    placeholder: {
      type: String,
      default: () => {
        return "选择日期";
      },
    },
    format: {
      type: String,
    },
  },
  data() {
    return {
      date: this.value,
      headerType: this.type,
      selectYearValue: "",
      selectMonthValue: "",
      selectDayValue: "",
    };
  },
  computed: {
    startYear() {
      return Math.floor(this.date.getFullYear() / 10) * 10;
    },
    yearText() {
      return `${this.startYear} 年 - ${this.startYear + 10} 年`;
    },
    monthText() {
      return `${this.date.getFullYear()} 年`;
    },
    dateText() {
      return `${this.date.getFullYear()} 年 ${this.date.getMonth() + 1} 月`;
    },
    formatValue() {
      if (this.value) {
        return dateUtil.formatDate(this.value, this.format);
      } else {
        return "";
      }
    },
  },
  created() {
    if (this.value) {
      this.date = this.value;
    } else {
      this.date = new Date();
      let { year } = dateUtil.getYearMonthDay(new Date());
      this.selectYearValue = year;
    }
  },
  methods: {
    /** 切换上一年 */
    handlePrevYear() {
      if (this.headerType == "year") {
        let year = new Date(Date.parse(this.date.getFullYear() - 10));
        this.date = year;
      }
      if (this.headerType == "month" || this.headerType == "date") {
        let year = new Date(Date.parse(this.date.getFullYear() - 1));
        this.date = year;
      }
    },
    /** 切换下一年 */
    handleNextYear() {
      if (this.headerType == "year") {
        let year = new Date(Date.parse(this.date.getFullYear() + 10));
        this.date = year;
      }
      if (this.headerType == "month" || this.headerType == "date") {
        let year = new Date(Date.parse(this.date.getFullYear() + 1));
        this.date = year;
      }
    },
    /** 切换上一月 */
    handlePrevMonth() {
      let curr = this.date.getMonth() - 1;
      let month = new Date(new Date().setMonth(curr)); //一个月
      this.date = month;
    },
    /** 切换下一月 */
    handleNextMonth() {
      let { year, month } = dateUtil.getYearMonthDay(this.date);
      let newDay;
      if (month == 11) {
        newDay = new Date(new Date().setFullYear(year + 1)); //一个月
      } else {
        newDay = new Date(new Date().setMonth(month + 1)); //一个月
      }
      this.date = newDay;
    },
    handleMonth() {
      this.headerType = "year";
    },
    handleDate() {
      this.headerType = "year";
    },
    handleYearPick(value) {
      if (this.type == "year") {
        let year = new Date(new Date().setFullYear(value));
        this.selectYearValue = value;
        this.$emit("input", new Date(year));
      }
      if (this.type == "month") {
        this.selectYearValue = value;
        this.headerType = "month";
        let year = new Date(new Date().setFullYear(value));
        this.date = year;
      }
      if (this.type == "date") {
        this.selectYearValue = value;
        this.headerType = "month";
        let year = new Date(new Date().setFullYear(value));
        this.date = year;
      }
    },
    handleMonthPick(cell) {
      if (this.type !== "date") {
        this.selectYearValue = cell.year;
        this.selectMonthValue = cell.month;
        this.selectDayValue = "";
        let newValue = new Date();
        newValue.setFullYear(this.selectYearValue);
        newValue.setMonth(this.selectMonthValue);
        let year = new Date(newValue);
        this.$emit("input", new Date(year));
      } else {
        this.headerType = "date";
        this.selectMonthValue = cell.month;
        this.selectDayValue = "";
        let newValue = new Date();
        newValue.setFullYear(this.selectYearValue);
        newValue.setMonth(this.selectMonthValue);
        let year = new Date(newValue);
        this.date = year;
      }
    },
    handleDatePick(cell) {
      this.selectYearValue = cell.year;
      this.selectMonthValue = cell.month;
      this.selectDayValue = cell.day;
      let newValue = new Date();
      newValue.setFullYear(this.selectYearValue);
      newValue.setMonth(this.selectMonthValue);
      newValue.setDate(this.selectDayValue);
      let year = new Date(newValue);
      this.$emit("input", new Date(year));
    },
  },
};
</script>

<style lang="stylus" scoped>
.e-picker-panel {
  color: #606266;
  border: 1px solid #e4e7ed;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 4px;
  line-height: 30px;
  margin: 5px 0;
  width: 292px;

  .e-date-picker__header {
    margin: 12px;
    text-align: center;

    .icon {
      font-size: 16px;
      color: #303133;
      border: 0;
      background: transparent;
      cursor: pointer;
      outline: none;

      &:hover {
        color: #409eff;
      }
    }

    .icon1, .icon2 {
      float: left;
    }

    .icon3, .icon4 {
      float: right;
    }

    .text {
      font-size: 16px;
      font-weight: 500;
      padding: 0 5px;
      line-height: 22px;
      text-align: center;
      cursor: pointer;
      color: #606266;

      &:hover {
        color: #409eff;
      }
    }
  }

  .e-picker-panel__content {
    position: relative;
    margin: 15px;

    >>>.e-date-table {
      table-layout: fixed;
      width: 100%;
      font-size: 12px;
      user-select: none;

      th {
        padding: 5px;
        color: #606266;
        font-weight: 400;
        border-bottom: 1px solid #ebeef5;
      }

      td {
        width: 32px;
        height: 30px;
        padding: 4px 0;
        box-sizing: border-box;
        text-align: center;
        cursor: pointer;
        position: relative;

        div {
          height: 30px;
          padding: 3px 0;
          box-sizing: border-box;
          text-align: center;

          span {
            width: 24px;
            height: 24px;
            display: block;
            margin: 0 auto;
            line-height: 24px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 50%;
            text-align: center;
          }
        }

        &.prev-month, &.next-month {
          color: #c0c4cc;
        }

        &.available {
          &:hover {
            color: #409eff;
          }
        }

        &.today {
          span {
            color: #409eff;
            font-weight: 700;
          }
        }

        &.current span {
          color: #fff;
          background-color: #409eff;
        }
      }
    }

    >>>.e-year-table, >>>.e-month-table {
      table-layout: fixed;
      width: 100%;
      font-size: 12px;
      user-select: none;

      td {
        text-align: center;
        padding: 20px 3px;
        cursor: pointer;

        .cell {
          width: 48px;
          height: 32px;
          display: block;
          line-height: 32px;
          color: #606266;
          margin: 0 auto;
          text-align: center;

          &:hover {
            color: #409eff;
          }
        }

        &.today {
          .cell {
            color: #409eff;
            font-weight: 700;
          }
        }

        &.current .cell {
          color: #409eff;
        }
      }
    }
  }
}
</style>