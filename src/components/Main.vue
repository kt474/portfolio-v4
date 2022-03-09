<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import SideNav from "./SideNav.vue";
</script>

<template>
  <div class="w-full flex">
    <div class="w-5/12 h-screen bg-rose-700 relative">
      <Footer class="absolute bottom-0" />
      <img
        class="profile-img"
        alt="profile"
        src="../assets/profile_pic.jpeg"
        width="375"
      />
    </div>
    <div class="w-7/12 h-screen relative">
      <div class="flex justify-center items-center h-screen -ml-48">
        <div class="w-32 h-1.5 bg-rose-700 mr-1/3"></div>
        <div class="ml-8 mb-12">
          <div class="text-6xl font-bold -mt-4 mb-2">
            <p class="my-2">Kevin</p>
            <p class="my-2">Tian</p>
          </div>
          <p class="text-2xl font-bold text-rose-700 mt-3">
            Software Developer
          </p>
          <p class="text-2xl w-72 mt-4">
            Hi! I'm Kevin, a developer, designer, & photographer
          </p>
        </div>
      </div>
      <Header class="absolute right-14 top-2" />
      <SideNav class="absolute right-4 top-1/2" />
    </div>
  </div>
</template>

<style scoped>
.profile-img {
  position: absolute;
  left: 69%;
  top: 20%;
}
</style>
