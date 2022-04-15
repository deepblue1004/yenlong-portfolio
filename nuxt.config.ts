import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/scss/_theme.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "~/assets/scss/functions.scss"; @import "~/assets/scss/colors.scss";',
        },
      },
    },
  },
});
