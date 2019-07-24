<template>
    <div class="page">
      <header>
        <div>
          <div>
              <img  src="../assets/icon/area.png"/>
          </div>
          <div>
            <input v-model="keywords" />
            <span @click="tmapbtn">搜索</span>
          </div>
        </div>
      </header>
      <div style="height: 1rem"></div>
      <main>
        <div>
          <ul>
            <li v-for="item in locationislist" @click="islocationislistbtn(item)">
              <div>
                <span>
                  <img :src="isflase" v-if="item.disabled===false" />
                  <img :src="istrue" v-if="item.disabled===true" />
                </span>
              </div>
              <div>
                <p>{{item.cityname}}{{item.adname}}{{item.name}}</p>
                <p>{{item.adname}}{{item.address}}</p>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
</template>

<script>
  import { tmap,tmappage } from '@/request/api';
    export default {
        name: "tmap",
      data(){
          return{
            getLatitude:'121.47',
            isgetLongitude:"31.23",
            locationislist:[],
            keywords:'',
            istrue:require("../assets/icon/istrue.png"),
            isflase:require("../assets/icon/isflase.png"),
            istrueisflase:1
          }
      },
      mounted(){
        let para={
          location:this.getLatitude+","+this.isgetLongitude,
          keywords:"住宅区",
          key:"1a7f3a58bbf721501152c2fe1116f4db",
          radius:5000
        }
        tmappage(para).then(res => {
            let ispois=[]
          this.ispois=res.pois
          for (let i = 0; i < this.ispois.length; i++) {
            this.ispois[i].disabled=false
          }
          this.locationislist=this.ispois

        })  .catch(err => {
        })
      },
      methods:{
        tmapbtn(){
          let para={
            keywords:this.keywords,
            key:"1a7f3a58bbf721501152c2fe1116f4db"
          }
          tmap(para).then(res => {
            if(res.pois==""){
              console.log("暂无该地区")
            }else {
              let ispois=[]
              this.ispois=res.pois
              for (let i = 0; i < this.ispois.length; i++) {
                this.ispois[i].disabled=false
              }
              this.locationislist=this.ispois
            }
          })  .catch(err => {
          })
        },
        islocationislistbtn(item){
          item.disabled=true
          console.log(item)

        }
      }
    }
</script>

<style  lang="scss" scoped>
  .page{
    background-color: white;
    height: 100vh;
    width: 100%;
  }
  header{
background-color: white;
    z-index: 99;
    position: fixed;
    top: 0;
    width: 100%;
    height: 1rem;
    padding: 0 .2rem;
    div{
      background-color: #eeeeee;
      height: 1rem;
      display: flex;
      text-align: center;
      border-radius: .5rem;
      font-size: .3rem;
      padding: 0 .2rem;
      div{
        line-height: 1rem;
        width: 100%;
      }
      div:nth-child(1){
        position: relative;
        flex: 1;
        img{
          position: absolute;
          right: 0.1rem;
          top: 25%;
          width: .3rem;
          height: .3rem;
        }
      }
      div:nth-child(2){
        text-align: center;
        flex: 100;
        input{
          outline: none;
          width: 100%;
          height: .6rem;
          margin-top: .15rem;
          padding-left: .2rem;
          border:0px;
          border-radius: .3rem;
        }
        span{
          width: 1rem;
        }
      }
    }
  }
  main{
    padding: .3rem;
    div{
      ul{
        li{
          line-height: .5rem;
          border-bottom: .02rem solid #eeeeee;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          div{
            p{
              margin-left: .1rem;
              color: #999999;
              font-size: .2rem;
            }
            p:nth-child(1){
              font-size: .26rem;
              color: #333333;
            }
            span{
              position: relative;
              top: -.1rem;
              img{
                width: .4rem;
                height: .4rem;
              }
            }
          }

        }

      }

    }

  }
</style>
