// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "@/store/store";

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) { // 判断跳转的路由是否需要登录
//     if (store.state.token) { // vuex.state判断token是否存在
//       next() // 已登录
//     } else {
//       next({
//         path: '/domeindex',
//         query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   } else {
//     next()
//   }
//
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
