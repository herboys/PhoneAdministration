<template>
  <div class="page">
    <div class="agenting-box">
      <img src="../assets/icon/box.png" />
    </div>
    <div class="IsCrowd">
      <ul>
        <li v-for="item in  list" :key="item.id">
          <img :src="item.list_icon" :style="item.isstyle">
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
    <div class="total">
      <div>
        <ul>
          <li>
            <img src="../assets/icon/TotalUser.png">
          </li>
          <li>
            <p>已经邀请</p>
            <p>1<span style="font-size: .34rem">人</span></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="total">
      <div>
        <ul>
          <li>
            <img src="../assets/icon/TotalMoney.png">
          </li>
          <li>
            <p>预计返利</p>
            <p>1<span style="font-size: .34rem">元</span></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="agenting-bottom">
      <div>
        <a>
          邀请</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "agenting",
    data(){
      return{
        list:[
          {
            id:1,
            list_icon:require("../assets/icon/Partner.png"),
            name:"物业合伙人",
            isstyle:"box-shadow:0px 2px 10px 2px rgba(28,205,185,0.24)"
          }, {
            id:2,
            list_icon:require("../assets/icon/Servicepersonal.png"),
            name:"服务人员",
            isstyle:"box-shadow:0px 5px 8px 2px rgba(180,106,250,0.3);"
          }, {
            id:3,
            list_icon:require("../assets/icon/Publicuser.png"),
            name:"普通用户",
            isstyle:"box-shadow:0px 5px 8px 2px rgba(254,182,15,0.3);"
          },
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/index";
  .agenting-box{
    padding: .4rem;
    img{
      width: 100%;
      height: 100%;
      border-radius: .4rem;
      box-shadow:0px 5px 8px 2px rgba(9,209,90,0.2);
    }
  }
  .IsCrowd{
    padding:.3rem;
    ul{
      display: flex;
      align-items: center;
      text-align: center;
      li{
        flex: 1;
        img{
          width: 1.3rem;
          height: 1.3rem;
          border-radius: 50%;
        }

        p{
          font-size: .3rem;
          font-weight:500;
          color: #333333;
        }
      }
    }
  }
  .total{
    margin-top:.5rem ;
    div{
      width: 100%;
      margin: auto;
      ul{
        display: flex;
        align-items: center;
        li{
          width: 100%;
          p{
            font-size: .34rem;
          }
        }
        li:nth-child(1){
          flex: 1;
          text-align: right;
          position: relative;
          img{
            position: absolute;
            top: -.95rem;
            right: .2rem;
            width: .34rem;
            height: .34rem;
            padding: 0px;
            margin: 0px;
          }
        }
        li:nth-child(2){
          flex: 5;
          text-align: left;
          border-bottom: 1px solid #eeeeee;
          p:nth-child(2){
            margin-top:.5rem ;
            margin-bottom: .2rem;
            font-size: .6rem;
          }
        }
      }
    }
  }
  .agenting-bottom{
    position: fixed;
    bottom: 1rem;
    right: 0.3rem;
    div{
      width:1.3rem;
      height:1.3rem;
      font-size: .3rem;
      text-align: center;

      font-weight: bold;
      color: white;
      background:linear-gradient(0deg,rgba(9,209,90,1) 0%,rgba(116,221,53,1) 100%);
      box-shadow:0px 5px 8px 2px rgba(9,209,90,0.2);
      border-radius:50%;
      a{
        line-height: 1.2rem;
      }
    }
  }

</style>
