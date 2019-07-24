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
            {{item.name}}
          </li>
          <li>
            {{item.isshouru}}
          </li>
          <li>
            {{item.fuwu}}
          </li>
          <li>
            {{item.user}}
          </li>


        </ul>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isheader:[
          {
            name:"姓名"
          },
          {
            name:"关注 "
          },
          {
            name:"月卡"
          },
          {
            name:"年卡"
          },

        ],
        ismian:[
          {
            name:"张三",
            isshouru:100,
            fuwu:10,
            user:100,
          }
        ]
      }
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
      }
    }
  }
  main{
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
        }
      }
      ul:hover{
        background-color: beige;

      }
    }
  }
</style>
