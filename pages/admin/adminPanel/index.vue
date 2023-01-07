<template>
 <admin/>
</template>

<script>
import Admin from "@/components/admin/admin";
export default {
  name: "index",
  middleware: ['sesion-control','auth'],
  components: {Admin}
}
</script>

<style scoped>

</style>
