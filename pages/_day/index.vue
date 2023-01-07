<template>
<div>
   <div class=" py-2" >
     <h3 class="text-center">{{route}}</h3>
     <p class="text-center">Öğrenmek İstediğin Kelimeyi Seç</p>
   </div>

  <div class="container">
    <v-card    @click="word(index)" width="100" v-for="(item,index) in getData">
      <h4 class="text-center">{{item.kelime}}</h4>
    </v-card>
  </div>
</div>
</template>

<script>
import bannerCard from '@/components/card/banner-card'
export default {
  name: "index",
  components: {bannerCard},

  data(){
    return{
      getData:null,
      route:null
  }
  },
  mounted() {

    this.route=this.$route.params.day

    this.$axios.get(`https://englishworld-db088-default-rtdb.europe-west1.firebasedatabase.app/categories/FSEv7HuEIoVF6XXYlUVogEYb8A03/${this.route}.json`)
      .then(res=>{
        this.getData=res.data
        console.log(this.route)
        console.log(this.getData)

      })
  },
  methods:{
    word(item){
     this.$router.push('/'+this.route+'/'+item)
    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: flex-start;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;

}
</style>
