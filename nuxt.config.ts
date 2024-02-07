// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    output: {
      publicDir: 'docs'
    }
  },
  app: {
    buildAssetsDir: '/static/'
  }
})
