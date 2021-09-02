<template>
  <div class="">
    <Simplert :useRadius="true" :useIcon="true" ref="notif" />
    <router-view />
  </div>
</template>

<script>
import Simplert from "vue2-simplert/src/Simplert.vue";

export default {
  components: {
    Simplert
  },
  mounted() {
    this.$root.$on("setNotif", (data) => {
      this.$refs.notif.openSimplert(data);
    });
  }
}

</script>

<style>

</style>
