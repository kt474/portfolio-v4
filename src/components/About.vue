<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import SideNav from "./SideNav.vue";
</script>

<template>
  <div class="w-full flex">
    <div class="w-5/12 h-screen bg-rose-700 relative">
      <Footer class="absolute bottom-0" />
    </div>
    <div class="w-7/12 h-screen relative">
      <Header class="absolute right-14 top-2" />
      <SideNav class="absolute right-4 top-1/2" />
    </div>
  </div>
</template>

<style scoped></style>
