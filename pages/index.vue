<template>
  <v-main style="background-color: #b2ebf2; height: 100%" class="">
    <v-row style="width: 90%" class="mx-auto">
      <v-col class="mt-6" cols="12">
        <banner />
      </v-col>

      <v-col class="mt-12" cols="12">
        <h1 class="text-center">Günlük Çalışma</h1>
        <hr />
        <v-row
          class="mt-2 mx-auto d-flex justify-center"
          style="gap: 10px; width: 100%"
        >
          <v-col
            md="4"
            cols="12"
            sm="3"
            class=" "
            v-for="(item, index) in getData"
          >
            <v-card height="150" color="#00bbd4a0" class="rounded-xl pa-2">
              <h3 class="text-center white--text">{{ index }}</h3>
              <v-card flat width="100%" class="transparent py-2">
                <span class="white--text" v-for="i in item">
                  {{ i.kelime }} ,
                </span>
              </v-card>

              <div class="d-flex justify-center mt-2 align-end">
                <v-btn color="white" outlined @click="day(index)">Başla</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import banner from "../components/home/banner.vue";
export default {
  name: "IndexPage",
  data() {
    return {
      getData: null,
    };
  },
  components: { banner },

  mounted() {
    this.$axios
      .get(
        "https://englishworld-db088-default-rtdb.europe-west1.firebasedatabase.app/categories/FSEv7HuEIoVF6XXYlUVogEYb8A03.json"
      )
      .then((res) => {
        this.getData = res.data;
        console.log(res);
      });
  },
  methods: {
    day(item) {
      this.$router.push(item);
    },
    cetagories(item) {
      console.log(item);
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
}
.container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.shadow {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all 0.2s ease-in-out;
}
.shadow:hover {
  transform: scale(1.03);
}
.card {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: flex-start;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 20px;
}
</style>
