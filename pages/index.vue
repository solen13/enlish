<template>
<div class="container">

  <div class="pa-2">
    <h1 class="text-center">Pratik İnglizce Kelime Öğren</h1>
    <h5 class="mt-3">Gün Seçimi Yap</h5>
  </div>

  <div class="card"  >
    <v-card width="100" height="80" class="d-flex justify-center align-center blue white--text"  @click="day(index)" v-for="(item,index) in getData">
      <h3>{{index}}</h3>
    </v-card>

  </div>

</div>

</template>

<script>
import admin from '@/components/admin/admin'
import BannerCard from "@/components/card/banner-card";
export default {
  name: 'IndexPage',
  data(){
    return{
    getData:null,

    }
  },
  components: {BannerCard, admin},

mounted() {
  this.$axios.get('https://englishworld-db088-default-rtdb.europe-west1.firebasedatabase.app/categories/FSEv7HuEIoVF6XXYlUVogEYb8A03.json')
    .then(res=>{
    this.getData=res.data
      console.log(res)
    })
},
methods:{
  day(item){
   this.$router.push(item)
  }
}
}
</script>

<style scoped>
.container{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.card{
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: flex-start;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 20px;

}
</style>
