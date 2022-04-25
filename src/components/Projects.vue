<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import SideNav from "./SideNav.vue";
const headerLinks = ["Projects", "About"];
const page = ["main", "current", "about"];
</script>

<template>
  <div class="w-full h-screen projects relative">
    <Footer class="hidden sm:block absolute bottom-0" />
    <div class="flex align-middle justify-center force-center">
      <div>
        <div class="flex flex-col md:flex-row">
          <div class="w-60 h-48 lg:w-80 lg:h-64 bg-gray-100 mx-4 mb-4 md:mb-0">
            <a href="https://ktimer.app" target="_blank">
              <img src="../assets/ktimer.png" alt="ktimer" />
              <div class="flex-col text-center justify-center mt-1 lg:mt-2">
                <p class="text-base lg:text-2xl">KTimer</p>
                <p class="text-sm lg:text-lg">Modern speedcubing timer</p>
              </div>
            </a>
          </div>
          <div class="mx-auto w-60 h-48 lg:w-80 lg:h-64 bg-gray-300">
            <img
              class="mx-auto p-2 w-48 lg:w-60"
              src="../assets/undraw_1.svg"
              alt="undraw-1"
            />
            <div class="flex-col text-center justify-center mt-1 lg:mt-3">
              <p class="text-base lg:text-2xl">Coming Soon</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row mt-4">
          <div class="w-60 h-48 lg:w-80 lg:h-64 bg-gray-300 mx-4 mb-4 md:mb-0">
            <img
              class="w-44 lg:w-56 mx-auto p-2"
              src="../assets/undraw_2.svg"
              alt="undraw-2"
            />
            <div class="flex-col text-center justify-center mt-1 lg:mt-2">
              <p class="text-base lg:text-2xl">Coming Soon</p>
            </div>
          </div>
          <div class="mx-auto w-60 h-48 lg:w-80 lg:h-64 bg-gray-100">
            <img
              class="w-48 lg:w-60 mx-auto p-2"
              src="../assets/undraw_3.svg"
              alt="undraw-3"
            />
            <div class="flex-col text-center justify-center mt-1 lg:mt-3">
              <p class="text-base lg:text-2xl">Coming Soon</p>
            </div>
          </div>
        </div>
        <div class="flex justify-center m-4">
          <button
            class="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded"
          >
            <a href="https://github.com/kt474?tab=repositories" target="_blank"
              >All Projects</a
            >
          </button>
        </div>
      </div>
    </div>
    <Header
      :pages="headerLinks"
      parent="Projects"
      class="absolute right-4 top-2"
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
  left: 13%;
  transform: translateY(-50%);
}
</style>
