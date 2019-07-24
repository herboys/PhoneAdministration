<template>
  <div>
    qwe
  </div>
</template>
<script>
  import { apiAddress } from '@/request/api';
  export default {
    data(){
      return{
    }
  },
  mounted() {
      let para={
        uid:100000000
      }
    apiAddress(para).then(res => {
    })  .catch(err => {
    })

    }
  }
</script>
