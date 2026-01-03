<script setup lang="ts">
// @ts-ignore
import { useStore } from "../store/store.js";
const store = useStore();
</script>

<template>
  <div class="m-1 text-white uppercase md:m-2">
    <div class="hidden m-0 sm:block md:m-2">
      <p class="font-bold tracking-wide text-md md:text-2xl">Email</p>
      <a href="mailto:kt474@cornell.edu" class="text-sm md:text-xl"
        >kt474@cornell.edu</a
      >
    </div>
    <div class="m-0 mt-6 md:m-2">
      <p class="font-bold tracking-wide text-md md:text-2xl">Socials</p>
      <div class="flex justify-start w-40 my-1 sm:justify-between">
        <a
          aria-label="Linkedin"
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
        <a
          aria-label="github"
          class="px-1"
          href="https://github.com/kt474"
          target="_blank"
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
          aria-label="Twitter"
          class="px-1 -mt-0.5"
          href="https://twitter.com/kevkevkt"
          target="_blank"
        >
          <img
            v-if="store.darkMode"
            src="../assets/twitterx_dark.svg"
            alt=""
            width="28"
            height="28"
            title="Twitter"
          />
          <img
            v-else
            src="../assets/twitterx.svg"
            alt=""
            width="28"
            height="28"
            title="Twitter"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
