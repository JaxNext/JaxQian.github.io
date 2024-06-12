<template>
  <div class="album-box p-[120px]">
    <div class="text-3xl font-bold text-white">Album:</div>
    <div
      v-for="item in list"
      :key="item.link"
      class="album-item">
      <a :href="`./${item.link}`" class="block text-xl font-bold text-gray-400 cursor-pointer my-[30px]">{{ item.text }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const list = [
  { text: 'Chrome AI GUI', link: 'chrome-ai-ui/' },
  { text: '50 Projects 50 Days with Vue3', link: '50pd/#/' },
]
</script>

<style scoped>

</style>