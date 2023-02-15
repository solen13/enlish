<template>
  <v-card
    width="200"
    height="100%"
    style="position: fixed; z-index: 99; top: 0"
  >
    <div class="d-flex justify-end">
      <v-btn @click="close" class="red white--text">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>

    <v-btn to="/" class="btn">Ana Sayfa</v-btn>
    <v-btn class="btn"> İletişim</v-btn>
    <v-btn class="btn">Paylaş</v-btn>
  </v-card>
</template>
<style scoped>
.btn {
  width: 200px;
  margin-top: 10px;
}
</style>
<script>
export default {
  methods: {
    close() {
      this.$store.dispatch("menushow", false);
    },
  },
};
</script>
