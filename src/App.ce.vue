<script setup lang="ts">
import {ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { Popover, PopoverButton, PopoverPanel, PopoverOverlay } from '@headlessui/vue'

// import "virtual:windi.css"

const isOpen = ref(false)
</script>

<template>
<div class="wrapper">
  <Popover class="popover">
      <PopoverButton class="cta-button">💬</PopoverButton>
      <!-- <PopoverOverlay
        class="overlay"
        :class="{ 'active': open }"
      /> -->
  
      <transition name="fade">
        <PopoverPanel class="panel">
          <HelloWorld msg="Custom Element" />
  
          <p>
            TEST PARAGRAPH
          </p>
        </PopoverPanel>
      </transition>
    </Popover>

</div>
</template>

<style scoped lang="pcss">
.wrapper {
  @apply fixed bottom-2 right-2;
}
.popover {
  @apply relative;
}
.cta-button {
  @apply rounded-full w-16 h-16 border-none bg-yellow-300 shadow cursor-pointer;
}
.panel {
  @apply absolute shadow p-4 bottom-20 right-2 bg-white z-10;
}
/* .overlay {
  @apply bg-black z-20;
  &.active {
    @apply opacity-30 fixed inset-0;
  }
} */
.fade-enter-active, .fade-leave-active {
  @apply transition-opacity;
}
.fade-enter, .fade-leave-to {
  @apply opacity-0;
}
</style>
