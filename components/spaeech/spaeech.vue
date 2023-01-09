
<template>
  <span >

    <div class="d-flex justify-center">
      <v-btn v-if="runtimeTranscription" class="red mb-3" fab >
        <v-icon color="white">mdi-microphone</v-icon>
      </v-btn>

      <v-btn v-else fab class="mb-3"  @click="startRecognition">
        <v-icon>mdi-microphone</v-icon>
     </v-btn>
    </div>

    <p  v-model="txtResualt=word"  v-for="word in transcription"></p>
    <p v-if="runtimeTranscription" class="red pa-2 blue white--text rounded mt-1 text-center">{{ runtimeTranscription }}</p>

  </span>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: 'en-US'
    },
    text:{
      type: String,
      default:''
    }
  },
  data: () => ({
    runtimeTranscription: '',
    transcription: [],
    recognition: null,
    txtResualt:null
  }),
  methods: {
    startRecognition() {
      console.log('Starting');
      this.checkApi();
      this.recognition.start();

    },
    stopRecognition() {
      console.log("Stopping");
      this.recognition.stop();
      this.recognition = null;

    },
    checkApi() {
      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition && "development" !== 'production') {
        throw new Error('Speech Recognition does not exist on this browser. Use Chrome or Firefox');
      }
      if (!SpeechRecognition) {
        console.log("No Speech Recognition");
        return;
      }
      console.log("Starting UP");
      this.recognition = new SpeechRecognition();

      this.recognition.lang = this.lang;
      this.recognition.interimResults = true;
      this.recognition.addEventListener('result', event => {
        console.log("result");
        const text = Array.from(event.results).map(result => result[0]).map(result => result.transcript).join('');
        this.runtimeTranscription = text;
      });
      this.recognition.addEventListener('end', () => {
        console.log("End");
        if (this.runtimeTranscription !== '') {
          this.transcription.push(this.runtimeTranscription);
          this.$emit('onTranscriptionEnd', {
            transcription: this.transcription,
            lastSentence: this.runtimeTranscription
          });
        } else {
          console.log("Nothing Found");
        }
        this.runtimeTranscription = '';
      });
      this.recognition.onresult = function(event) {
        var color = event.results[0][0].transcript;
        console.log(color);
      }
    }
  },
  mounted() {
    this.checkApi();

  },
  watch:{
    txtResualt(){
    this.$store.commit('speak',this.txtResualt)
      console.log('Textten gelen=>',this.txtResualt)
    }
  }
}
</script>
