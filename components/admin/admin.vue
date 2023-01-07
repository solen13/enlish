<template>
 <div>

   <v-card class="card" >

     <div v-if="isCategories" style="width: 50%" class="d-flex">
       <input style="width:100% " class="tag-input"  type="text" placeholder="Categories" v-model="categories">
       <v-btn @click="isCategories=false">mevcut</v-btn>
     </div>

     <div v-else style="width: 50%" class="d-flex">
       <select v-model="categories" style="width:100% " class="tag-input">
         <option  v-for="(item,index) in categoriesAll" class="tag-input" :key="index">{{index}}</option>
       </select>
       <v-btn  @click="isCategories=true">Yeni</v-btn>
     </div>



     <input class="tag-input" type="text" placeholder="kelime" v-model="world.kelime">


      <div class='tag-input'>
        <div v-for='(tag, index) in world.exampleSentences' :key='tag' class='tag-input__tag'>
          {{ tag }}
          <span @click='removeTag(index)'>x</span>
        </div>
        <input
          type='text'
          placeholder="Anlamları"
          class='tag-input__text'
          @keydown.enter='addTag'

          @keydown.delete='removeLastTag'
          v-model="tag"
        />

      </div>



       <div class='tag-input'>
         <div v-for='(tag, index) in world.meaning' :key='tag' class='tag-input__tag'>
           {{ tag }}
           <span @click='removeExample(index)'>x</span>
         </div>
         <input
           type='text'
           placeholder="Örnek cümleler"
           class='tag-input__text'
           @keydown.enter='addExample'
           @keydown.188='addExample'
           @keydown.delete='removeLastExample'
         />
       </div>
     <v-btn @click="send"> gonder</v-btn>
     <v-btn >Cıkıs</v-btn>
   </v-card>

 </div>
</template>

<script>
export default {
  name: "admin",
  data(){
    return{
      isCategories:true,
      categoriesAll:null,
      categories:null,
      tag:null,
      world:{
        kelime:null,
        meaning:[],
        exampleSentences: []
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
           console.log(res)
         })
     }

     },

    addTag(event) {
      event.preventDefault()
      let val = event.target.value.trim()
      if (val.length > 0) {
        if (this.world.exampleSentences.length >= 1) {
          for (let i = 0; i < this.world.exampleSentences.length; i++) {
            if (this.world.exampleSentences[i] === val) {
              return false
            }
          }
        }
        this.world.exampleSentences.push(val)
        event.target.value = ''
        console.log(this.world.exampleSentences)
      }
    },
    removeTag(index){
      this.world.exampleSentences.splice(index, 1)
    },
    removeLastTag(event) {
      if (event.target.value.length === 0) {
        this.removeTag(this.world.exampleSentences.length - 1)
      }
    },


    addExample(event) {
      event.preventDefault()
      let val = event.target.value.trim()
      if (val.length > 0) {
        if (this.world.meaning.length >= 1) {
          for (let i = 0; i < this.world.meaning.length; i++) {
            if (this.world.meaning[i] === val) {
              return false
            }
          }
        }
        this.world.meaning.push(val)
        event.target.value = ''
        console.log(this.world.meaning)
      }
    },
    removeExample(index){
      this.world.meaning.splice(index, 1)
    },
    removeLastExample(event) {
      if (event.target.value.length === 0) {
        this.removeTag(this.world.meaning.length - 1)
      }
    }

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




.tag-input {
  width: 50%;
  border: 1px solid #D9DFE7;
  background: #fff;
  border-radius: 4px;
  font-size: 0.9em;
  min-height: 45px;
  box-sizing: border-box;
  padding: 0 10px;
  margin-bottom: 10px;
}

.tag-input__tag {
  height: 24px;
  color: white;
  float: left;
  font-size: 14px;
  margin-right: 10px;
  background-color: #667EEA;
  border-radius: 15px;
  margin-top: 10px;
  line-height: 24px;
  padding: 0 8px;

}

.tag-input__tag > span {
  cursor: pointer;
  opacity: 0.75;
  display: inline-block;
  margin-left: 8px;
}

.tag-input__text {
  border: none;
  outline: none;
  font-size: 1em;
  line-height: 40px;
  background: none;
}

</style>
