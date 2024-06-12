<template>
  <div class="nav-bar p-[20px] flex shadow-lg sticky top-0 bg-slate-600 text-white">
    <div class="logo text-2xl font-bold cursor-pointer" @click="$router.push('/')">Jax</div>
    <div class="menu flex ml-auto">
      <div
        v-for="menu in menuList"
        :key="menu.link"
        class="menu-item mx-[10px]">
        <NuxtLink :to="menu.link">{{ menu.text }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const menuList = [
  // { text: '首页', link: '/' },
  // { text: '作品', link: '/works' },
  // { text: '文章', link: '/blogs' },
  { text: '联系我', link: '/contact' },
]
</script>