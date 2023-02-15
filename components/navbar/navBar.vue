<template>

<v-card
    color="#b2ebf2"
    flat
    width="100%"
    tile
 
  >
    <v-toolbar flat dense color="#b2ebf2" >
      <v-btn  class="hidden-sm-and-up" text @click="backs"> 
       <v-icon>mdi-keyboard-backspace</v-icon>
     </v-btn>
        <v-btn @click="showMenu" class="hidden-sm-and-up" icon>
              <v-icon>mdi-menu</v-icon>
        </v-btn>
      <v-img max-width="60" height="50" class="hidden-sm-and-down" src="/logo.png"></v-img>
      <v-btn class="black--text bold-text hidden-sm-and-down" text>
        Ana sayfa
      </v-btn>
      <v-btn  class="hidden-sm-and-down"  text>
        iletişim
      </v-btn>
      <v-btn class="hidden-sm-and-down" text>
       paylaş
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="help" color="#FFA000" class="white--text" >
        YARDIM AL
      </v-btn>
    </v-toolbar>
  </v-card>
</template>
</template>
<script>
export default {
    methods:{
    showMenu(){
        this.$store.dispatch("menushow", true);
    },
    backs(){ 
        history.back()
    },
    help(){
        this.$store.dispatch("helpshows", true);
        this.$store.dispatch("menushow", false);
    }
    }
}
</script>
