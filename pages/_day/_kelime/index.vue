<template>
  <div v-if="getData">

  <div class="pa-2">
    <h4 class="pa-2 text-center">Kelime</h4>

    <div class="d-flex">
      <h2>{{getData.kelime}}</h2>
      <v-btn class="ml-2" icon @click="sound(getData.kelime)">
        <v-icon color="blue">mdi-volume-high</v-icon>
      </v-btn>
    </div>

  </div>

    <v-card>
      <h4 class="text-center pa-2">Anlamı</h4>
      <div class="d-flex mt-1" v-for="(item,index) in getData.exampleSentences">
        <h3>{{index+1}}) {{item}}</h3>
      </div>
    </v-card>

    <v-card>
      <h4 class="pa-2 text-center">Örnek Cümle</h4>
      <div class="d-flex" v-for="(item,index) in getData.meaning">
        <h4>{{index+1}}) {{item}}</h4>
        <v-btn @click="sound(item)" class="ml-2" icon>
          <v-icon color="blue">mdi-volume-high</v-icon>
        </v-btn>
      </div>

    </v-card>



  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      tts:window.speechSynthesis,
      voiceList:null,
      selectedVoice:"Google US English Female",

      getData:null,
      routeDay:null,
      routeWord:null
    }
  },
  mounted() {
    console.log(this.tts.getVoices())
    this.routeDay=this.$route.params.day
    this.routeWord=this.$route.params.kelime
    this.$axios.get(`https://englishworld-db088-default-rtdb.europe-west1.firebasedatabase.app/categories/FSEv7HuEIoVF6XXYlUVogEYb8A03/${this.routeDay}/${this.routeWord}.json`)
      .then(res=>{
        this.getData=res.data
      })
  },
  created() {
    this.getVoices().then(voices =>{

      this.voiceList=voices
      this.selectedVoice='Yelda'
      console.log(this.selectedVoice)
      console.log(this.voiceList)
    })
  },
  methods:{
    sound(item){
    let toSpeak= new SpeechSynthesisUtterance(item)
      toSpeak.voice=this.voiceList.find(v => v.name==="Google US English") || null
      toSpeak.rate=0.7
      this.tts.speak(toSpeak)
    },
    getVoices(){
      let intervalID;
      return new Promise((resolve,reject)=>{
        intervalID= setInterval(()=>{
        if(  this.tts.getVoices().length >0){
        resolve(this.tts.getVoices())
          clearInterval(intervalID)
        }
        },10)
      })
    }
  },


}
</script>

<style scoped>

</style>
