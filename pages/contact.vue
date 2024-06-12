<template>
  <div class="info-box w-full flex flex-col justify-end items-start pb-[120px]">
    <div
      v-for="(item, index) in infoList"
      :key="index"
      class="font-bold text-2xl text-white my-[10px] ml-[120px]">
      <span class="font-normal text-xl">{{ item.text }}: </span>
      <a
        v-if="item.type === 'link'"
        :href="`${item.linkType === 'email' ? 'mailto:' : ''}${item.value}`"
        target="_blank">{{ item.value }}</a>
      <span v-else>{{ item.value }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const infoList = [
  { text: 'Wechat', value: 'JaxNext' },
  { text: 'E-mail', value: 'thinking.jax@gmail.com', type: 'link', linkType: 'email' },
  { text: 'GitHub', value: 'https://github.com/JaxQian', type: 'link' },
]
</script>

<style scoped>

</style>