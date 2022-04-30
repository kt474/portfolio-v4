<script setup lang="ts">
import { onMounted, ref } from "vue";
defineProps({
  parent: String
});

const initialShow = ref(false);

onMounted(() => {
  setTimeout(() => (initialShow.value = true), 500);
});
</script>

<template>
  <div v-if="parent === 'main'" :class="initialShow ? 'show-div' : 'hidden'">
    <div
      v-motion-pop-visible
      :delay="1000"
      class="w-4 h-4 rounded-full my-2 hide-nav bg-rose-700"
    ></div>
    <div
      v-motion-roll-visible-left
      :delay="400"
      class="w-4 h-4 rounded-full my-2 hide-nav bg-rose-300"
    ></div>
    <div
      v-motion-roll-visible-left
      :delay="400"
      class="w-4 h-4 rounded-full my-2 hide-nav bg-rose-300"
    ></div>
  </div>
  <div v-else-if="parent === 'projects'">
    <div
      v-motion-roll-visible-left
      :delay="400"
      class="w-4 h-4 rounded-full my-2 hide-nav bg-rose-300"
    ></div>
    <div
      v-motion-pop-visible
      :delay="1000"
      class="w-4 h-4 rounded-full my-2 hide-nav bg-rose-700"
    ></div>
    <div
      v-motion-roll-visible-left
      :delay="400"
      class="w-4 h-4 rounded-full my-2 hide-nav bg-rose-300"
    ></div>
  </div>
  <div v-else-if="parent === 'about'">
    <div
      v-motion-roll-visible-left
      :delay="400"
      class="w-4 h-4 rounded-full my-2 hide-nav bg-rose-300"
    ></div>
    <div
      v-motion-roll-visible-left
      :delay="400"
      class="w-4 h-4 rounded-full my-2 hide-nav bg-rose-300"
    ></div>
    <div
      v-motion-pop-visible
      :delay="1000"
      class="w-4 h-4 rounded-full my-2 hide-nav bg-rose-700"
    ></div>
  </div>
</template>

<style scoped>
@media (max-width: 1024px) {
  .hide-nav {
    display: none;
  }
}
.hidden {
  visibility: hidden;
}
.show-div {
  visibility: initial;
}
</style>
