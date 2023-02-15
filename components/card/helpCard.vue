<template>
  <div class="contener d-flex justify-center align-center">
    <v-card width="300" height="400">
      <div class="d-flex justify-end">
        <v-btn @click="helpClose" small fab class="red white--text">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      yardım</v-card
    >
  </div>
</template>
<style scoped>
.contener {
  width: 100%;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.52);
  position: fixed;
  z-index: 999;
}
</style>
<script>
export default {
  methods: {
    helpClose() {
      this.$store.dispatch("helpshows", false);
    },
  },
};
</script>
