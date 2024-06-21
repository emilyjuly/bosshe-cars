/** @type {import('tailwindcss').Config} */
export default {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    extend: {
      colors: {
        gray: "#464646",
        medium_gray: "#939393",
        light_gray: "#C0C0C0",
        white: "#ECECEC",
        light_black: "#1D1D1D",
        transparent_gray: "rgba(148, 148, 148, 0.76)",
        transparent_beige: "rgba(197, 171, 148, 0.60)",
        beige: "#C5AC94",
        transparent_black: "rgba(24, 24, 24, 0.38)",
        bg_modal: "rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
