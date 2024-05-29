// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "nuxt-icon", "nuxt-primevue", "@pinia/nuxt"],
    primevue: {
        usePrimeVue: true
    },
    colorMode: {
        classSuffix: "",
        preference: "dark",
        fallback: "dark",
    },

    devtools: {enabled: false},
    css: [
        "~/assets/css/main.css",
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
