<template>
  <div id="app">
    <div class="wrapper">
      <ul class="side">
        <li v-for="(item,index) in sideBarData" :key="index">
          <a :href="'#'+item.path">{{item.name}}</a>
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
      sideBarData: [
        {
          path: "/button",
          name: "Button 图标",
        },
      ],
    };
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

        &:hover {
          color: #409eff;
        }
      }
    }
  }

  .content {
    flex: 1;
  }
}
</style>

