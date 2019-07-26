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
            <img :src="item.avatar" >
          </li>
          <li>
            {{item.name.substr(0,4)}}
          </li>
          <li>
            {{item.phone}}
          </li>
          <li>
            {{item.order_sum}}
          </li>
        </ul>
      </div>
    </main>
    <div class="bottom">共{{total}}页，当前是{{page}}页<span @click="NextPage">{{GoNextPage}}</span><span @click="IsNextPage">{{IsGoNextPage}}</span></div>
  </div>
</template>

<script>
  import {serviceList}from  '@/request/api';
  import {mapState,mapMutations} from "vuex"
  export default {
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
            name:"接单量"
          },

        ],
        ismian:[
          {
            name:"张三",
            isshouru:100,
            fuwu:10,
            user:100,
            yue:1000
          }
        ],
        total:'',
        GoNextPage:"前往下一页",
        IsGoNextPage:"返回上一页"
      }
    },
    computed:{
      ...mapState(['userid'])
    },
    created(){
      this.uid=this.userid
    },
    mounted(){
      this.Obtain()
    },

    methods:{
      Obtain(){
        let para={
          uid:this.uid,
          page:this.page
        }
        serviceList(para).then(res=>{
          this.total=res.count
          let Islist=res.list
          Islist.forEach((item)=>{
            item.name=item.realname
            delete item.realname
          })
          this.ismian=Islist
        }).catch(err=>{

        })
      },
      gotmap(){
        this.$router.push({ path: "/tmap"})
      },
      NextPage(){
        if(this.total>this.page){
          this.page++
          this.Obtain()
        }
        },
      IsNextPage(){
        if(this.page>1){
          this.page--
          this.Obtain()
        }
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
        li{
          flex: 1;
          font-size: .36rem;

        }
      }
    }
  }
  main{
    div{
      ul{
        display: flex;
        height: 1.2rem;
        text-align: center;
        font-size: .3rem;
        font-weight: bold;
        li{
          flex: 1;
          font-size: .2rem;
          border-bottom: .01rem solid #eeeeee;
          line-height: 1.2rem;
          img{
            margin-top: .25rem;
            width: .7rem;
            height: .7rem;
            border-radius: 50%;

          }
        }
      }
      ul:hover{
        background-color: beige;

      }
    }
  }
  .bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: .36rem;
    background-color: #09d15a;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    span{
      background-color: white;
      padding: .2rem .1rem;
      margin: 0 .1rem;
      border-radius: .2rem;
      color: #333333;
      font-weight: bold;
    }
  }
</style>
