<script setup lang="ts">
import Footer from "./Footer.vue";
import { ref } from "vue";
</script>

<template>
  <div class="w-full flex">
    <div class="basis-5/12 bg-rose-700 h-screen">
      <Footer />
    </div>
    <img
      class="absolute max-w-1/4 profile-img"
      src="../assets/profile_pic.jpeg"
      height="400"
    />
    <div class="basis-7/12 h-screen">
      <div class="w-36 bg-rose-700 absolute profile-line"></div>
      <div>
        <p class="text-5xl">Kevin Tian</p>
        <p class="text-rose-700">Developer</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi
          necessitatibus architecto debitis nesciunt repellendus.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-img {
  margin-left: 29%;
  margin-top: 12%;
}
.profile-line {
  height: 0.4rem;
  margin-left: 7%;
  margin-top: 28%;
}
</style>
