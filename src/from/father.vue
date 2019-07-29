<template>
    <div ref="Model">
        father
        <input v-model="parentMsg">
        <v-child :message="parentMsg" v-on:childByValue="childByValue"></v-child>
        {{name}}
    </div>
</template>

<script>
    import child from "./child";
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
            }
        }
    }
</script>

<style scoped>
    div{
        font-size: .3rem;
    }

</style>
