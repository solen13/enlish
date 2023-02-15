<template>
  <v-row>
    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div>
        <h1 class="text-center">Günlük İngilizce kelime</h1>
        <ul>
          <li><v-icon>mdi-arrow-right-bold-outline</v-icon> Günlük 5 kelime</li>
          <li>
            <v-icon>mdi-arrow-right-bold-outline</v-icon>
            Hergün tekrar
          </li>
          <li>
            <v-icon>mdi-arrow-right-bold-outline</v-icon>
            Kendini Test Etme
          </li>
          <li>
            <v-icon>mdi-arrow-right-bold-outline</v-icon>
            Zengin Kelime
          </li>
        </ul>
        <div class="mt-8 d-flex justify-center">
          <v-btn color="#00BCD4" class="px-12 white--text">
            Başla
            <v-icon>mdi-arrow-bottom-right-bold-outline</v-icon>
          </v-btn>
        </div>
      </div>
    </v-col>
    <v-col cols="12" md="6">
      <v-img max-width="100%" height="347" src="/banner1.png"></v-img>
    </v-col>
  </v-row>
</template>
<style scoped>
li {
  color: rgba(128, 128, 128, 0.698);
  font-size: 20px;
  margin-top: 5px;
  list-style: none;
  padding: 0;
}
</style>
