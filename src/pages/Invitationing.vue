<template>
  <div class="page">
   <div @click="btn">asdasd</div>
  </div>
</template>

<script>
  export default {
    name: "agenting",
    data() {
      return {}
    },
    mounted() {
      wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
        wx.updateAppMessageShareData({
          title: '快代扔', // 分享标题
          desc: '提供上门带仍垃圾服务', // 分享描述
          link: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx369502e55f9d6567&redirect_uri=https://www.tiaoxinkeji.com/waste?invite=0&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: 'https://www.txkuaiyou.com/uploads/images/logo.png', // 分享图标
          success: function () {
            alert(111)
          }
        })
      });
    },
    methods:{
      btn(){

      }
    }
  }
</script>

<style scoped lang="scss">


</style>
