<template>
  <div>
    <section class="h-screen" id="inicio">
      <div>
        <img
          class="absolute top-0 right-0 h-full object-cover w-3/4"
          :src="imagePath"
          alt="Imagem de um carro"
        />
      </div>
      <div>
        <img
          class="absolute z-20"
          style="top: 10rem; left: 6rem; background-color: transparent"
          :src="imagePathPalavras"
          alt="Palavras sobre a imagem do carro"
        />
        <p
          class="absolute z-20 ml-4 text-gray dark:text-medium_gray font-medium tracking-wide w-1/5 bottom-4 left-0"
        >
          Trabalhamos com as melhores marcas do mercado automotivo para oferecer
          uma excelente experiência a todos os nossos clientes
        </p>
      </div>
    </section>
    <section class="h-screen" id="quem-somos">
      <p>Conteúdo da seção Quem Somos</p>
    </section>
    <section class="h-screen" id="catalogo">
      <p>Conteúdo da seção Catálogo</p>
    </section>
    <section class="h-screen" id="fale-conosco"></section>
  </div>
</template>
<script setup lang="ts">
import darkImage from "../assets/images/carro-pagina-inicial-dark.svg";
import lightImage from "../assets/images/carro-pagina-inicial-light.svg";

import darkImagePalavras from "../assets/images/palavras-inicio-dark.svg";
import lightImagePalavras from "../assets/images/palavras-inicio-light.svg";

const colorMode = useColorMode();

const imagePath = computed(() => {
  return colorMode.preference === "dark" ? darkImage : lightImage;
});

const imagePathPalavras = computed(() => {
  return colorMode.preference === "dark"
    ? darkImagePalavras
    : lightImagePalavras;
});
</script>
