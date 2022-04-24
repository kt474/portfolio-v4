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
    <div class="flex align-middle justify-center force-center">
      <img class="profile-img" alt="profile" src="../assets/profile_pic.jpeg" />
      <div class="flex align-middle justify-center ml-8 main-text">
        <div class="w-44 h-1.5 bg-rose-700 red-bar"></div>
        <div>
          <div class="text-6xl font-bold -mt-4 mb-2">
            <p class="my-2">Kevin</p>
            <p class="my-2">Tian</p>
          </div>
          <p class="text-2xl font-bold text-rose-700 mt-3">
            Software Developer
          </p>
          <p class="text-2xl w-96 mt-4">
            Hi i'm Kevin - a developer, designer, and photographer
          </p>
          <p class="text-2xl w-72 mt-4"></p>
        </div>
      </div>
    </div>
    <Header
      :pages="headerLinks"
      parent="Main"
      class="absolute right-14 top-2"
    />
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
  margin-left: -5%;
}
.red-bar {
  margin-top: 26%;
  margin-right: 3%;
}
.side-nav {
  top: 45%;
}
.profile-img {
  width: 375px;
  margin-left: 10vw;
}
</style>
