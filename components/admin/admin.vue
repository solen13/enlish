<template>
   <v-card v-if="isUpdate">

     <div v-for="(item,index) in categoriesAll">
      <v-btn @click="updateDay(item,index)">{{index}}</v-btn>

     </div>
     <div>
     <div v-for="(item,index) in accadion">
       <v-btn @click="updateBtnWoeld(item,index)">{{item.kelime}}</v-btn>
     </div>
     </div>
   </v-card>
   <v-card v-else class="card" >
      <div >
        <p class="white pa-3 rounded-xl">Admin Ekranı</p>
      </div>

      <div v-if="isCategories" class="input-content rounded" >
        <input class="input-text"   type="text" placeholder="Categories" v-model="categories">
        <v-btn small @click="isCategories=false">mevcut</v-btn>
      </div>

      <div v-else  class="input-content rounded ">
       <select v-model="categories"  class="input-text">
         <option  v-for="(item,index) in categoriesAll" class="input-text" :key="index">{{index}}</option>
       </select>
       <v-btn small  @click="isCategories=true">Yeni</v-btn>
     </div>


      <div class="input-content rounded">
        <input class="input-text" type="text" placeholder="kelime" v-model="world.kelime">
      </div>
     <template>

      <div class="input-content rounded">
       <input class="input-text" v-model="anlamnewTag"   placeholder="Anlamı"/>
       <v-btn fab x-small @click="addTag">
         <v-icon>mdi-plus</v-icon>
       </v-btn>
     </div>

      <v-card v-if="world.exampleSentences.length >0" class="pa-2 card-content" >
       <p class="text-center">Anlamı</p>
       <v-row class="" >
         <v-col cols="12" v-for="(tag, index) in world.exampleSentences" class=" white--text px-4 py-2 rounded-lg mt-2 mb-2"  :key="index">
           <v-card style="width:100%; border: 1px solid black"  class=" d-flex pa-1">
             <v-btn @click="deleteTag(tag)" x-small fab icon class="blue white--text mr-2">
               <v-icon>mdi-close</v-icon>
             </v-btn>
             <template class="">{{tag}}</template>
           </v-card>
         </v-col>
       </v-row>
   </v-card>

  </template>

  <template>

     <div class="input-content" >
       <input  class="input-text"  v-model="cumlenewTag"  placeholder="örnek cümleler"/>
       <v-btn fab x-small  @click="addCumleTag">
         <v-icon>mdi-plus</v-icon>
       </v-btn>
     </div>

     <v-card flat elevation="0" v-if="world.meaning.length >0"  class="pa-2 card-content " >
       <p class="text-center">Örnek cümleler</p>
       <v-row >
         <v-col cols="12" v-for="(tag, index) in world.meaning" class=" px-4 py-2 rounded-lg mt-2 mb-2"  :key="index">
           <v-card style="width:100%; border: 1px solid black" class="d-flex pa-2 black--text ">
             <v-btn @click="deleteCumleTag(tag)" x-small fab icon class="blue white--text mr-2">
               <v-icon>mdi-close</v-icon>
             </v-btn>
             <template>{{tag}}</template>
           </v-card>
         </v-col>
       </v-row>
     </v-card>

  </template>

     <v-btn @click="update" v-if="isSendBtn" class="mt-3"> Güncelle</v-btn>
     <v-btn v-else class="mt-3" @click="send"> gonder</v-btn>

   </v-card>
</template>

<script>
export default {
  name: "admin",
  data(){
    return{
      isCategories:true,
      categoriesAll:null,
      categories:null,

      accadion:null,
      anlamnewTag:null,
      cumlenewTag :null,
      isUpdate:true,
      isSendBtn:false,
      categoriesUpdate:null,
      updateId:null,

      updateAnlam:[],
      world:{
         kelime:null,
         exampleSentences:[],
         meaning:[],
      },

    }
  },
  methods:{
    send(){
     if(this.categories !=null) {
       let uid=this.$store.state.uid
       this.$axios.post('https://englishworld-db088-default-rtdb.europe-west1.firebasedatabase.app/categories/'
         +uid+'/'+ this.categories + '.json', this.world)
         .then(res => {
          alert('Gönderildi')
             this.world.kelime=null
             this.world.exampleSentences=[]
             this.world.meaning=[]
             this.anlamnewTag=null,
             this.cumlenewTag=null

         })
     }

     },

    update(){
      if(this.categories !=null) {
        let uid=this.$store.state.uid
        this.$axios.put('https://englishworld-db088-default-rtdb.europe-west1.firebasedatabase.app/categories/'
          +uid+'/'+ this.categories +'/'+this.updateId+'.json', this.world)
          .then(res => {
            alert('Gönderildi')
            this.world.kelime=null
            this.world.exampleSentences=[]
            this.world.meaning=[]
            this.anlamnewTag=null,
              this.cumlenewTag=null,
              this.isUpdate=true
          })
      }

    },

    addTag() {
      let anlamnewTag= this.anlamnewTag

      if(anlamnewTag !=null){
        this.world.exampleSentences.push(anlamnewTag);
        anlamnewTag=null;
      }

    },
    deleteTag(tag) {
      this.world.exampleSentences.splice(this.world.exampleSentences.indexOf(tag), 1);
    },


    addCumleTag() {
     let cumlenewTag=this.cumlenewTag
      if (cumlenewTag != null){

        this.world.meaning.push(cumlenewTag);
        cumlenewTag = null;
      }

    },
    deleteCumleTag(tag) {
      this.world.meaning.splice(this.world.meaning.indexOf(tag), 1);
    },


    updateDay(item,index){
     this.accadion=item
    this.categoriesUpdate=index
      console.log(item)
    },
    updateBtnWoeld(item,index){

      this.categories=this.categoriesUpdate
      this.world.kelime=item.kelime
      this.anlamnewTag=item.exampleSentences

      this.isUpdate=false
      this.isSendBtn=true
      this.updateId=index

      item.meaning.forEach(el=>{
        this.world.meaning.push(el)
      })

      item.exampleSentences.forEach(el=>{
        this.world.exampleSentences.push(el)
      })


    },


  },

  mounted() {
    this.$axios.get('https://englishworld-db088-default-rtdb.europe-west1.firebasedatabase.app/categories/FSEv7HuEIoVF6XXYlUVogEYb8A03.json')
      .then(res => {
        console.log(res.data)
        this.categoriesAll=res.data
      })
  }


}
</script>

<style scoped>

.card{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:100%;
  height:100vh;
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(102,126,234,1) 50%, rgba(69,252,250,1) 100%);
}

.input-content{
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: center;
  margin-top: 10px;
}
.input-text{
  width: 100%;
  height: 100%;
  padding-left: 10px;
  outline: none;
}
.input-text:focus{
  border: 2px solid grey;
}
.card-content{
  width: 50%;
}
@media only screen and (max-width: 600px) {
  .input-content{
    width: 100%;
  }
  .card-content{
    width: 100%;
  }
}

</style>
