<script setup lang="ts">
defineProps({
  pages: Array,
  parent: String
});
</script>

<template>
  <div class="flex justify-between w-44">
    <p
      v-for="page in pages"
      class="text-xl font-bold hide-header"
      :class="{ 'border-b-4 border-rose-700': page === parent }"
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
