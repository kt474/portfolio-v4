<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import SideNav from "./SideNav.vue";

// @ts-ignore
import { useStore } from "../store/store";
import { computed } from "vue";

const headerLinks = ["Home", "Projects", "About"];
const store = useStore();
const darkMode = computed(() => {
  return store.darkMode;
});
</script>

<template>
  <div
    id="Projects"
    class="h-screen relative"
    :class="darkMode ? 'dark-background dark' : 'background'"
  >
    <Footer class="hidden sm:block absolute bottom-0 dark:text-neutral-900" />
    <div class="flex align-middle justify-center force-center">
      <div>
        <p
          class="text-4xl sm:text-5xl font-bold mx-4 mb-3 sm:mb-12 dark:text-white"
        >
          Projects
        </p>
        <div class="flex flex-col md:flex-row">
          <div
            class="w-56 h-40 md:w-60 md:h-48 lg:w-80 lg:h-64 mx-4 mb-2 md:mb-0 opacity-100 hover:opacity-60"
          >
            <a href="https://ktimer.app" target="_blank">
              <img src="../assets/509shots_so.png" alt="ktimer" width="400" />
              <div
                class="flex-col text-center justify-center lg:-mt-56 -mt-40 overflow-hidden h-52 hover:opacity-100 opacity-0 z-50"
              >
                <p
                  class="text-xl lg:text-4xl lg:mb-1 text-black font-bold mt-10"
                >
                  KTimer
                </p>
                <p class="lg:text-xl text-sm text-black mt-4">
                  Modern speedcubing timer
                </p>
              </div>
            </a>
          </div>
          <div
            class="mx-auto w-56 h-40 md:w-60 md:h-48 lg:w-80 lg:h-64 opacity-100 hover:opacity-70"
          >
            <a href="https://tailwindconverter.app/" target="_blank">
              <img src="../assets/490shots_so.png" alt="tailwind" />
              <div
                class="flex-col text-center justify-center lg:-mt-52 -mt-40 overflow-hidden h-52 hover:opacity-100 opacity-0 z-50"
              >
                <p
                  class="text-xl lg:text-3xl lg:mb-1 text-white font-bold mt-10"
                >
                  Tailwind Converter
                </p>
                <p class="lg:text-xl text-sm text-white">
                  Convert plain HTML/CSS into Tailwind
                </p>
              </div>
            </a>
          </div>
        </div>
        <div class="flex flex-col md:flex-row mt-2 md:mt-4">
          <div
            class="w-56 h-40 md:w-60 md:h-48 lg:w-80 lg:h-64 bg-gray-300 mx-4 mb-2 md:mb-0"
          >
            <img
              class="w-44 lg:w-56 mx-auto p-2"
              src="../assets/undraw_2.svg"
              alt="undraw-2"
            />
            <div class="flex-col text-center justify-center mt-1 lg:mt-2">
              <p class="hidden md:block text-base lg:text-2xl">Coming Soon</p>
            </div>
          </div>
          <div
            class="mx-auto w-56 h-40 md:w-60 md:h-48 lg:w-80 lg:h-64 bg-gray-300"
          >
            <img
              class="w-48 lg:w-60 mx-auto p-2"
              src="../assets/undraw_3.svg"
              alt="undraw-3"
            />
            <div class="flex-col text-center justify-center mt-1 lg:mt-3">
              <p class="hidden md:block text-base lg:text-2xl">Coming Soon</p>
            </div>
          </div>
        </div>
        <div class="hidden sm:flex justify-center m-4 pb-2">
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
      class="absolute right-4 top-2 dark:text-white"
    />
    <SideNav parent="projects" class="absolute right-4 side-nav" />
  </div>
</template>

<style scoped>
.background {
  background: linear-gradient(to right, #be123c 30%, #f1f5f9 0%);
}
.dark-background {
  background: linear-gradient(to right, #be123c 30%, #1e1e1e 0%);
}
.side-nav {
  top: 47%;
}
.force-center {
  position: relative;
  margin-left: 27%;
  top: 50%;
  transform: translateY(-50%);
}
</style>
