<template>
  <div class="bg-gray-900 min-h-screen">
    <Navbar></Navbar>
  </div>
</template>
<script>
export default {
  components: {
    Navbar: () => import("@/components/Navbar.vue"),
  },
}
</script>