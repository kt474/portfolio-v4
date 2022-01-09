<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <div class="text-white absolute bottom-16 ml-8">
    <p class="text-2xl uppercase tracking-widest">Email</p>
    <a href="mailto:kt474@cornell.edu" class="text-xl">kt474@cornell.edu</a>
    <p class="text-2xl uppercase tracking-widest mt-4">Social</p>
    <div class="flex justify-between mt-2">
      <a href="https://www.linkedin.com/in/kt474/" target="_blank"
        ><img
          src="../assets/linkedin_icon.svg"
          alt=""
          width="24"
          height="24"
          title="Linkedin"
      /></a>
      <a href="https://github.com/kt474" target="_blank"
        ><img
          src="../assets/github_icon.svg"
          alt=""
          width="24"
          height="24"
          title="Github"
      /></a>
      <a href="https://www.instagram.com/kevkevkt/" target="_blank">
        <img
          src="../assets/instagram_icon.svg"
          alt=""
          width="24"
          height="24"
          title="Instagram"
        />
      </a>
    </div>
  </div>
</template>

<style scoped></style>
