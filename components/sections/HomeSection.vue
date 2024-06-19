<template>
  <div
    class="flex h-screen w-full flex-col bg-white dark:bg-light_black sm:flex-row md:flex-row lg:flex-row xl:flex-row"
  >
    <img
      class="h-1/2 object-cover sm:h-full sm:w-3/5 md:h-full md:w-3/5 lg:h-full lg:w-3/5 xl:h-full xl:w-3/5"
      :src="imagePath"
      alt="Imagem de um carro"
    />
    <div
      class="flex flex-col sm:w-2/5 sm:items-center sm:justify-center md:w-2/5 md:items-center md:justify-center lg:w-2/5 lg:items-center lg:justify-center xl:w-2/5 xl:items-center xl:justify-center"
    >
      <img
        class="w-auto bg-transparent dark:bg-transparent sm:w-72 md:w-80 lg:w-96 xl:w-96"
        :src="imagePathPalavras"
        alt="Palavras sobre a imagem do carro"
      />
      <p
        class="dark:text-white-gray text-center text-lg font-medium tracking-wide text-light_black sm:absolute sm:bottom-6 sm:px-5 sm:text-sm md:absolute md:bottom-6 md:px-5 md:text-sm lg:absolute lg:bottom-10 lg:px-5 lg:text-xl xl:absolute xl:bottom-10 xl:px-5 xl:text-xl"
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
