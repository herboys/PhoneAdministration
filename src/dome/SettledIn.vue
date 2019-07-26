<template>
    <div class="page">
      <main>
        <div>
          <ul>
            <li>
              <span>头像</span>
              <a>
                <img :src="imgurl"/>
              </a>
            </li>
            <li>
              <span>姓名</span>
              <a>
                <input v-model="realname" placeholder="请输入您的名字 " />
              </a>
            </li>
            <li>
              <span>性别</span>
              <a>
                <input v-model="sex" placeholder="请输入您的性别" />
              </a>
            </li>
            <li>
              <span>年龄</span>
              <a>
                <input v-model="age" placeholder="请输入您的年龄" />
              </a>
            </li>
            <li>
              <span style=" letter-spacing: .1rem;">手机号</span>
              <a>
                <input v-model="phone" placeholder="请填写您的手机号" />
              </a>
            </li>
            <li>
              <span style=" letter-spacing: 0.01rem;">公司名称</span>
              <a>
                <input v-model="company" placeholder="请填写您的公司名称" />
              </a>
            </li>
            <li @click="SettleTmapbtn">
              <span style=" letter-spacing: 0.01rem;">小区定位</span>
              <a>
                <input v-model="address" placeholder="点击选择小区">
              </a>
            </li>
          </ul>
        </div>
      </main>
      <div>
      </div>
      <div class="bottom" @click="Isexamine">
        <div>提交审核</div>
      </div>
    </div>
</template>

<script>
  import {adminAdd} from "@/request/api"
  import {mapState,mapMutations} from "vuex"
    export default {
        name: "SettledIn",
      data(){
        return{
          uid:'',
          imgurl:"",
          realname:"",
          sex:1,
          age:"",
          phone:"",
          company:"",
          address:""
        }
      },
      computed:{
        ...mapState(['userid','userimg','username','usercompany','DynamicAddress','PublicAddress'])
      },
      created() {
        this.uid=this.userid
        this.imgurl=this.userimg
        this.address=this.DynamicAddress.name
      },
      methods:{
          ...mapMutations(['PUBLICADDRESS']),
        SettleTmapbtn(){
          this.$router.push({path:'/SettleTmap'})
        },
        // 审核
        Isexamine(){
            let para={
              uid:this.uid,
              realname:this.realname,
              sex:this.sex,
              age:this.age,
              phone:this.phone,
              company:this.company,
            }
          adminAdd(para).then(res=>{
          }).catch(err=>{

          })
        }
      }
    }
</script>

<style scoped lang="scss">
  .page{
    font-size: .28rem;
    width: 100%;
    height: 100%;
    background-color: white;
  }
  main{
    div{
      ul{
        padding: .2rem;
        li{
          width: 100%;
          height: 1rem;
          border-bottom: .01rem solid #f5f5f5;
          display: flex;
          align-items: center;
          span{
            width: 2.2rem;
            font-size: .32rem;
            font-weight: bold;
            color: #333333;
            letter-spacing: .51rem;
          }
          a{
            width: 100%;
            img{
              width: .7rem;
              height: .7rem;
              border-radius: 50%;
            }
            input{
              width: 100%;
              height: .8rem;
              border:0px;
              outline: none;
              padding: 0;
              background-color: white;
              font-size: .3rem;
            }
          }
        }
      }
    }
  }
  .bottom{
    position: fixed;
    bottom: 0.2rem;
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
