<script setup lang="ts">
defineProps({
  pages: Array,
  parent: String
});
function scroll(id: any) {
  //@ts-ignore
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
</script>

<template>
  <div class="flex justify-between w-64">
    <p
      v-for="page in pages"
      class="text-xl font-bold hide-header cursor-pointer"
      :class="{ 'border-b-4 border-rose-700': page === parent }"
      @click="scroll(page)"
    >
      {{ page }}
    </p>
  </div>
</template>

<style scoped>
@media (max-width: 1024px) {
  .hide-header {
    display: none;
  }
}
</style>
