import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/scss/_theme.scss'],
  app: {
    head: {
      htmlAttrs: [{ lang: 'en' }],
    },
  },
});

