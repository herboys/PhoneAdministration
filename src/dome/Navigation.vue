<template>
  <div  v-show="navigationis">
    <div class="Navigation">
      <ul>
        <li>
          <a >
            <img src="../assets/icon/Navigation.png" />
          </a>
        </li>
      </ul>
    </div>
    <div class="Navigation_Btn" @click="Navigation_Btn">
      <div>马上入驻</div>
    </div>
  </div>
</template>

<script>
  import {login } from '@/request/api';
  import {mapState,mapMutations} from "vuex"
    export default {
        name: "Navigation",
      data(){
          return{
            navigationis:true

          }
      },
      computed:{
        ...mapState(['userstatus'])
      },
      mounted(){
          let hreas = window.location.href;
          let headers=hreas.split('=');
          let iscode=headers[2]+'=STATE'
          if(iscode.length>16){
            let  para={
              code:iscode,
            }
            login(para).then(res=>{
              // alert(JSON.stringify(res))
              this.USERID(res.info.id)
              this.USERIMG(res.info.imgurl)
              this.USERNAME(res.info.nickname)
              this.USERBALANCE(res.info.balance)
              this.USERSTATUS(res.info.status)
              // 判断返回状态值来判断是否审核通过
              switch (this.userstatus) {
                case 0:
                  this.navigationis=true
                  // this.$router.push({ path: "/SettledIn"})
                  break;
                case 1:
                  this.$router.push({ path: "/domeindex"})
                  break;
                case 2:
                  this.$router.push({ path: "/Audit"})
                  break;
              }
            })
          }

      },
      methods:{
          ...mapMutations(['USERID','USERIMG','USERNAME','USERBALANCE','USERSTATUS']),
         Navigation_Btn(){
           let islists=[{id:1},{id:2},{id:3},{id:4}]
           islists.forEach((item)=>{
             item.key=item.id
             delete item.id
             console.log(item,"foreach")
           } )
           console.log(islists,"foreach")
        //   total:' 初始值, 或者计算结束后的返回值。'
        //   currentValue :"当前元素"
        //   currentIndex :"当前元素的索引"
        //   arr:' 当前元素所属的数组对象。'
        //   initialValue:"可选。传递给函数的初始值"
        //   function(total,currentValue, index,arr)
           let lists=[{id:1},{id:2},{id:3},{id:4}]
          lists.map((item)=>{
             item.key=item.id
            delete item.id
            console.log(item)
           })
           console.log(lists)
          let sum=[{id:1},{id:2},{id:3},{id:4}].reduce((total,currentValue,currentIndex,arr)=>{
            console.log(total,"初次计算返回的值")
            console.log(currentValue.id,"当前元素")
            currentValue.key=currentValue.id
            delete currentValue.id
            console.log(currentIndex,"当前元素的索引值")
            console.log(arr,"当前元素所属数组")
            return total, currentValue, currentIndex, arr
          },null)
           console.log(sum ,"返回值")
           this.$router.push({ path: "/IdentitySelection"})
        }
      }
    }
</script>

<style scoped lang="scss">
  .Navigation{
    ul{
      margin-top: 1rem;
      li{
        width: 100%;
        padding: 1.2rem;
        a{
          width: 100%;
          img{
            height: 100%;
            width: 100%;
          }

        }
      }
    }
  }
  .Navigation_Btn{
    padding: 0 .4rem;
    div{
      padding: .3rem ;
      background:linear-gradient(90deg,rgba(9,209,90,1) 0%,rgba(116,221,53,1) 100%);
      box-shadow:0px 6px 18px 2px rgba(0,167,66,0.24);
      border-radius:49px;
      text-align: center;
      font-size:.4rem;
      font-family:SourceHanSansCN-Bold;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
  }


</style>
