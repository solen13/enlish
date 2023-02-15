<template>
  <v-app style="position: relative">
    <menus v-if="$store.state.menuShow" />
    <helpCard v-if="$store.state.helpShow" />
    <navBar />

    <Nuxt />
  </v-app>
</template>

<script>
import navBar from "../components/navbar/navBar.vue";
import menus from "../components/navbar/resmenu.vue";
import helpCard from "../components/card/helpCard.vue";
export default {
  name: "DefaultLayout",
  components: { navBar, menus, helpCard },
};
</script>
