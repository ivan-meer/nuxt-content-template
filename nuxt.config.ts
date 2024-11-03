// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  routeRules: {
    '/': { prerender: true }
  }
})
