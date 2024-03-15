<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import SideNav from "./SideNav.vue";
// @ts-ignore
import { useStore } from "../store/store.js";
import { onMounted, ref, watch } from "vue";
const store = useStore();
const headerLinks = ["Home", "Projects", "About"];
const systemDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
const checked = ref(systemDarkMode);

onMounted(() => {
  if (systemDarkMode && !localStorage.darkMode) {
    checked.value = true;
    store.updateDarkMode(true);
  } else if (localStorage.darkMode) {
    checked.value = JSON.parse(localStorage.darkMode);
    store.updateDarkMode(checked.value);
  }
});

watch(checked, () => {
  localStorage.darkMode = checked.value;
  store.updateDarkMode(checked.value);
});
</script>

<template>
  <div
    id="Home"
    class="h-screen"
    :class="store.darkMode ? 'dark-background dark' : 'background'"
  >
    <div class="absolute top-3 left-3.5">
      <label for="toggleB" class="flex items-center cursor-pointer">
        <div class="relative">
          <input
            v-model="checked"
            type="checkbox"
            id="toggleB"
            class="sr-only"
          />
          <div
            class="block w-10 h-6 rounded-full bg-neutral-50 dark:bg-neutral-900"
          ></div>
          <div
            class="absolute w-4 h-4 transition rounded-full dot left-1 top-1 bg-rose-700"
          ></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 absolute left-12 -top-0.5"
            fill="none"
            viewBox="0 0 24 24"
            :stroke="store.darkMode ? '#171717' : '#fff'"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      </label>
    </div>
    <div class="container flex justify-center align-middle force-center">
      <img
        class="h-auto w-72 lg:w-80 xl:w-96"
        alt="profile"
        src="../assets/profile_pic.jpeg"
      />
      <div class="flex justify-center align-middle main-text">
        <div class="red-bar h-1.5 bg-rose-700"></div>
        <div class="flex flex-col ml-4 custom-margin-top">
          <div
            class="mb-1 mr-12 text-4xl font-bold text-black lg:text-5xl xl:text-6xl dark:text-white"
          >
            <p class="my-2">Kevin</p>
            <p class="my-2">Tian</p>
          </div>
          <div class="">
            <p
              class="w-12 text-lg font-bold sm:mt-0 lg:text-xl xl:text-2xl sm:w-72 text-rose-700"
            >
              Software Developer
            </p>
            <div
              class="w-3/4 mt-0 text-lg lg:text-xl xl:text-2xl lg:mt-2 xl:mt-4 dark:text-white"
            >
              <p class="">
                I'm currently a developer at
                <a
                  href="https://www.ibm.com/quantum"
                  target="_blank"
                  class="bg-rose-100 hover:bg-rose-200 dark:bg-rose-700 dark:hover:bg-rose-800"
                  >IBM Quantum</a
                >
                where my focus revolves around Qiskit - an open source quantum
                computing toolkit.
              </p>
              <p class="mt-2 xl:mt-4">
                In my free time, I've also created some websites which inlcude:
                <a
                  href="https://www.ktimer.app/"
                  target="_blank"
                  class="bg-rose-100 hover:bg-rose-200 dark:bg-rose-700 dark:hover:bg-rose-800"
                  >KTimer</a
                >,
                <a
                  href="https://tailwindconverter.app/"
                  target="_blank"
                  class="bg-rose-100 hover:bg-rose-200 dark:bg-rose-700 dark:hover:bg-rose-800"
                  >Tailwindconverter</a
                >, and
                <a
                  href="https://ffwrapped.com/"
                  target="_blank"
                  class="bg-rose-100 hover:bg-rose-200 dark:bg-rose-700 dark:hover:bg-rose-800"
                  >ffwrapped</a
                >. Most of my work is available on
                <a
                  href="https://github.com/kt474"
                  target="_blank"
                  class="bg-rose-100 hover:bg-rose-200 dark:bg-rose-700 dark:hover:bg-rose-800"
                  >Github</a
                >, so feel free to take a look.
              </p>
              <p class="mt-2 xl:mt-4">
                Outside of programming, I enjoy taking photos, running, learning
                Chinese, and
                <a
                  class="bg-rose-100 hover:bg-rose-200 dark:bg-rose-700 dark:hover:bg-rose-800"
                  href="https://youtu.be/OfMvZr38v1o"
                  target="_blank"
                  >speedcubing</a
                >.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer class="absolute bottom-0 dark:text-neutral-900" />
  </div>
</template>

<style scoped>
.background {
  background: linear-gradient(to right, #be123c 30%, #f1f5f9 0%);
}
.dark-background {
  background: linear-gradient(to right, #be123c 30%, #1e1e1e 0%);
}

.force-center {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  left: 16.5%;
}
.red-bar {
  width: 22rem;
  margin-top: 18%;
  margin-left: -8%;
}
@media (min-width: 1536px) {
  .custom-margin-top {
    margin-top: 2rem;
  }
}
@media (max-width: 1280px) {
  .custom-margin-top {
    margin-top: 0rem;
  }
}
@media (min-width: 1536px) {
  .red-bar {
    width: 19rem;
    margin-top: 16.8%;
    margin-left: -7%;
  }
}
@media (max-width: 1280px) {
  .red-bar {
    width: 26rem;
    margin-top: 18.9%;
    margin-left: -11%;
  }
}
@media (max-width: 1024px) {
  .red-bar {
    width: 17rem;
    margin-top: 21%;
    margin-left: -8%;
  }
}
@media (min-width: 1536px) {
  .force-center {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    left: 18.5%;
  }
}
</style>
