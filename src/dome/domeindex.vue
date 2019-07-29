<template>
    <div>
      <header>
        <div>
          <div>
            <ul>
              <li>{{nickname}}</li>
              <li>
                <span>{{company}}</span>
<!--                <img  src="../assets/icon/Official.png"/>-->
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
          <div @click="admininvitePaybtn()">提现</div>
        </div>
      </div>
      <nav>
        <div class="nav-box">
          <img  src="../assets/icon/horn.png"/>
          <span>
            <ul class="marquee_list" :class="{marquee_top:animate}">
                <li v-for="(item, index) in marqueeList" >
                    <span>{{item.name}}</span>
                    <span>在</span>
                    <span class="red"> {{item.city}}</span>
                    <span>购买</span>
                    <span class="red"> {{item.amount}}</span>
                    <span>张月卡</span>
                </li>
            </ul></span>
        </div>
      </nav>
      <main>
        <ul>
          <li v-for="item in list" :key="item.name" @click="ModularGoing(item)">
            <div>
              <img :src="item.icon" />
              <p>
                <a>{{item.name}}</a>
              </p>
              <p>{{item.count}}</p>
            </div>
          </li>
        </ul>
      </main>
    </div>
</template>

<script>
  import { wxcode,login,authority,admininvitePay } from '@/request/api';
  import {mapState,mapMutations} from "vuex"
    export default {
        name: "domeindex",
      data(){
          return{
            list:[
              {
                id:1,
              icon:  require('../assets/icon/area.png'),
              name:"我的小区",
              itempath:"areaing",
                count:0,
            },{
                id:2,
                count:0,
              icon:  require('../assets/icon/service.png'),
              name:"我的服务人员",
              itempath:"serviceing"
            },{
                id:3,
                count:0,
              icon:  require('../assets/icon/Order.png'),
              name:"我的订单",
              itempath:"index"
            },{
                count:0,
                id:4,
              icon:  require('../assets/icon/user.png'),
              name:"我的用户",
              itempath:"usering"
            },{
                id:5,
                count:0,
              icon:  require('../assets/icon/agent.png'),
              name:"我的代理",
              itempath:"agenting"
            },{
                id:6,
                count:0,
              icon:  require('../assets/icon/Invitation.png'),
              name:"我的邀请",
              itempath:"Invitationing"
            },
            ],
            uid:"",
            nickname:'',
            imgurl:"",
            balance:'',
            company:"",
            marqueeList: [
              {
                name: '小小小胖',
                city: '海新城',
                amount: '111'
              },{
                name: '小小小胖',
                city: '海新城',
                amount: '122'
              },{
                name: '小小小胖',
                city: '海新城',
                amount: '133'
              },{
                name: '小小小胖',
                city: '海新城',
                amount: '44'
              },{
                name: '小小小胖',
                city: '海新城',
                amount: '155'
              },
            ],
            animate: false,
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
        setInterval(this.showMarquee, 2000)
        },
      mounted(){
          let para={
            uid:this.uid
          }
        authority(para).then(res=>{
          let Islist=res.list
          Islist.forEach((item)=>{
            item.icon=item.img
            item.name=item.content
            item.itempath=item.authority
            delete item.img
            delete item.content
            delete item.authority
          })
          this.list=Islist
        }).catch(err=>{

        })
      },
      methods:{
...mapMutations(['USERBALANCE']),
        showMarquee: function () {
          this.animate = true;
          setTimeout(()=>{
            this.marqueeList.push(this.marqueeList[0]);
            this.marqueeList.shift();
            this.animate = false;
          },500)},
        ModularGoing(item){
          switch (item.itempath){
          case "indexpppppp":
          break;
            default:
              this.$router.push({ path: item.itempath})
          }
        },
        admininvitePaybtn(){
          console.log(111)
          let para={
            uid:this.uid
          }
          admininvitePay(para).then(res=>{
            switch (res.status) {
              case 1:
                this.balance=0
                this.USERBALANCE(this.balance)
                break
            }

          })
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
     span{
       height: .6rem;
       overflow: hidden;

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
.marquee_list{
  margin-top: .05rem;
}

   .marquee_title {
     height: .6rem;
     font-size: 14px;
     border-right: 1px solid #d8d8d8;
     align-items: center;
   }

   .marquee_box {
     display: block;
     position: relative;
     height: .5rem;
     overflow: hidden;
   }

   .marquee_list {
     display: block;
     height: .5rem;
     /*position: absolute;*/
     /*top: 0;*/
     /*left: 0;*/
   }
   .marquee_top {
     transition: all 0.5s;
     margin-top: -.5rem
   }

   .marquee_list li {
     height: .5rem;
     line-height:  .5rem;
   }

   .marquee_list li span {
     padding: 0 2px;
   }

   .red {
     color: #FF0101;
   }
</style>
