<template>
    <div>
        <div class="w-full h-52 p-12 flex justify-between">
            <img
                class="w-16"
                v-for="marca in marcas"
                :src="marca.src"
                :alt="`Símbolo da ${marca.name}`"
                :key="marca.name"
            />
        </div>
        <div class="flex w-full">
            <div class="h-screen w-1/2 pl-20 pr-20 bg-light_black">
                <div class="flex justify-between mt-24 bg-light_black items-center text-white dark:text-white">
                    <div class="flex flex-col items-center bg-light_black">
                        <p class="font-black text-3xl bg-light_black">20+</p>
                        <p class="font-bold text-lg bg-light_black">MODELOS</p>
                    </div>
                    <div class="w-0.5 h-16 -translate-x-2/4 bg-light_gray dark:bg-light_gray"></div>

                    <div class="flex flex-col items-center bg-light_black">
                        <p class="font-black text-3xl bg-light_black">10000+</p>
                        <p class="font-bold text-lg bg-light_black">CLIENTES</p>
                    </div>
                    <div class="w-0.5 h-16 -translate-x-2/4 bg-light_gray dark:bg-light_gray"></div>

                    <div class="flex flex-col items-center bg-light_black">
                        <p class="font-black text-3xl bg-light_black">10+</p>
                        <p class="font-bold text-lg bg-light_black">MARCAS</p>
                    </div>
                </div>
                <div class="bg-light_black">
                    <p class="text-medium_gray dark:text-medium_gray text-2xl w-96 mt-36 leading-10 bg-light_black">
                        Há duas décadas, somos referência em Vale Verde.
                        Oferecemos os melhores carros importados e os últimos modelos,
                        incluindo elétricos. Compre veículos novos e semi novos
                        com financiamento facilitado. Descubra a qualidade que você merece.
                    </p>
                    <span class="flex items-center gap-2 text-white dark:text-white text-xl font-semibold mt-32 bg-light_black">
                        <Icon name="heroicons:map-pin-16-solid" class="bg-light_black" />
                        <span class="bg-light_black">Vila Verde, Avenida das Estrelas, 23.</span>
                    </span>
                </div>
            </div>
            <div class="h-screen w-1/2 bg-white dark:bg-white">
                <p class="importados relative transform top-36 -left-36 rotate-90 inline-block tracking-wide text-5xl font-extrabold bg-transparent dark:bg-transparent">IMPORTADOS</p>
                <img
                    class="z-20 dark:bg-transparent bg-transparent relative top-24 right-80"
                    src="../../assets/images/renault-kwid.svg"
                    alt="Renault Kwid Elétrico"
                />
                <p class="eletricos relative transform -bottom-24 -left-44 -rotate-90 inline-block tracking-wide text-5xl font-extrabold bg-transparent dark:bg-transparent">ELÉTRICOS</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import hondaImage from "../assets/images/honda.svg";
import renaultImage from "../assets/images/renault.svg";
import hyundaiImage from "../assets/images/hyundai.svg";
import nissanImage from "../assets/images/nissan.svg";
import citroenImage from "../assets/images/citroen.svg";

const marcas = [
    {name: 'Honda', src: hondaImage},
    {name: 'Renault', src: renaultImage},
    {name: 'Hyundai', src: hyundaiImage},
    {name: 'Nissan', src: nissanImage},
    {name: 'Citroen', src: citroenImage},
];

const numbers = [
    { number: '+20', text: 'MODELOS' },
    { number: '+10000', text: 'CLIENTES' },
    { number: '+10', text: 'MARCAS' },
]
</script>

<style scoped>
.importados {
    @apply text-white;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
}

.eletricos {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
}
</style>