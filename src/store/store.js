import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as mutations from './mutations.js'
import * as getters from './getters.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userid:1,   //用户ID
    userimg:require("../assets/mock/userimg.png"),       //头像
    username:"繁华待摘",
    userbalance:1000,         //余额
    type:1,
    status:0,         //状态0不是1审核通过2待审核
    usercompany:"此项目来自一位秃头少年"


  },
  getters,
  actions,
  mutations
})
