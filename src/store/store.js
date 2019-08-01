import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as mutations from './mutations.js'
import * as getters from './getters.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token:'',
    userid:25,   //用户ID
    userimg:require("../assets/mock/userimg.png"),       //头像
    username:"繁华待摘",
    userbalance:1000,         //余额
    type:1,
    userstatus:1,         //状态0不是1审核通过2待审核
    usercompany:"",
    Typeperson:"",


    // 动态添加地址
    DynamicAddress:"",
    PublicAddress:[]


  },
  getters,
  actions,
  mutations
})
