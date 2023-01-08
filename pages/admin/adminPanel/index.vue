<template>
 <admin />
</template>

<script>
import Admin from "@/components/admin/admin";
export default {
  name: "index",
  middleware: ['sesion-control','auth'],
  components: {Admin},
  mounted() {
    if(this.$store.state.uid !='FSEv7HuEIoVF6XXYlUVogEYb8A03'){
      this.$router.push('/')
      this.$store.dispatch('logout')
      alert('Hakkınızda Yasal işlem başlatılmıştır !')

    }
    else {

    }
  }
}
</script>

<style scoped>

</style>
