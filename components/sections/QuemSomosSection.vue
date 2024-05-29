<template>
    <div class="h-full">
        <div class="w-full h-52 p-12 flex justify-between">
            <img
                class="w-16"
                v-for="marca in marcas"
                :src="marca.src"
                :alt="`Símbolo da ${marca.name}`"
                :key="marca.name"
            />
        </div>
        <div class="h-5/6 flex w-full">
            <div class="w-1/2 pl-20 pr-20 text-light_black dark:text-white bg-white dark:bg-light_black">
                <div class="flex justify-between mt-24 items-center ">
                    <div class="flex flex-col items-center">
                        <p class="font-black text-3xl">20+</p>
                        <p class="font-bold text-lg">MODELOS</p>
                    </div>
                    <div class="w-0.5 h-16 -translate-x-2/4 dark:bg-medium_gray bg-light_gray"></div>

                    <div class="flex flex-col items-center">
                        <p class="font-black text-3xl">10000+</p>
                        <p class="font-bold text-lg">CLIENTES</p>
                    </div>
                    <div class="w-0.5 h-16 -translate-x-2/4 dark:bg-medium_gray bg-light_gray"></div>

                    <div class="flex flex-col items-center">
                        <p class="font-black text-3xl">10+</p>
                        <p class="font-bold text-lg">MARCAS</p>
                    </div>
                </div>
                <div>
                    <p class="text-gray dark:text-medium_gray text-2xl w-96 mt-20 leading-10">
                        Há duas décadas, somos referência em Vale Verde.
                        Oferecemos os melhores carros importados e os últimos modelos,
                        incluindo elétricos. Compre veículos novos e semi novos
                        com financiamento facilitado. Descubra a qualidade que você merece.
                    </p>
                    <span class="flex items-center gap-2 text-light_black dark:text-white text-xl font-semibold mt-16">
                        <Icon name="heroicons:map-pin-16-solid" />
                        <span>Vila Verde, Avenida das Estrelas, 23.</span>
                    </span>
                </div>
            </div>
            <div class="w-1/2 bg-white dark:bg-white">
                <img
                    class="z-20 dark:bg-transparent bg-transparent relative top-20 right-80"
                    src="../../assets/images/renault-kwid.svg"
                    alt="Renault Kwid Elétrico"
                />
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
</script>