<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import SideNav from "./SideNav.vue";
const page = ["main", "current", "about"];
</script>

<template>
  <div class="w-full flex">
    <div class="w-1/3 h-screen bg-rose-700 relative">
      <Footer class="absolute bottom-0" />
    </div>
    <div class="w-8/12 h-screen relative flex justify-center items-center">
      <div>
        <div class="flex">
          <div class="w-72 h-56 bg-gray-100 mx-4"></div>
          <div class="w-72 h-56 bg-gray-300"></div>
        </div>
        <div class="flex mt-4">
          <div class="w-72 h-56 bg-gray-300 mx-4"></div>
          <div class="w-72 h-56 bg-gray-100"></div>
        </div>
        <div class="flex justify-center m-4">
          <button
            class="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded"
          >
            All Projects
          </button>
        </div>
      </div>
      <Header class="absolute right-14 top-2" />
      <SideNav :pages="page" class="absolute right-4 top-1/2" />
    </div>
  </div>
</template>

<style scoped></style>
