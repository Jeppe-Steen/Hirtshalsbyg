// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'da',
      },
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/robots',
  ],
})
