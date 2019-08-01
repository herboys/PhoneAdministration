<template>
    <div class="page">
        <ul>
            <li>
                <p>头像</p>
                <a>
                    <img :src="public_userimg">
                </a>
            </li>
            <li>
                <p>姓名</p>
                <a>
                    <input v-model="realname"  placeholder="请输入姓名"/>
                </a>
            </li>
            <li>
                <p>电话</p>
                <a>
                    <input  v-model="phone" placeholder="请输入联系方式"/>
                </a>
            </li>

        </ul>
<div class="bottom">
<span @click="isaxemine">提交申请</span>
</div>
    </div>
</template>

<script>
    import {adminAdd} from "@/request/api"
    import {mapState, mapMutations} from "vuex"
    export default {
        name: "LowSettledIn",
        data(){
          return{
              realname:"",
              phone:"",
              type_penson:"",
              public_userimg:"",
              uid:"",

          }
        },
        computed:{
            ...mapState(['Typeperson','userimg','userid'])
        },
        created() {
            this.type_penson=this.Typeperson
            this.public_userimg=this.userimg
            this.uid=this.userid
            console.log(this.type_penson)
        },
        methods:{
            isaxemine(){
                let para={
                    uid:this.uid,
                    realname:this.realname,
                    phone:this.phone,
                    type:this.type_penson
                }
                adminAdd(para).then(res=>{
                    if(res.status===1){
                        this.$router.push({ path: "/Audit"})
                    }
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
    background-color: white;
    ul{
        margin: 0 .6rem;
        li{
            padding: .5rem 0rem .2rem 0rem;
            width: 100%;
            border-bottom: 1px solid #EEEEEE;
            a{
                width: 100%;
                position: relative;
                img{
                    width: .8rem;
                    height: .8rem;
                    border-radius: 50%;
                }
                input{
                    outline: none;
                    border: 0px;
                    font-size: .5rem;
                    font-weight: bold;
                    background-color: white;
                }
                input:-ms-input-placeholder{
                    color: #333333;
                }
                input::-ms-input-placeholder{
                    color: #333333;
                }
                input::-webkit-input-placeholder{
                    color: #333333;
                }
            }
            p{
                position: relative;
                color: #999999;
                font-size: .2rem;
            }
            p:before{
                position: absolute;
                left: -.2rem;
                top: 23%;
                content: "";
                color: #09D15A;
                background-color: #09D15A;
                height: .15rem;
                width: .15rem;
                border-radius: 50%;
            }
        }
    }
    .bottom{
        width: 100%;
        text-align: center;
        span{
            background-color: #09D15A;
            border-radius: .4rem;
            color: white;
            font-weight: bold;
            font-size: .3rem;
            padding: .2rem 2rem;
        }
    }

}

</style>
