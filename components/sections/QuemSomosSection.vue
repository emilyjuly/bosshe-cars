<template>
    <div class="flex-col w-full regular-bg">
        <div class="h-auto lg:h-72 p-10 flex flex w-full justify-between">
            <img
                class="w-10 lg:w-20"
                v-for="marca in marcas"
                :src="marca.src"
                :alt="`Símbolo da ${marca.name}`"
                :key="marca.name" />
        </div>
        <div class="flex flex-col lg:flex-row justify-center lg:justify-between">
            <div class="flex flex-col lg:w-1/2">
                <div class="flex justify-between px-4 lg:px-24 items-center text-color mb-5">
                    <div class="flex-col-center">
                        <p class="regular-title">20+</p>
                        <p class="regular-subtitle">MODELOS</p>
                    </div>

                    <div class="w-0.5 h-10 -translate-x-2/4 regular-bg-gray"></div>

                    <div class="flex-col-center">
                        <p class="regular-title">10000+</p>
                        <p class="regular-subtitle">CLIENTES</p>
                    </div>

                    <div class="w-0.5 h-10 -translate-x-2/4 regular-bg-gray"></div>

                    <div class="flex-col-center">
                        <p class="regular-title">10+</p>
                        <p class="regular-subtitle">MARCAS</p>
                    </div>
                </div>
                <div class="flex flex-col justify-center lg:justify-start items-center lg:items-start lg:pl-24 lg:pt-12">
                    <p class="text-color-gray text-center lg:text-left text-xl w-72 leading-10">
                        Há duas décadas, somos referência em Vale Verde.
                        Oferecemos os melhores carros importados e os últimos modelos,
                        incluindo elétricos. Compre veículos novos e semi novos
                        com financiamento facilitado. Descubra a qualidade que você merece.
                    </p>
                    <span class="flex items-center gap-2 text-color text-base font-semibold mt-10">
                        <Icon name="heroicons:map-pin-16-solid"/>
                        <span>Vila Verde, Avenida das Estrelas, 23.</span>
                    </span>
                </div>
            </div>
            <div class="regular-bg lg:dark:bg-white">
                <img
                    class="dark:bg-transparent bg-transparent lg:relative lg:top-20 lg:right-80"
                    src="../../assets/images/renault-kwid.svg"
                    alt="Renault Kwid Elétrico"/>
            </div>
        </div>
<!--        <div class="h-52 p-12 flex justify-between">
            <img class="w-16" v-for="marca in marcas" :src="marca.src" :alt="`Símbolo da ${marca.name}`"
                :key="marca.name" />
        </div>
        <div class="h-5/6 flex">
            <div class="w-1/2 px-20 text-color">
                <div class="between-center mt-24">
                    <div class="flex-col-center">
                        <p class="regular-title">20+</p>
                        <p class="regular-subtitle">MODELOS</p>
                    </div>

                    <div class="w-0.5 h-16 -translate-x-2/4 regular-bg-gray"></div>

                    <div class="flex-col-center">
                        <p class="regular-title">10000+</p>
                        <p class="regular-subtitle">CLIENTES</p>
                    </div>

                    <div class="w-0.5 h-16 -translate-x-2/4 regular-bg-gray"></div>

                    <div class="flex-col-center">
                        <p class="regular-title">10+</p>
                        <p class="regular-subtitle">MARCAS</p>
                    </div>
                </div>
                <div class="flex-col">
                    <p class="text-color-gray text-2xl w-96 mt-20 leading-10">
                        Há duas décadas, somos referência em Vale Verde.
                        Oferecemos os melhores carros importados e os últimos modelos,
                        incluindo elétricos. Compre veículos novos e semi novos
                        com financiamento facilitado. Descubra a qualidade que você merece.
                    </p>
                    <span class="flex items-center gap-2 text-color text-xl font-semibold mt-16">
                        <Icon name="heroicons:map-pin-16-solid" />
                        <span>Vila Verde, Avenida das Estrelas, 23.</span>
                    </span>
                </div>
            </div>
            <div class="w-1/2 bg-white dark:bg-white">
                <img class="dark:bg-transparent bg-transparent relative top-20 right-80"
                    src="../../assets/images/renault-kwid.svg" alt="Renault Kwid Elétrico" />
            </div>
        </div>-->
    </div>
</template>

<script setup lang="ts">
import hondaImage from '../assets/images/honda.svg'
import renaultImage from '../assets/images/renault.svg'
import hyundaiImage from '../assets/images/hyundai.svg'
import nissanImage from '../assets/images/nissan.svg'
import citroenImage from '../assets/images/citroen.svg'

const marcas = [
    { name: 'Honda', src: hondaImage },
    { name: 'Renault', src: renaultImage },
    { name: 'Hyundai', src: hyundaiImage },
    { name: 'Nissan', src: nissanImage },
    { name: 'Citroen', src: citroenImage },
]
</script>