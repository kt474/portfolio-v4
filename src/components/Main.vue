<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import SideNav from "./SideNav.vue";
import Logo from "./Logo.vue";
const headerLinks = ["Projects", "About"];
const page = ["current", "projects", "about"];
</script>

<template>
  <div class="w-full h-screen main">
    <Logo class="absolute top-0" />
    <Footer class="absolute bottom-0" />
    <div
      class="flex flex-wrap md:flex-nowrap align-middle justify-center force-center container"
    >
      <img class="profile-img" alt="profile" src="../assets/profile_pic.jpeg" />
      <div class="flex align-middle justify-center main-text">
        <div
          class="hidden md:block w-28 lg:w-44 h-1.5 bg-rose-700 red-bar"
        ></div>
        <div class="flex flex-row md:flex-col ml-10 md:ml-0 -mt-4 lg:mt-0">
          <div class="text-5xl sm:text-6xl font-bold -mt-4 mb-1 mr-12">
            <p class="my-2">Kevin</p>
            <p class="my-2">Tian</p>
          </div>
          <div class="">
            <p class="text-2xl w-12 sm:w-72 font-bold text-rose-700">
              Software Developer
            </p>
            <p class="text-2xl w-48 md:w-96 mt-2 sm:mt-4">
              Hi i'm Kevin - a developer, designer, and photographer
            </p>
          </div>
        </div>
      </div>
    </div>
    <Header :pages="headerLinks" parent="Main" class="absolute right-4 top-2" />
    <SideNav :pages="page" class="absolute right-4 side-nav" />
  </div>
</template>

<style scoped>
.main {
  background: linear-gradient(to right, #be123c 40%, #fff 0%);
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
