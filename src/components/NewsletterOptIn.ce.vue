<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>

<template>
  <div class="rounded shadow border p-4">
    <h1>
      {{ title }}
    </h1>
  </div>
</template>

<style lang="pcss">
@import '../index.css';
</style>