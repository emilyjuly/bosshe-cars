<template>
    <div>
        <section class="h-screen" id="inicio">
            <div>
                <img
                    class="absolute top-0 right-0 h-full object-cover w-3/4"
                    :src="imagePath"
                    alt="Imagem de um carro"
                />
                <Button
                    class="pulse-animation p-4 absolute bg-light_black text-white dark:bg-white dark:text-light_black top-40 right-40 z-30"
                    rounded
                    aria-label="tooltip"
                    @click="buttonClickedTop = !buttonClickedTop; buttonClickedBottom = false; buttonClickedMid = false "
                >
                    <Icon
                        class="text-2xl bg-transparent dark:bg-transparent font-medium"
                        name="heroicons:plus-16-solid"
                    />
                </Button>
                <div
                    v-if="buttonClickedTop"
                    class="absolute w-52 top-56 right-56 text-base bg-gray text-white dark:font-medium dark:bg-transparent_gray dark:text-white p-4 rounded-lg shadow-lg"
                >
                    Explore nossa seleção de carros confiáveis e de alto desempenho.
                </div>
                <Button
                    class="pulse-animation p-4 absolute bg-light_black text-white dark:bg-white dark:text-light_black bottom-60 right-64 z-30"
                    rounded
                    aria-label="tooltip"
                    @click="buttonClickedMid = !buttonClickedMid; buttonClickedTop = false; buttonClickedBottom = false"
                >
                    <Icon
                        class="text-2xl bg-transparent dark:bg-transparent font-medium"
                        name="heroicons:plus-16-solid"
                    />
                </Button>
                <div
                    v-if="buttonClickedMid"
                    class="absolute w-52 bottom-24 right-80 text-base bg-gray text-white dark:font-medium dark:bg-transparent_gray dark:text-white p-4 rounded-lg shadow-lg"
                >
                    Descubra carros inovadores, seguros e de qualidade excepcional.
                </div>
                <Button
                    class="pulse-animation p-4 absolute bg-light_black text-white dark:bg-white dark:text-light_black bottom-20 right-2/4 z-30"
                    rounded
                    aria-label="tooltip"
                    @click="buttonClickedBottom = !buttonClickedBottom; buttonClickedTop = false; buttonClickedMid = false"
                >
                    <Icon
                        class="text-2xl bg-transparent dark:bg-transparent font-medium"
                        name="heroicons:plus-16-solid"
                    />
                </Button>
                <div
                    v-if="buttonClickedBottom"
                    class="absolute flex w-56 bottom-40 end-2/4 text-base bg-gray text-white dark:font-medium dark:bg-transparent_gray dark:text-white p-4 rounded-lg shadow-lg"
                >
                    Não vendemos apenas carros, vendemos uma experiência automotiva.
                </div>
            </div>
            <div>
                <img
                    class="absolute z-20"
                    style="top: 10rem; left: 14rem; background-color: transparent"
                    :src="imagePathPalavras"
                    alt="Palavras sobre a imagem do carro"
                />
                <p
                    class="absolute z-20 ml-4 text-lg text-gray dark:text-medium_gray font-medium tracking-widest w-1/5 bottom-4 left-0"
                >
                    Trabalhamos com as melhores marcas do mercado automotivo para oferecer
                    uma excelente experiência a todos os nossos clientes
                </p>
            </div>
        </section>
        <section class="h-screen" id="quem-somos">
            <div class="w-full h-52 p-12 flex justify-between">
                <img
                    class="w-16"
                    v-for="marca in marcas"
                    :src="marca.src"
                    :alt="`Símbolo da ${marca.name}`"
                    :key="marca.name"
                />
            </div>
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

import hondaImage from "../assets/images/honda.svg";
import renaultImage from "../assets/images/renault.svg";
import hyundaiImage from "../assets/images/hyundai.svg";
import nissanImage from "../assets/images/nissan.svg";
import citroenImage from "../assets/images/citroen.svg";

const colorMode = useColorMode();
const buttonClickedTop = ref(false);
const buttonClickedMid = ref(false);
const buttonClickedBottom = ref(false);


const marcas = [
    {name: 'Honda', src: hondaImage},
    {name: 'Renault', src: renaultImage},
    {name: 'Hyundai', src: hyundaiImage},
    {name: 'Nissan', src: nissanImage},
    {name: 'Citroen', src: citroenImage},
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
    0%, 100% {
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
