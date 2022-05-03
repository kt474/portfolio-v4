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
            class="block bg-neutral-50 dark:bg-neutral-900 w-10 h-6 rounded-full"
          ></div>
          <div
            class="dot absolute left-1 top-1 bg-rose-700 w-4 h-4 rounded-full transition"
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
    <div
      class="flex flex-wrap md:flex-nowrap align-middle justify-center force-center container"
    >
      <img class="profile-img" alt="profile" src="../assets/profile_pic.jpeg" />
      <div class="flex align-middle justify-center main-text">
        <div
          class="hidden md:block w-28 lg:w-44 h-1.5 bg-rose-700 red-bar"
        ></div>
        <div class="flex flex-row md:flex-col ml-10 md:ml-0 -mt-4 lg:mt-0">
          <div
            class="text-4xl sm:text-5xl sm:text-6xl font-bold -mt-4 mb-1 mr-12 text-white sm:text-black dark:text-black sm:dark:text-white"
          >
            <p class="my-2">Kevin</p>
            <p class="my-2">Tian</p>
          </div>
          <div class="">
            <p
              class="-mt-1 sm:mt-0 text-xl sm:text-2xl w-12 sm:w-72 font-bold text-rose-700"
            >
              Software Developer
            </p>
            <p
              class="text-xl sm:text-2xl w-48 md:w-96 mt-0 sm:mt-4 dark:text-white"
            >
              Hi i'm Kevin - a developer, designer, and photographer
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer class="absolute bottom-0 dark:text-neutral-900" />
    <Header
      :pages="headerLinks"
      parent="Home"
      class="absolute right-4 top-2 dark:text-white"
    />
    <SideNav parent="main" class="absolute right-4 side-nav" />
  </div>
</template>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #be123c;
}
.background {
  background: linear-gradient(to right, #be123c 40%, #fff 0%);
}
.dark-background {
  background: linear-gradient(to right, #be123c 40%, #1e1e1e 0%);
}

.force-center {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.main-text {
  margin-top: 8%;
  margin-left: -7%;
}
.red-bar {
  margin-top: 26%;
  margin-right: 3%;
}
.side-nav {
  top: 45%;
}
@media (max-width: 1024px) {
  .profile-img {
    width: 275px !important;
  }
}
@media only screen and (min-width: 834px) and (max-width: 1194px) {
  .profile-img {
    width: 325px !important;
    margin-left: 34vw !important;
    margin-bottom: 4rem;
  }
}
.profile-img {
  width: 375px;
  margin-left: 25vw;
}
</style>
