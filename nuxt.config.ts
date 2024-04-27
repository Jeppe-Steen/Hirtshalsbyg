// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'dk',
      },
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/robots',
  ],
})
