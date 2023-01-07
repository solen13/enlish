<template>
    <div style="width: 100% ;height: 100%" class="blue white--text d-flex justify-center align-center" @click="cliked(name)" >
     <h2>{{name}}</h2>
    </div>
</template>

<script>
export default {
  name: "banner-card",
  props:{
    data:{
      type:Object,
      default:()=>{}
    },
    name:{
      type:String,
      default:''
    },
    cliked:{
      type:Object,
      default:()=>{}
    }
  }
}
</script>

<style scoped>

</style>
