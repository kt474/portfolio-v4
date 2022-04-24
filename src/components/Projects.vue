<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import SideNav from "./SideNav.vue";
const headerLinks = ["Projects", "About"];
const page = ["main", "current", "about"];
</script>

<template>
  <div class="w-full h-screen projects relative">
    <Footer class="absolute bottom-0" />
    <div class="flex align-middle justify-center force-center">
      <div>
        <div class="flex">
          <div class="w-72 h-56 bg-gray-100 mx-4">
            <a href="https://ktimer.app" target="_blank">
              <img src="../assets/ktimer.png" alt="ktimer" />
              <div class="flex justify-center mt-3">
                <a class="text-2xl">KTimer</a>
              </div>
            </a>
          </div>
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
            <a href="https://github.com/kt474" target="_blank">All Projects</a>
          </button>
        </div>
      </div>
    </div>
    <Header
      :pages="headerLinks"
      parent="Projects"
      class="absolute right-14 top-2"
    />
    <SideNav :pages="page" class="absolute right-4 side-nav" />
  </div>
</template>

<style scoped>
.projects {
  background: linear-gradient(to right, #be123c 30%, #fff 0%);
}
.side-nav {
  top: 45%;
}
.force-center {
  position: relative;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
}
</style>
