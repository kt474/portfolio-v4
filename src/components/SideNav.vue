<script setup lang="ts">
defineProps({
  pages: Array
});
</script>

<template>
  <div>
    <div
      v-for="page in pages"
      class="w-4 h-4 rounded-full my-2"
      :class="{
        'bg-rose-700': page === 'current',
        'bg-rose-400': page !== 'current'
      }"
    ></div>
  </div>
</template>

<style scoped></style>
