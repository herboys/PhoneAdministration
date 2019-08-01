<template>
    <div class="page">
        <header>
            请选择您的身份
        </header>
        <main>
            <ul v-for="item in list" :key="item.id" @click="isture(item)">
                <li>
                    <a ><img  v-if="item.istype===false" :src="item.head"></a>
                    <a ><img  v-if="item.istype===true" :src="item.ishead"></a>
                    {{item.name}}
                </li>
            </ul>
        </main>
        <button class="Button" @click="go()">马上入驻</button>
    </div>
</template>

<script>
    import {mapState ,mapMutations} from "vuex"
    export default {
        name: "IdentitySelection",
        data(){
            return{
                list:[
                    {
                        id:1,
                        name:"物业人员",
                        head:require('../assets/icon/headone.png'),
                        ishead:require('../assets/icon/isheadone.png'),
                        istype:false
                    },
                    {
                        id:2,
                        name:"一级代理",
                        head:require('../assets/icon/headtwo.png'),
                        ishead:require('../assets/icon/isheadtwo.png'),
                        istype:false
                    },
                    {
                        id:3,
                        name:"推广人员",
                        head:require('../assets/icon/headtree.png'),
                        ishead:require('../assets/icon/isheadtree.png'),
                        istype:false
                    }
                ],
                listid:''
            }
        },
        methods:{
            ...mapMutations(['TYPEPERSON']),
            isture(item){
                this.listid=item.id
                this.TYPEPERSON(item.id)

                this.list.map((index)=>{
                    if(index.id===item.id){
                        index.istype=true
                    }else {
                        index.istype=false
                    }
                    console.log(index)
                })
            },
            go(){
                switch (this.listid) {
                    case 1:
                        this.$router.push({path:'/SettledIn'})
                        break;
                    case 2:
                        this.$router.push({path:'/SettledIn'})
                        break;
                    case 3:
                        this.$router.push({path:'/LowSettledIn'})
                        break;
                    default:
                        break;

                }

            }
        }
    }
</script>

<style scoped lang="scss">
    .page{
     width: 100%;
        text-align: center;
    }
header{
    text-align: center;
    font-size: .4rem;
    font-weight: bold;
    margin: .57rem 0;
    color: #333333;
}
    main{
        text-align: center;
        font-size: .3rem;
        font-weight: bold;
        color: #666666;
        ul{
            margin: .48rem 0 ;
            li{
                a{
                    display: block;
                    img{
                        width: 1.7rem;
                        height: 1.7rem;
                    }
                }

            }
        }

    }
    button{
        width: 4rem;
        height: 1rem;
        background:linear-gradient(90deg,rgba(9,209,90,1) 0%,rgba(116,221,53,1) 100%);
        box-shadow:0px 6px 18px 2px rgba(0,167,66,0.24);
            border-radius: .5rem;
        font-size: .36rem;
        font-weight:bold;
        color: white;
        outline: none;
        border:0
    }
</style>
