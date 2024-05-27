<template>
    <div>
        <img
            class="absolute top-0 right-0 h-full object-cover w-3/4"
            :src="imagePath"
            alt="Imagem de um carro"
        />
        <template v-for="btn in btns" :key="btn.value">
            <Button
                :class="[
                            'pulse-animation p-4 absolute z-30',
                            btn.btnPosition,
                            store.btnClicked === btn.value ? 'bg-gray text-white dark:bg-transparent_gray dark:text-white' : 'bg-light_black text-white dark:bg-white dark:text-light_black'
                        ]"
                rounded
                aria-label="tooltip"
                @click="store.handleClick(btn.value)"
            >
                <Icon
                    class="text-2xl bg-transparent dark:bg-transparent font-medium"
                    name="heroicons:plus-16-solid"
                />
            </Button>
            <div
                v-if="store.btnClicked === btn.value"
                :class="`absolute ${btn.divClass} text-base bg-gray text-white dark:font-medium dark:bg-transparent_gray dark:text-white p-4 rounded-lg shadow-lg`"
            >
                {{ btn.divPhrase }}
            </div>
        </template>
    </div>
    <div>
        <img
            class="absolute z-20"
            style="top: 10rem; left: 14rem; background-color: transparent"
            :src="imagePathPalavras"
            alt="Palavras sobre a imagem do carro"
        />
        <p
            class="absolute z-20 ml-4 text-lg text-gray dark:text-medium_gray font-medium tracking-widest w-1/4 bottom-0 left-0"
            style="background: transparent"
        >
            Trabalhamos com as melhores marcas do mercado automotivo para oferecer
            uma excelente experiência a todos os nossos clientes
        </p>
    </div>
</template>

<script setup lang="ts">
import {useHomePageBtnsStore} from "~/stores/HomePageBtns";

import darkImage from "../../assets/images/carro-pagina-inicial-dark.svg";
import lightImage from "../../assets/images/carro-pagina-inicial-light.svg";

import darkImagePalavras from "../../assets/images/palavras-inicio-dark.svg";
import lightImagePalavras from "../../assets/images/palavras-inicio-light.svg";

const colorMode = useColorMode();
const store = useHomePageBtnsStore();

const btns = [
    {
        value: 'top',
        btnPosition: 'top-40 right-40',
        divClass: 'w-52 top-56 right-56',
        divPhrase: 'Explore nossa seleção de carros confiáveis e de alto desempenho.'
    },
    {
        value: 'mid',
        btnPosition: 'bottom-60 right-64',
        divClass: 'w-52 bottom-24 right-80',
        divPhrase: 'Descubra carros inovadores, seguros e de qualidade excepcional.'
    },
    {
        value: 'bottom',
        btnPosition: 'bottom-20 right-2/4',
        divClass: 'w-56 bottom-40 end-2/4',
        divPhrase: 'Não vendemos apenas carros, vendemos uma experiência automotiva.'
    }
]

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
