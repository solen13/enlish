<template>
  <div class="pa-3" v-if="getData">

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

    <v-card>

      <div  class="options-select">
        <h3 class="pa-1">Telafuz Edilecek </h3>
        <select style="width: 50%;" class="blue white--text pa-2 rounded" v-model="selectValue">
          <option style="width:50% " class="caption">{{getData.kelime}}</option>
          <option style="width:50% " class="caption" v-for="item in getData.meaning">{{item}} </option>
        </select>
      </div>

      <spaeech />

    <div v-if="$store.state.txtSpeakResulat !=null">

      <p v-if="datas" class="success pa-4 text-center white--text">Doğru Telafuz</p>

      <div v-else class="red pa-2 white--text">
        <h3>{{$store.state.txtSpeakResulat}},</h3>
        <p>Dedin Yanlış Telafuz Ettin!</p>
        <p>{{selectValue}} ,Söylemeye Çalışın</p>
      </div>

    </div>


    </v-card>

    <v-card  @click="help" class="hidden-md-and-up mt-6">
      <v-card-title>Ses ile ilgili problemi yaşıyorusun?</v-card-title>
    </v-card>

  </div>
</template>

<script>
import spaeech from "@/components/spaeech/spaeech";
export default {
  name: "index",
  components:{spaeech},

  data(){
    return{
      tts:window.speechSynthesis,
      voiceList:null,
      selectedVoice:"Google US English Female",

      getData:null,
      routeDay:null,
      routeWord:null,
      textShowSucces:null,

      selectValue:'',

      spechToText:null,
      isListening:false,
      recoginiton:null

    }
  },
  mounted() {

    this.routeDay=this.$route.params.day
    this.routeWord=this.$route.params.kelime
    this.$axios.get(`https://englishworld-db088-default-rtdb.europe-west1.firebasedatabase.app/categories/FSEv7HuEIoVF6XXYlUVogEYb8A03/${this.routeDay}/${this.routeWord}.json`)
      .then(res=>{
        this.getData=res.data
        this.selectValue=this.getData.kelime
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
    },
    help(){
      alert('Telefonun Metin-Konumaşma Ayarlarını Düzeltiniz?')
    }
  },

 computed:{
datas(){
  if(this.$store.state.txtSpeakResulat != null){

    if(this.$store.state.txtSpeakResulat.toLowerCase()===this.selectValue.toLowerCase()){
     return  true
    }
    else{
      return false
    }
  }

}
 }

}
</script>

<style scoped>
.options-select{
  display: flex;
justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: rgba(232, 237, 239, 0.29);
  width: 100%;
  height: auto;
}
</style>
