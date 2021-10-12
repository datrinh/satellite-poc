<script setup lang="ts">
import {ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const isOpen = ref(false)
</script>

<template>
  <main v-if="isOpen">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Satellite" />

    <p>
      TEST P
    </p>


  </main>
  <button class="fixed bottom-2 right-2 rounded-full bg-yellow-300" @click="isOpen = !isOpen">Toggle</button>
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

</style>
