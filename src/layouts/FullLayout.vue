<template>
  <div class="bg-gradient-to-br from-blue-500 to-blue-800 min-h-screen">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {
    Navbar: () => import("@/components/Navbar.vue"),
  },
}
</script>