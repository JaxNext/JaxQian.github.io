<template>
  <not-support v-if="!isSuport" />
  <chat-room v-else />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
useHead({
  title: 'Chrome AI UI',
})
declare global {
  interface Window {
    ai: any;
  }
}
const isSuport = ref(false)

function detectSupport() {
  return window?.ai?.createTextSession
}

onMounted(() => {
  isSuport.value = detectSupport()
})
</script>

<style>
.nav-bar {
  display: none;
}
.wrapper {
  background-color: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>