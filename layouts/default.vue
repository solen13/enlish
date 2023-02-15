<template>
  <v-app>
    <navBar/>
    <Nuxt/>
  </v-app>
</template>

<script>
import navBar from '../components/navbar/navBar.vue'
export default {
  name: 'DefaultLayout',
  components:{navBar}
}
</script>
