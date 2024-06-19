<template>
  <div
    class="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row h-screen w-full regular-bg"
  >
    <img
      class="h-1/2 object-cover xl:h-full lg:h-full md:h-full sm:h-full xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-3/5"
      :src="imagePath"
      alt="Imagem de um carro"
    />
    <div
      class="flex flex-col xl:w-2/5 lg:w-2/5 md:w-2/5 sm:w-2/5 xl:justify-center lg:justify-center md:justify-center sm:justify-center xl:items-center lg:items-center md:items-center sm:items-center"
    >
      <img
        class="w-auto dark:bg-transparent bg-transparent xl:w-96 lg:w-96 md:w-80 sm:w-72"
        :src="imagePathPalavras"
        alt="Palavras sobre a imagem do carro"
      />
      <p
        class="regular-text xl:text-xl lg:text-xl md:text-sm sm:text-sm text-color-gray text-center xl:absolute lg:absolute md:absolute sm:absolute xl:bottom-10 lg:bottom-10 md:bottom-6 sm:bottom-6 xl:px-5 lg:px-5 md:px-5 sm:px-5"
      >
        Trabalhamos com as melhores marcas do mercado automotivo para oferecer
        uma excelente experiência a todos os nossos clientes
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHomePageBtnsStore } from "~/stores/HomePageBtns";

import darkImage from "../../assets/images/carro-pagina-inicial-dark.svg";
import lightImage from "../../assets/images/carro-pagina-inicial-light.svg";

import darkImagePalavras from "../../assets/images/palavras-inicio-dark.svg";
import lightImagePalavras from "../../assets/images/palavras-inicio-light.svg";

const colorMode = useColorMode();
const store = useHomePageBtnsStore();

const btns = [
  {
    value: "top",
    btnPosition: "top-40 right-40",
    divClass: "w-52 top-56 right-56",
    divPhrase:
      "Explore nossa seleção de carros confiáveis e de alto desempenho.",
  },
  {
    value: "mid",
    btnPosition: "bottom-60 right-64",
    divClass: "w-52 bottom-24 right-80",
    divPhrase:
      "Descubra carros inovadores, seguros e de qualidade excepcional.",
  },
  {
    value: "bottom",
    btnPosition: "bottom-20 right-2/4",
    divClass: "w-56 bottom-40 end-2/4",
    divPhrase:
      "Não vendemos apenas carros, vendemos uma experiência automotiva.",
  },
];

const imagePath = computed(() => {
  return colorMode.preference === "dark" ? darkImage : lightImage;
});

const imagePathPalavras = computed(() => {
  return colorMode.preference === "dark"
    ? darkImagePalavras
    : lightImagePalavras;
});
</script>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
}

.pulse-animation {
  animation: pulse 2s infinite;
}
</style>
