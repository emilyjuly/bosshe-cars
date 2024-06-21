// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-primevue",
    "@pinia/nuxt",
  ],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
    },
  },
  primevue: {
    usePrimeVue: true,
  },
  colorMode: {
    classSuffix: "",
    preference: "dark",
    fallback: "",
  },

  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      REPO_OWNER: process.env.REPO_OWNER,
      REPO_NAME: process.env.REPO_NAME,
      ACCESS_TOKEN: process.env.ACCESS_TOKEN,
      GIST_ID: process.env.GIST_ID,
    },
  },
});
