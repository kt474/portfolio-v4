<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import SideNav from "./SideNav.vue";
const headerLinks = ["Projects", "About", "Photos"];
const page = ["main", "projects", "current"];
</script>

<template>
  <div class="w-full flex">
    <div class="w-5/12 h-screen bg-rose-700 relative">
      <Footer class="absolute bottom-0" />
    </div>
    <div class="w-7/12 h-screen relative flex justify-center items-center">
      <div
        class="about-section bg-pink-900 rounded shadow-xl absolute flex justify-center items-center"
      >
        <div class="text-white ml-4">
          <div class="mb-8 flex">
            <img
              src="../assets/book.svg"
              alt=""
              width="24"
              height="24"
              title="education"
            />
            <div class="mx-4">
              <p class="font-bold text-xl">Education</p>
              <p>Cornell University</p>
              <p>BS Computer Science</p>
            </div>
          </div>
          <div class="my-14 flex">
            <img
              src="../assets/building.svg"
              alt=""
              width="24"
              height="24"
              title="building"
            />
            <div class="mx-4">
              <p class="font-bold text-xl">Current Employment</p>
              <p>IBM Quantum</p>
              <p>Software Developer</p>
            </div>
          </div>
          <div class="my-2 flex">
            <img
              src="../assets/resume.svg"
              alt=""
              width="24"
              height="24"
              title="resume"
            />
            <p class="font-bold text-xl mx-4">Resume</p>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <p class="text-5xl font-bold mb-4">About</p>
        <p class="text-xl">
          Hi! I'm Kevin, a recent graduate, currently working as a developer for
          IBM Quantum. I enjoy trying out different frontend frameworks to
          create web apps . This website was made with Vite/Vue 3 and all of the
          source code is public so feel free to take a look. In my free time I
          enjoy hiking, taking photos, and speedcubing.
        </p>
      </div>
      <Header
        :pages="headerLinks"
        parent="About"
        class="absolute right-14 top-2"
      />
      <SideNav :pages="page" class="absolute right-4 top-1/2" />
    </div>
  </div>
</template>

<style scoped>
.about-section {
  width: 22rem;
  height: 28rem;
  left: -20%;
}
</style>
