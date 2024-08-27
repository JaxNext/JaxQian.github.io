<template>
  <div class="portfolio-card bg-neutral-900 rounded-[16px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white box-border px-[20px] py-[30px] overflow-scroll no-scrollbar">
    <div class="top-row flex justify-between mb-[20px]">
      <div class="logo-box text-3xl mb-[10px]"><span class="prefix text-transparent">re</span>Jax</div>
      <div class="contact-icons flex items-center gap-[10px]">
        <a
          v-for="item in contactInfo"
          :key="item.text"
          :href="genContactLink(item)"
          :target="`${item.type === 'link' ? '_blank' : ''}`"
          class="h-fit"
        >
          <span :class="`icon-${item.icon} text-xl`"></span>
        </a>
      </div>
    </div>
    <div class="info-box flex justify-between">
      <div class="info max-w-[480px] mr-[40px]">
        <div class="text-6xl mb-[20px]">Hi, I'm Jax.</div>
        <div class="">Big fan of JavaScript.</div>
      </div>
      <div class="projects text-right">
        <div class="text-2xl mb-[14px]">Projects</div>
        <div v-for="item in projects" :key="item.link">
          <a :href="item.link" :target="`${item.external ? '_blank' : ''}`">{{ item.shortName }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects, contactInfo } from '~/static/data'

function genContactLink(item) {
  const isLink = item.type === 'link'
  if (!isLink) {
    return 'javascript:void(0)'
  }
  const isEmail = item.linkType === 'email'
  return isEmail ? `mailto:${item.value}` : `${item.value}`
}
</script>

<style src="~/static/fonts/style.css"></style>
<style scoped lang="scss">
.portfolio-card {
  border: 2px solid #7c7d81;
  width: calc(100vw - 160px);
  max-height: calc(100vh - 240px);
}
.prefix {
  -webkit-text-stroke: 1.25px #fff;
}
@media screen and (max-width: 670px) {
  .info-box {
    flex-direction: column;
  }
  .projects {
    padding-top: 10px;
    margin-top: 10px;
    text-align: left;
    border-top: 1px solid #7c7d81;
  }
}
</style>