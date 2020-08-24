<template>
  <div>
    <button class="p_button">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "PButton",
};
</script>

<style lang="stylus" scoped>
.p_button {
  background: #ffffff;
  border: 1px solid #dcdfe6;
  cursor: pointer;
  outline: none;
  padding: 12px 20px;
  font-size: 14px;
  color: #606266;
  border-radius: 4px;
}
</style>