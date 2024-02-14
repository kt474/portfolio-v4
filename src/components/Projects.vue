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
    class="relative h-screen"
    :class="darkMode ? 'dark-background dark' : 'background'"
  >
    <Footer class="absolute bottom-0 hidden sm:block dark:text-neutral-900" />
    <div class="flex justify-center align-middle force-center">
      <div>
        <p
          class="mx-4 mb-3 text-4xl font-bold sm:text-5xl sm:mb-12 dark:text-white"
        >
          Projects
        </p>
        <div class="flex flex-col md:flex-row">
          <div
            class="w-56 h-40 mx-4 mb-2 opacity-100 md:w-60 md:h-48 lg:w-80 lg:h-64 md:mb-0 hover:opacity-60"
          >
            <a href="https://ktimer.app" target="_blank">
              <img src="../assets/509shots_so.png" alt="ktimer" width="400" />
            </a>
          </div>
          <div
            class="w-56 h-40 mx-auto mt-4 opacity-100 md:w-60 md:h-48 lg:w-80 lg:h-64 hover:opacity-70 md:mt-0"
          >
            <a href="https://tailwindconverter.app/" target="_blank">
              <img src="../assets/490shots_so.png" alt="tailwind" />
            </a>
          </div>
        </div>
        <div class="flex flex-col mt-2 md:flex-row md:mt-4">
          <div
            class="w-56 h-40 mx-4 mt-4 mb-2 md:w-60 md:h-48 lg:w-80 lg:h-64 md:mb-0 md:-mt-3"
          >
            <img src="../assets/56shots_so.png" alt="undraw-2" />
          </div>
          <div
            class="w-56 h-40 mx-auto mt-4 md:w-60 md:h-48 lg:w-80 lg:h-64 md:-mt-3"
          >
            <img src="../assets/56shots_so.png" alt="undraw-3" />
          </div>
        </div>
        <div class="justify-center hidden pb-2 m-4 sm:flex">
          <button
            class="px-4 py-2 font-bold text-white rounded bg-rose-600 hover:bg-rose-700"
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
