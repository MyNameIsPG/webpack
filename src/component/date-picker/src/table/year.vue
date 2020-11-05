<template>
  <table class="e-year-table" @click="handleYearTableClick">
    <tbody>
      <tr>
        <!-- today -->
        <td class="available" :class="[getCellStyle(startYear+0), getCurrentStyle(startYear+0)]">
          <a class="cell">{{startYear}}</a>
        </td>
        <td class="available" :class="[getCellStyle(startYear+1), getCurrentStyle(startYear+1)]">
          <a class="cell">{{startYear +1}}</a>
        </td>
        <td class="available" :class="[getCellStyle(startYear+2), getCurrentStyle(startYear+2)]">
          <a class="cell">{{startYear +2}}</a>
        </td>
        <td class="available" :class="[getCellStyle(startYear+3), getCurrentStyle(startYear+3)]">
          <a class="cell">{{startYear +3}}</a>
        </td>
      </tr>
      <tr>
        <td class="available" :class="[getCellStyle(startYear+4), getCurrentStyle(startYear+4)]">
          <a class="cell">{{startYear +4}}</a>
        </td>
        <td class="available" :class="[getCellStyle(startYear+5), getCurrentStyle(startYear+5)]">
          <a class="cell">{{startYear +5}}</a>
        </td>
        <td class="available" :class="[getCellStyle(startYear+6), getCurrentStyle(startYear+6)]">
          <a class="cell">{{startYear +6}}</a>
        </td>
        <td class="available" :class="[getCellStyle(startYear+7), getCurrentStyle(startYear+7)]">
          <a class="cell">{{startYear +7}}</a>
        </td>
      </tr>
      <tr>
        <td class="available" :class="[getCellStyle(startYear+8), getCurrentStyle(startYear+8)]">
          <a class="cell">{{startYear +8}}</a>
        </td>
        <td class="available" :class="[getCellStyle(startYear+9), getCurrentStyle(startYear+9)]">
          <a class="cell">{{startYear +9}}</a>
        </td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "EYearTable",
  inject: ["EDatePicker"],
  props: {
    date: Date,
  },
  computed: {
    startYear() {
      return Math.floor(this.date.getFullYear() / 10) * 10;
    },
  },
  methods: {
    getCellStyle(date) {
      return date === new Date().getFullYear() ? "today" : "";
    },
    getCurrentStyle(date) {
      return date === this.EDatePicker.selectYearValue ? "current" : "";
    },
    handleYearTableClick(event) {
      const target = event.target;
      if (target.tagName === "A") {
        const year = target.textContent || target.innerText;
        this.$emit("pick", Number(year));
      }
    },
  },
};
</script>

<style lang="stylus" scoped></style>