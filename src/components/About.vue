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
    <div class="w-7/12 h-screen relative flex justify-center items-center">
      <div class="w-1/3">
        <p class="text-4xl font-bold">About</p>
        <p class="text-xl">
          Hi! I'm Kevin, a recent graduate, currently working as a developer for
          IBM Quantum. I enjoy trying out different frontend frameworks to
          create web apps . This website was made with Vite/Vue 3 and all of the
          source code is public so feel free to take a look. In my free time I
          enjoy hiking, taking photos, and speedcubing.
        </p>
      </div>
      <Header class="absolute right-14 top-2" />
      <SideNav class="absolute right-4 top-1/2" />
    </div>
  </div>
</template>

<style scoped></style>
