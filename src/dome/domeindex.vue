<template>
    <div>
      <header>
        <div>
          <div>
            <ul>
              <li>{{nickname}}</li>
              <li>
                <span>{{company}}</span>
                <img  src="../assets/icon/Official.png"/>
              </li>
            </ul>
          </div>
          <div>


                <img :src="imgurl" />


          </div>
        </div>

      </header>
      <div class="box">
        <div class="box_wrap">
          <div>
            <ul>
              <li>
                总收益金额
              </li>
              <li>
                {{balance}}
              </li>
            </ul>
          </div>
          <div>提现</div>
        </div>
      </div>
      <nav>
        <div class="nav-box">
          <img  src="../assets/icon/horn.png"/>
          <span>{{code}}小小胖已经成功办理年卡</span>
        </div>
      </nav>
      <main>
        <ul>
          <li v-for="item in list" :key="item.id" @click="ModularGoing(item)">
            <div>
              <img :src="item.icon" />
              <p>
                <a>{{item.name}}</a>
              </p>
              <p>12</p>
            </div>
          </li>
        </ul>
      </main>
    </div>
</template>

<script>
  import { wxcode,login } from '@/request/api';
  import {mapState,mapMutations} from "vuex"
    export default {
        name: "domeindex",
      data(){
          return{
            code:[],
            list:[
              {
                id:1,
              icon:  require('../assets/icon/area.png'),
              name:"我的小区",
              itempath:"areaing"
            },{
                id:1,
              icon:  require('../assets/icon/service.png'),
              name:"我的服务人员",
              itempath:"serviceing"
            },{
                id:1,
              icon:  require('../assets/icon/Order.png'),
              name:"我的订单",
              itempath:"index"
            },{
                id:1,
              icon:  require('../assets/icon/user.png'),
              name:"我的用户",
              itempath:"usering"
            },{
                id:1,
              icon:  require('../assets/icon/agent.png'),
              name:"我的代理",
              itempath:"agenting"
            },{
                id:1,
              icon:  require('../assets/icon/Invitation.png'),
              name:"我的邀请",
              itempath:"Invitationing"
            },
            ],
            uid:"",
            nickname:'',
            imgurl:"",
            balance:'',
            company:""

          }
      },
      computed:{
        ...mapState(['userid','userimg','username','userbalance','usercompany'])
      },
      created(){
        this.uid=this.userid
        this.imgurl=this.userimg
        this.nickname=this.username
        this.company=this.usercompany
        this.balance=this.userbalance

        if(this.code==''){
          let hreas = window.location.href;
          let headers=hreas.split('=');
          let iscode=headers[2]+'=STATE'
          if(iscode.length>16){
            let  para={
              code:iscode,
            }
            login(para).then(res=>{
              // alert(JSON.stringify(res))
              // this.code=res
            })
          }
        }

        },
      mounted(){
      },
      methods:{
        ModularGoing(item){
          let ispath=item.itempath
          this.$router.push({ path: ispath})

        }
      }
    }
</script>

<style scoped lang="scss">
   header{
  padding:  .3rem;
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
      ul{
        li{
          font-size: .3rem;
        }
        li:nth-child(1){
          color: #333333;
          font-weight:bold;
        }
        li:nth-child(2){
          color: #666666;
          font-size: .24rem;
          display: flex;
          align-items: center;
          img{
            width: .28rem;
            height: .28rem;
            border: 0px;
            margin-left: .05rem;
          }
          span{
            font-size: .26rem;
          }
        }

      }
      img{
        width:.75rem;
        height: .75rem;
        border:.05rem solid rgba(9,209,90,1);
        border-radius: 50%;

      }
    }
  }
}
  .box{
    padding:0 .4rem;
    height: 2.4rem;
    .box_wrap{
      box-shadow:0px 5px 8px 2px rgba(9,209,90,0.3);
      background-color: #09D15A;
      height: 100%;
      width: 100%;
      border-radius: .2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size:.36rem;
      padding: 0 .8rem;
      font-weight: 500;
      div:nth-child(1){
        ul{
          color: white;
          li:nth-child(1){
            font-size: .3rem;
          }
          li:nth-child(2){
            font-size: .6rem;
            font-weight: bold;
          }
        }
      }
      div:nth-child(2){
        color: #09D15A;
        background-color: white;
        padding: .1rem .4rem;
        border-radius: .4rem;
      }
    }
  }
   nav{
     margin-top: .3rem;
     background-color: #f5f5f5;
     padding: 0 .3rem;
     .nav-box{
       padding: 0 .3rem;
       background-color: white;
       border-radius: .4rem;
       font-size: .3rem;
       line-height: .8rem;
       display: flex;
       align-items: center;
       img{
         width: .42rem;
         height: .39rem;
         margin-right:.2rem ;
       }
     }
   }
   main{
     padding: 0   .3rem ;
     margin-top: .3rem;
     border-radius: .4rem;
     ul{
       position: relative;
       clear: both;
       li{
         float: left;
         width: 50%;
         height: 3.5rem;
         background-color: white;
         border:1px solid #F5F5F5;
         font-size: .2rem;
         div{
           margin: .8rem auto 0 auto;
           width: 2rem;
           img{

             width: .8rem;
             margin: 0 .6rem;
           }
           p:nth-child(2){
            width: 100%;
             font-size: .3rem;
             text-align: center;
             font-weight:400;
             color:rgba(51,51,51,1);
             a{
               text-align: center;
               margin: auto;
             }
           }
           p:nth-child(3){
             font-size: .35rem;
             font-weight:bold;
             color:rgba(51,51,51,1);
             text-align: center;
           }
         }
       }
     }
     ul:before{

     }

   }
</style>
