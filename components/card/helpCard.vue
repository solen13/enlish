<template>
  <div class="contener d-flex justify-center align-center">
    <v-card width="300" height="400" class="pa-2">
      <div class="d-flex justify-end">
        <v-btn @click="helpClose" small fab class="red white--text">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <h4 class="text-center">
        Mobil olarak kullanan kişlerde Genelde telefonun ses aksanında farklılık
        problem Çıkabiliyor. Çözüm için Aşağıdaki adımları izleyiniz
      </h4>
      <ul class="mt-2">
        <li>Telefonda ayarlar bölümüne gir</li>
        <li>Arama bölümüne Metin-konuşma çıktısı yaz</li>
        <li>Dil bölümünden ingilizceyi işaretle</li>
        <li>
          Eğer hayala konuşma dilinde gariplik varsa başka kaynakları
          denyeyebilirsin
        </li>
        <p class="orange mt-1 pa-2 text-center">
          yardım butonundan tekrar bakabilirsiniz
        </p>
      </ul>
    </v-card>
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
