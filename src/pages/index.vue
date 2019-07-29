<template>
  <div class="page">
    <header>
      <div>
        <ul>
          <li v-for="item in isheader" :key="item.name">
            {{item.name}}
          </li>
        </ul>
      </div>
    </header>
    <div style="height: 1rem"></div>
    <main>
      <div>
        <ul  v-for="item in ismian" :key="item.name">
          <li>
            <img  :src="item.avatars"/>
          </li>
          <li>
            {{item.realname.substr(0,3)}}
          </li>
          <li>
            {{item.phone}}
          </li>
          <li v-if="item.status===0">
            待接单
          </li> <li v-if="item.status===1">
            待服务
          </li> <li v-if="item.status===2">
            待确认
          </li> <li v-if="item.status===3">
            已完成
          </li>
          <li>
            {{item.village}}
          </li>

        </ul>
      </div>
    </main>
    <div class="ispages">
      <div>
        <span>总{{total}}页</span>
        <span>当前{{page}}页</span>
        <span @click="GoBack">上一页</span>
        <span @click="GoNext">下一页</span>
      </div>

    </div>
  </div>
</template>

<script>
  import {orderList} from "@/request/api"
  import {mapState,mapMutations} from "vuex"
  export default {
    name: "areaing",
    data(){
      return{
        uid:"",
        page:1,
        isheader:[
          {
            name:"头像"
          },
          {
            name:"姓名 "
          },
          {
            name:"手机号"
          },
          {
            name:"状态"
          },
          {
            name:"小区"
          },

        ],
        ismian:[
        ]
      }
    },
    computed:{
      ...mapState(['userid'])
    },
    created(){
      this.uid=this.userid
    },
    mounted(){
      this.FistList()
    },
    methods:{
      gotmap(){
        this.$router.push({ path: "/tmap"})
      },
      GoBack(){
        if(this.page>1){
          this.page--
          this.FistList()
        }
      },
      GoNext(){
        if(this.total>this.page){
          this.page++
          this.FistList()
        }
      },
      FistList(){
        let para={
          uid:this.uid,
          page:this.page
        }
        orderList(para).then(res=>{
          this.total=Math.ceil(res.count/10)
          let Islist=res.list
          this.ismian=Islist
        }).catch(err=>{

        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .page{
    height: 100vh;
    width: 100%;
    background-color:white;
  }
  header{
    position: fixed;
    top: 0;
    width: 100%;
    div{
      ul{
        display: flex;
        text-align: center;
        background-color: #09D15A;
        color: white;
        line-height: 1rem;
        font-size: .28rem;
        overflow: hidden;
        li{

          flex: 1;
          font-size: .36rem;
        }
        li:nth-child(1){
          flex: 1;
        } li:nth-child(2){
            flex: 1;
          }li:nth-child(3){
             flex: 2;
           }li:nth-child(4){
              flex: 1;
            }
        li:nth-child(5){
          flex: 3;
        }
      }
    }
  }
  main{
    background-color: white;
    div{
      ul{
        display: flex;
        height: 1.2rem;
        text-align: center;
        font-size: .3rem;
        font-weight: bold;
        height: 100%;
        overflow: scroll;
        li{
          flex: 1;
          font-size: .2rem;
          border-bottom: .01rem solid #eeeeee;
          line-height: 1.2rem;
          overflow: hidden;
          img{
            margin-top: .25rem;
            width: .7rem;
            height: .7rem;
            border-radius: 50%;
          }
        }
        li:nth-child(1){
          flex: 1;
        } li:nth-child(2){
            flex: 1;
          }li:nth-child(3){
             flex: 2;
           }li:nth-child(4){
              flex: 1;
            }
        li:nth-child(5){
          flex: 3;
        }
      }
      ul:hover{
        background-color: beige;

      }
    }
  }
  .ispages{
    height: 1.2rem;
    line-height: 1.2rem;
    background-color: white;
    div{
      display: flex;
      font-size: .3rem;
      text-align: center;
      span{
        flex: 1;

      }
    }
  }

</style>
