<template>
    <div class="page">
        <div class="Room">
            <div class="Room-child">
                <header>现金提现无门槛</header>
                <ul>
                    <li>
                        <p>18<span>元</span></p>
                        <p>现金等你来拿</p>
                        <div>
                            <img :src="qrcode">
                        </div>
                        <ol>
                            <li>    扫码邀请新用户</li>
                        </ol>

                    </li>
                </ul>
            </div>
            <div class="Room-Btn">
                分享邀请链接
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-title">
                <div>我的邀请</div>
                <div @click="Cash_withdrawal">提现</div>
            </div>
            <div class="bottom-room">
                <ul>
                    <li>{{inviteSum}}<span>人</span></li>
                    <li>已邀请</li>
                </ul><ul>
                    <li>{{annualSum}}<span>人</span></li>
                    <li>月卡用户</li>
                </ul><ul>
                    <li>{{balanceSum}}<span>元</span></li>
                    <li>已到手红包</li>
                </ul>

            </div>
            <p>想要获得更多现金，马上去邀请更多好友吧~</p>
        </div>
    </div>
</template>

<script>
    import {adminInvite,admininvitePay} from "@/request/api"
    import {mapState, mapMutations} from "vuex"
    export default {
        name: "agency",
        data(){
          return{
              uid:"",
              qrcode:'',
              annualSum:''
          }
        },
        computed:{
            ...mapState(['userid'])
        },
        created(){
          this.uid=this.userid
        },
        mounted() {
            let para={
                uid:this.uid
            }
            adminInvite(para).then(res=>{
                this.qrcode=res.qrcode
                this.annualSum=res.annualSum
                this.balanceSum=res.balanceSum
                this.inviteSum=res.inviteSum

                }).catch(err=>{

            })
        },
        methods:{
            Cash_withdrawal(){
                let para={
                    uid:this.uid
                }
                admininvitePay(para).then(res=>{

                }).catch(err=>{

                })

            }
        }
    }
</script>

<style scoped lang="scss">
.page{
    width: 100%;

    padding:  .4rem;
    background:linear-gradient(180deg,rgba(9,209,90,1) 0%,rgba(204,255,225,1) 65%,rgba(9,209,90,1) 100%);
    .Room{
        width: 100%;
        background-color: #CCFFE1;
        box-shadow:0px 6px 18px 2px rgba(0,167,66,0.24);
        border-radius: .2rem;
        padding: .6rem;
        .Room-child{
            border-radius: .2rem;
            border: .02rem solid #09D15A;
            height: 7.8rem  ;
            header{
                position: relative;
                top: -.3rem;
                font-size: .3rem;
                text-align: center;
                height: .6rem;
                line-height: .6rem;
                margin: auto;
                color: white;
                width: 43%;
                background-color: #09D15A;
            }
            header:before{
                position: absolute;
                left: -.3rem;
                content: "";
                width:0;
                height:0;
                border-top:.3rem solid transparent;
                border-bottom:.3rem solid transparent;
                border-right:.3rem solid #09D15A;
            }
            header:after{
                position: absolute;
                right: -.3rem;
                content: "";
                width:0;
                height:0;
                border-top:.3rem solid transparent;
                border-bottom:.3rem solid transparent;
                border-left:.3rem solid #09D15A;
            }
            ul{
                text-align: center;
                width: 100%;
                li{
                    margin: auto;
                    width: 100%;
                    p{
                        color: #09D15A;
                        font-size: 2rem;
                        font-weight: bold;
                        span{
                           position: relative;
                            top: -.2rem;
                            font-size: 1.2rem;
                        }
                    }
                    p:nth-child(2){
                        font-size: .58rem;
                    }
                    div{
                        margin: auto;
                        margin: .4rem auto;
                        background-color: white;
                        width: 2.7rem;
                        height: 2.7rem;
                        img{
                            margin-top: .1rem;
                            width: 2.5rem;
                            height: 2.5rem;
                        }
                    }
                    ol{
                        margin-top: .45rem;
                        li{
                            width: 50%;
                            font-size: .3rem;
                            background-color: #CCFFE1;
                            font-weight: bold;
                            color: #09D15A;
                        }
                    }

                }
            }
        }
        .Room-Btn{
            margin-top: .4rem;
            font-size: .4rem;
            font-weight: bold;
            text-align: center;
            border-radius: .4rem;
            color: #FC581E;
            padding: .2rem 0;
            background:linear-gradient(0deg,rgba(255,215,155,1) 0%,rgba(255,248,238,1) 100%);
            box-shadow:0px 6px 18px 2px rgba(221,76,5,0.24);
        }
    }
    .bottom{
        margin-top: .3rem;
        border-radius: .2rem;
        width: 100%;
        background:rgba(255,255,255,1);
        box-shadow:0px 6px 18px 2px rgba(0,167,66,0.24);
        .bottom-title{
            font-size: .36rem;
            display: flex;
            justify-content: space-between;
            padding: .4rem;
        }
        .bottom-room{
            display: flex;
            font-size: .36rem;
            justify-content: center;
            align-content: center;
            ul{
                border-left: 1px solid #EEEEEE;
                padding: .4rem;
                li:nth-child(1){
                    color: #FC581E;
                    font-size: .4rem;
                    font-weight: bold;
                    span{
                        font-size: .2rem;
                        font-weight: bold;
                    }
                }
                li:nth-child(2){
                    color: red;
                    font-size: .2rem;
                    color: #043016;
                    font-weight: bold;
                }
            }
            ul:nth-child(1){
                border:0px
            }
        }
        p{
            font-size: .18rem;
            text-align: center;
            padding: .4rem  ;
        }
    }
}
</style>
