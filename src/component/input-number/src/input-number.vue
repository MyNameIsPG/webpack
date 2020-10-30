<template>
  <div class="e-input-number" :class="[disabled? 'is-disabled' : '']">
    <span
      class="e-input-number__decrease"
      :class="[disabled ? 'is-disabled' : '']"
      @click="decrease"
    >
      <i class="icon-e-sami-select"></i>
    </span>
    <span
      class="e-input-number__increase"
      :class="[disabled ? 'is-disabled' : '']"
      @click="increase"
    >
      <i class="icon-e-add-select"></i>
    </span>
    <e-input :value="value" :disabled="disabled" @input="hanldeInput" />
  </div>
</template>

<script>
import EInput from "../../input/src/input.vue";
export default {
  name: "EInputNumber",
  components: {
    EInput,
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    step: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    disabled: Boolean,
    precision: Number,
  },
  methods: {
    toPrecision(num, precision) {
      return parseFloat(
        Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision)
      );
    },
    decrease() {
      if (!this.disabled) {
        let initialValue = this.value;
        let afterCalculation = initialValue - this.step;
        if (this.precision) {
          afterCalculation = this.toPrecision(afterCalculation, this.precision);
        }
        if (afterCalculation >= this.min) {
          this.$emit("input", afterCalculation);
        }
      }
    },
    increase() {
      if (!this.disabled) {
        let initialValue = this.value;
        let afterCalculation = initialValue + this.step;
        if (this.precision) {
          afterCalculation = this.toPrecision(afterCalculation, this.precision);
        }
        if (afterCalculation <= this.max) {
          this.$emit("input", afterCalculation);
        }
      }
    },
    hanldeInput(value) {
      this.$emit("input", Number(value));
    },
  },
};
</script>

<style lang="stylus" scoped>
.e-input-number {
  position: relative;
  display: inline-block;
  width: 180px;
  line-height: 37px;

  .e-input-number__decrease, .e-input-number__increase {
    position: absolute;
    z-index: 1;
    top: 1px;
    width: 40px;
    height: auto;
    text-align: center;
    background: #f5f7fa;
    color: #606266;
    cursor: pointer;
    font-size: 13px;

    i {
      color: #606266;
      cursor: pointer;
      font-size: 13px;
    }
  }

  .e-input-number__decrease {
    left: 1px;
    border-radius: 4px 0 0 4px;
    border-right: 1px solid #dcdfe6;
  }

  .e-input-number__increase {
    right: 1px;
    border-radius: 0 4px 4px 0;
    border-left: 1px solid #dcdfe6;
  }

  .is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;

    i {
      color: #e4e7ed;
    }
  }

  >>>.e-input {
    .e-input__inner {
      text-align: center;
    }
  }
}
</style>