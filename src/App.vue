<script setup lang="ts">
import Main from "./components/Main.vue";
// @ts-ignore
import { useStore } from "./store/store.js";
import { onMounted, watch } from "vue";
const store = useStore();

onMounted(() => {
  setHtmlBackground();
});

watch(
  () => store.darkMode,
  () => setHtmlBackground()
);

const setHtmlBackground = () => {
  const html = document.querySelector("html");
  if (html) {
    if (store.darkMode) {
      html.style.background = "#1e1e1e";
    } else {
      html.style.background = "#f1f5f9";
    }
  }
};
</script>

<template>
  <Main />
</template>

<style>
#app {
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
