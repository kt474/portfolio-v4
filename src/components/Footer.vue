<script setup lang="ts">
// @ts-ignore
import { useStore } from "../store/store.js";
const store = useStore();
</script>

<template>
  <div class="text-white uppercase m-1 md:m-2">
    <div class="hidden sm:block m-0 md:m-2">
      <p class="text-md md:text-2xl font-bold tracking-wide">Email</p>
      <a href="mailto:kt474@cornell.edu" class="text-sm md:text-xl"
        >kt474@cornell.edu</a
      >
    </div>
    <div class="m-0 md:m-2 mt-6">
      <p class="text-md md:text-2xl font-bold tracking-wide">Socials</p>
      <div class="flex w-40 justify-start sm:justify-between my-1">
        <a
          class="pr-1"
          href="https://www.linkedin.com/in/kt474/"
          target="_blank"
          ><img
            v-if="store.darkMode"
            src="../assets/linkedin_dark.svg"
            alt=""
            width="24"
            height="24"
            title="Linkedin"
          />
          <img
            v-else
            src="../assets/linkedin_icon.svg"
            alt=""
            width="24"
            height="24"
            title="Linkedin"
          />
        </a>
        <a class="px-1" href="https://github.com/kt474" target="_blank"
          ><img
            v-if="store.darkMode"
            src="../assets/github_dark.svg"
            alt=""
            width="24"
            height="24"
            title="Github" />
          <img
            v-else
            src="../assets/github_icon.svg"
            alt=""
            width="24"
            height="24"
            title="Github"
        /></a>
        <a
          class="px-1"
          href="https://www.instagram.com/kevkevkt/"
          target="_blank"
        >
          <img
            v-if="store.darkMode"
            src="../assets/instagram_dark.svg"
            alt=""
            width="24"
            height="24"
            title="Instagram"
          />
          <img
            v-else
            src="../assets/instagram_icon.svg"
            alt=""
            width="24"
            height="24"
            title="Instagram"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
