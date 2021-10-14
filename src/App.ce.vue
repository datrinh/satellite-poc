<script setup lang="ts">
import {ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const isOpen = ref(false)
</script>

<template>
<transition name="slide-fade">
  <main v-if="isOpen">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Custom Element" />

    <p>
      TEST PARAGRAPH
    </p>


  </main>
  </transition>
  <button class="cta-btn" @click="isOpen = !isOpen">💬</button>
</template>

<style scoped lang="pcss">
* {
  /* overwrites body style */
  font-size: 16px; 
  color: green;
}
main {
  @apply fixed shadow bg-white right-2 bottom-20 p-4;
}
p {
  @apply bg-blue-700 text-white p-2;
}
.cta-btn {
  @apply fixed bottom-2 right-2 rounded-full w-16 h-16 border-none bg-yellow-300 shadow cursor-pointer;
}
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .3s ease-in-out;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
