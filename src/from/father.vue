<template>
    <div ref="Model">
        <div>
            <button @click="logininbtn">点击</button>
        </div>

        father
        <input v-model="parentMsg">
        <v-child :message="parentMsg" v-on:childByValue="childByValue"></v-child>
        {{name}}
    </div>
</template>

<script>
    import child from "./child";
    import {loginin} from "@/request/api"
    export default {
        name: "father",
        data(){
          return{
              name:"",
              parentMsg: 'a message from parent'  //在data中定义需要传入的值

          }
        },
        components:{
            'v-child':child
        },
        methods:{
            childByValue(childValue) {
                // childValue就是子组件传过来的值
                this.name = childValue
            },
            logininbtn(){
                let para={
                    uid:100
                }
                loginin(para).then(res=>{
                    console.log(res)
                }).catch(err=>{

                })
            }
        }
    }
</script>

<style scoped>
    div{
        font-size: .3rem;
    }
</style>
