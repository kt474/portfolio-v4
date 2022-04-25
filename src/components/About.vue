<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import SideNav from "./SideNav.vue";
const headerLinks = ["Projects", "About"];
const page = ["main", "projects", "current"];
</script>

<template>
  <div class="w-full h-screen relative about">
    <Footer class="hidden sm:block absolute bottom-0" />
    <div class="flex flex-wrap justify-center items-center force-center">
      <div class="about-section bg-pink-900 rounded-lg shadow-xl">
        <img class="rounded-lg" src="../assets/cube.jpeg" alt="cube" />
        <div class="text-white ml-12">
          <div class="mb-8 flex">
            <img
              src="../assets/book.svg"
              alt=""
              width="24"
              height="24"
              title="education"
            />
            <div class="mx-4 mt-4">
              <p class="font-bold text-xl">Education</p>
              <p>Cornell University</p>
              <p>BS Computer Science</p>
            </div>
          </div>
          <div class="my-8 flex">
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
          <a href="../assets/Resume.pdf" target="_blank" class="my-2 flex">
            <img
              src="../assets/resume.svg"
              alt=""
              width="24"
              height="24"
              title="resume"
            />
            <p class="font-bold text-xl mx-4">Resume</p>
          </a>
        </div>
      </div>
      <div
        class="w-80 md:w-1/3 -ml-10 sm:ml-16 h-80 flex flex-row sm:flex-col mt-3 sm:mt-0"
      >
        <p class="text-5xl font-bold mb-4 mr-8 sm:mr-0">About Me</p>
        <div class="overflow-auto">
          <p class="text-xl">
            I'm a recent graduate currently working as a developer for
            <a
              class="text-blue-500"
              href="https://quantum-computing.ibm.com/"
              target="_blank"
              >IBM Quantum</a
            >. I enjoy working with different frontend frameworks to create web
            apps. This website was made with Vite/Vue 3 and all of the source
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
      class="absolute right-4 top-2"
    />
    <SideNav :pages="page" class="absolute right-4 top-1/2" />
  </div>
</template>

<style scoped>
.about {
  background: linear-gradient(to right, #be123c 40%, #fff 0%);
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
.force-center {
  position: relative;
  left: 8%;
  top: 50%;
  transform: translateY(-50%);
}
</style>
