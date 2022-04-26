<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import SideNav from "./SideNav.vue";
import Logo from "./Logo.vue";
const headerLinks = ["Projects", "About"];
const page = ["current", "projects", "about"];
import { ref } from "vue";
const checked = ref(false);
</script>

<template>
  <div class="w-full h-screen" :class="checked ? 'dark-main dark' : 'main'">
    <div class="w-full absolute top-3 left-14">
      <label for="toggleB" class="flex items-center cursor-pointer">
        <div class="relative">
          <input
            v-model="checked"
            type="checkbox"
            id="toggleB"
            class="sr-only"
          />
          <div class="block bg-neutral-900 w-10 h-6 rounded-full"></div>
          <div
            class="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"
          ></div>
        </div>
      </label>
    </div>
    <Logo class="absolute top-0 dark:text-neutral-900" />
    <Footer
      class="absolute bottom-0 dark:text-neutral-900"
      :dark-mode="checked"
    />
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
            class="text-5xl sm:text-6xl font-bold -mt-4 mb-1 mr-12 dark:text-white"
          >
            <p class="my-2">Kevin</p>
            <p class="my-2">Tian</p>
          </div>
          <div class="">
            <p class="text-2xl w-12 sm:w-72 font-bold text-rose-700">
              Software Developer
            </p>
            <p class="text-2xl w-48 md:w-96 mt-2 sm:mt-4 dark:text-white">
              Hi i'm Kevin - a developer, designer, and photographer
            </p>
          </div>
        </div>
      </div>
    </div>
    <Header
      :pages="headerLinks"
      parent="Main"
      class="absolute right-4 top-2 dark:text-white"
    />
    <SideNav :pages="page" class="absolute right-4 side-nav" />
  </div>
</template>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #be123c;
}
.main {
  background: linear-gradient(to right, #be123c 40%, #fff 0%);
}
.dark-main {
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
.profile-img {
  width: 375px;
  margin-left: 25vw;
}
</style>
