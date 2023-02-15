<template>
  <main style="background-color: #b2ebf2; height: 100%">
    <div class="py-2">
      <h2 class="text-center">{{ route }}</h2>
      <p class="text-center">Öğrenmek İstediğin Kelimeyi Seç</p>
    </div>

    <div class="container">
      <v-card
        class="pa-4 text-center blue text-no-wrap rounded-b-xl white--text"
        width="210"
        height="160"
        v-for="(item, index) in getData"
      >
        <h4 class="text-center font-weight-bold title">{{ item.kelime }}</h4>
        <hr />
        <div class="d-flex flex-wrap mt-2">
          Anlam:
          <span class="" v-for="i in item.exampleSentences">
            <b> {{ i }} , </b>
          </span>
        </div>

        <div class="d-flex justify-center mt-2">
          <v-btn @click="word(index)" color="white" outlined>detay</v-btn>
        </div>
      </v-card>
    </div>
  </main>
</template>

<script>
import bannerCard from "@/components/card/banner-card";
export default {
  name: "index",
  components: { bannerCard },

  data() {
    return {
      getData: null,
      route: null,
      isShow: true,
      id: null,
    };
  },
  mounted() {
    this.route = this.$route.params.day;
    this.$axios
      .get(
        `https://englishworld-db088-default-rtdb.europe-west1.firebasedatabase.app/categories/FSEv7HuEIoVF6XXYlUVogEYb8A03/${this.route}.json`
      )
      .then((res) => {
        this.getData = res.data;
        console.log(this.route);
        console.log(this.getData);
      });
  },
  methods: {
    word(item) {
      this.$router.push("/" + this.route + "/" + item);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;

  justify-content: center;
  align-content: flex-start;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
}
@media only screen and (min-width: 600px) {
}
</style>
