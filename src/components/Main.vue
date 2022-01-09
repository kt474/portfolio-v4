<script setup lang="ts">
import Footer from "./Footer.vue";
import { ref } from "vue";
</script>

<template>
  <div class="w-full flex">
    <div class="basis-5/12 bg-rose-700 h-screen">
      <Footer />
    </div>
    <img
      class="absolute max-w-1/4 profile-img"
      src="../assets/profile_pic.jpeg"
      height="400"
    />
    <div class="basis-7/12 h-screen"></div>
  </div>
</template>

<style scoped>
.profile-img {
  margin-left: 29%;
  margin-top: 16%;
}
</style>
