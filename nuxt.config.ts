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
        "primevue/resources/themes/saga-blue/theme.css",
        "primevue/resources/primevue.min.css",
        "primeicons/primeicons.css",
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
