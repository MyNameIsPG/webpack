import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const arr = require.context('../views', false, /\.vue$/).keys();
const routes = arr.map(v => {
  const suffixSubscript = v.indexOf('.vue');
  const name = v.substring(2, suffixSubscript);
  return {
    path: v.substring(1, suffixSubscript),
    name,
    component: require(`../views/${name}`).default
  }
})


routes.unshift({
  path: '/',
  component: () => import('../views/button.vue')
})


const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;