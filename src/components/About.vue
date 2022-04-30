<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import SideNav from "./SideNav.vue";
// @ts-ignore
import { useStore } from "../store/store";
import { computed } from "vue";
const store = useStore();
const headerLinks = ["Home", "Projects", "About"];

const darkMode = computed(() => {
  return store.darkMode;
});
</script>

<template>
  <div
    id="About"
    class="h-screen relative"
    :class="darkMode ? 'dark-background dark' : 'background'"
  >
    <Footer class="hidden sm:block absolute bottom-0 dark:text-neutral-900" />
    <div
      class="flex flex-wrap justify-center items-center force-center dark:text-white"
    >
      <div class="about-section bg-pink-900 rounded-lg shadow-xl">
        <img class="rounded-lg" src="../assets/cube.jpeg" alt="cube" />
        <div class="text-white ml-10 sm:ml-12">
          <div class="mb-2 sm:mb-8 flex">
            <img
              src="../assets/book.svg"
              alt=""
              width="24"
              height="24"
              title="education"
            />
            <div class="mx-4 mt-2 sm:mt-4">
              <p class="font-bold text-base sm:text-xl">Education</p>
              <p class="text-sm sm:text-base">Cornell University</p>
              <p class="text-sm sm:text-base">BS Computer Science</p>
            </div>
          </div>
          <div class="my-4 sm:my-8 flex">
            <img
              src="../assets/building.svg"
              alt=""
              width="24"
              height="24"
              title="building"
            />
            <div class="mx-4">
              <p class="font-bold text-base sm:text-xl">Current Employment</p>
              <p class="text-sm sm:text-base">IBM Quantum</p>
              <p class="text-sm sm:text-base">Software Developer</p>
            </div>
          </div>
          <a href="../../public/Resume.pdf" target="_blank" class="my-2 flex">
            <img
              src="../assets/resume.svg"
              alt=""
              width="24"
              height="24"
              title="resume"
            />
            <p class="font-bold text-base sm:text-xl mx-4">Resume</p>
          </a>
        </div>
      </div>
      <div
        class="w-80 md:w-2/5 -ml-16 sm:ml-20 h-96 sm:h-80 flex flex-row sm:flex-col mt-3 sm:mt-0"
      >
        <p class="text-4xl sm:text-5xl font-bold mb-4 mr-8 sm:mr-0">About Me</p>
        <div class="overflow-auto">
          <p class="text-base sm:text-xl">
            I'm a recent graduate currently working as a developer for
            <a
              class="text-blue-500"
              href="https://quantum-computing.ibm.com/"
              target="_blank"
              >IBM Quantum</a
            >. I enjoy working with different frontend frameworks to create web
            apps. This website was made with Vue/Tailwind and all of the source
            code is
            <a
              class="text-blue-500"
              href="https://github.com/kt474/portfolio-v4"
              target="_blank"
              >public</a
            >
            so feel free to take a look. In my free time I enjoy running, taking
            photos, and
            <a
              class="text-blue-500"
              href="https://youtu.be/OfMvZr38v1o"
              target="_blank"
              >speedcubing</a
            >.
          </p>
        </div>
      </div>
    </div>
    <Header
      :pages="headerLinks"
      parent="About"
      class="absolute right-4 top-2 dark:text-white"
    />
    <SideNav parent="about" class="absolute right-4 side-nav" />
  </div>
</template>

<style scoped>
.background {
  background: linear-gradient(to right, #be123c 40%, #fff 0%);
}
.dark-background {
  background: linear-gradient(to right, #be123c 40%, #1e1e1e 0%);
}
.about-section {
  width: 21rem;
  height: 30rem;
}
@media (max-width: 768px) {
  .force-center {
    left: 0 !important;
  }
}
@media (max-width: 640px) {
  .about-section {
    width: 17rem !important;
    height: 23rem !important;
  }
}
.side-nav {
  top: 45%;
}
.force-center {
  position: relative;
  margin-left: 17%;
  top: 50%;
  transform: translateY(-50%);
}
</style>
