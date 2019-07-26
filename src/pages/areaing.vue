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
            {{item.village}}
            </li>
             <li>
              {{item.earnings}}
            </li>
             <li>
              {{item.service}}
            </li>
             <li>
              {{item.usersum}}
            </li>
             <li>
              {{item.ordersum}}
            </li>

          </ul>
        </div>
      </main>
      <div class="bottom" @click="gotmap">
        <div>添加小区</div>
      </div>
    </div>
</template>

<script>
  import {villageList} from "@/request/api"
  import {mapState,mapMutations} from "vuex"
    export default {
        name: "areaing",
      data(){
          return{
            uid:"",
            page:1,
            isheader:[
              {
                name:"小区名称"
              },
 {
                name:"月收入金额 "
              },
 {
                name:"服务人员"
              },
 {
                name:"用户"
              },
 {
                name:"总单量"
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
        let para={
          uid:this.uid,
          page:this.page
        }
        villageList(para).then(res=>{
          this.total=res.count/10
          let Islist=res.list
          this.ismian=Islist
        }).catch(err=>{

        })
      },
      methods:{
        gotmap(){
          this.$router.push({ path: "/tmap"})
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
          font-size: .2rem;
        }
        li:nth-child(1){
          flex: 3;
        } li:nth-child(2){
          flex: 2;
        } li:nth-child(3){
          flex: 2;
        }li:nth-child(5){
          flex: 2;
        }
      }
    }
  }
  main{
    margin-bottom: 1.2rem;
    div{
      ul{
        display: flex;
        line-height: 1rem;
        text-align: center;
        font-size: .3rem;
        font-weight: bold;
        li{
          flex: 1;
          font-size: .2rem;
          border-bottom: .01rem solid #eeeeee;
          img{
            margin-top: .25rem;
            width: .7rem;
            height: .7rem;
            border-radius: 50%;

          }

        }
        li:nth-child(1){
          flex: 3;
        } li:nth-child(2){
            flex: 2;
          } li:nth-child(3){
              flex: 2;
            }li:nth-child(5){
               flex: 2;
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
  font-size: .4rem;
  font-weight:bold;
  color: white;
  padding: 0 .2rem;
  width: 100%;
  line-height: 1rem;
  div{
    border-radius: .6rem;
    background-color: #09D15A;
    text-align: center;
  }

}
</style>
