<script setup lang="ts">
import {ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
// import "virtual:windi.css"

const isOpen = ref(false)
</script>

<template>
  <main v-show="isOpen">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Custom Element" />

    <p>
      TEST PARAGRAPH
    </p>


  </main>
  <button class="cta-btn" @click="isOpen = !isOpen">💬</button>
</template>

<style scoped lang="pcss">
main {
  border: 1px solid red;
  position: fixed;
  bottom: 8px;
  right: 8px;
}
p {
  @apply bg-blue-700 text-white p-2;
}
.cta-btn {
  @apply fixed bottom-2 right-2 rounded-full w-16 h-16 border-none bg-yellow-300 shadow cursor-pointer;
}
</style>
