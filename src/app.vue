<template>
  <div id="app">
    <div class="wrapper">
      <ul class="side">
        <li v-for="(item, index) in sideBarData" :key="index">
          <a
            :href="'#' + item.path"
            :class="item.path == selectIndex ? 'active' : ''"
          >{{ item.name }}</a>
        </li>
      </ul>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectIndex: "",
      sideBarData: [
        {
          path: "/icon",
          name: "Icon 图标",
        },
        {
          path: "/button",
          name: "Button 按钮",
        },
        {
          path: "/radio",
          name: "Radio 单选框",
        },
        {
          path: "/checkbox",
          name: "Checkbox 多选框",
        },
        {
          path: "/input",
          name: "Input 输入框",
        },
        {
          path: "/input-number",
          name: "InputNumber 计数器",
        },
        {
          path: "/select",
          name: "Select 选择器",
        },
        {
          path: "/form",
          name: "Form 表单",
        },
      ],
    };
  },
  created() {
    this.selectIndex = this.$route.path;
  },
  mounted() {
    // let inp = document.getElementById("inp");
    // inp.addEventListener("input", this.debounce(this.sayHi, 500));
  },
  methods: {
    debounce(fn, delay = 500, immediate) {
      let timeout = null;
      return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fn.apply(this, arguments);
        }, delay);
      };
    },
    sayHi(event) {
      console.log(event);
    },
  },
  watch: {
    $route(router) {
      this.selectIndex = router.path;
    },
  },
};
</script>

<style lang="stylus" scope>
.wrapper {
  display: flex;
  width: 1140px;
  margin: 20px auto 0;

  .side {
    width: 240px;
    list-style: none;
    margin: 0px;

    li {
      a {
        display: block;
        height: 40px;
        color: #444;
        line-height: 40px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 400;
        text-decoration: none;

        &:hover, &.active {
          color: #409eff;
        }
      }
    }
  }

  .content {
    flex: 1;
    padding-left: 20px;
    box-sizing: border-box;
  }
}
</style>

