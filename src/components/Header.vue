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
      class="text-xl font-bold"
      :class="{ 'border-b-4 border-rose-700': page === parent }"
    >
      {{ page }}
    </p>
  </div>
</template>

<style scoped></style>
