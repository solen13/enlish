
<template>
  <span>
    <v-btn @click="startRecognition">basla</v-btn>
    <p v-model="txtResualt=word" class="blue" v-for="word in transcription"></p>
    <p class="red">{{ runtimeTranscription }}</p>

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
