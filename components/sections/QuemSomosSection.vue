<template>
    <div class="flex-col w-full regular-bg">
        <div class="h-auto xl:h-72 lg:h-72 md:h-72 sm:h-72 p-10 flex w-full justify-between">
            <img class="w-10 xl:w-20 lg:w-20 md:w-16 sm:w-16" v-for="marca in marcas" :src="marca.src"
                :alt="`Símbolo da ${marca.name}`" :key="marca.name" />
        </div>
        <div
            class="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-center xl:justify-between lg:justify-between md:justify-between sm:justify-between">
            <div class="flex flex-col xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2">
                <div class="flex justify-between px-4 xl:px-24 lg:px-16 md:px-16 sm:px-16 items-center text-color mb-5">
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
                <div
                    class="flex flex-col justify-center xl:justify-start lg:justify-start md:justify-start sm:justify-start items-center xl:items-start lg:items-start md:items-start sm:items-start xl:pl-24 lg:pl-12 md:pl-12 sm:pl-12 xl:pt-12 lg:pt-12 md:pt-12 sm:pt-12">
                    <p
                        class="text-color-gray text-center xl:text-left lg:text-left md:text-left sm:text-left text-xl lg:text-lg md:text-lg sm:text-sm lg:w-80 md:w-80 sm:w-72 w-72 leading-10">
                        Há duas décadas, somos referência em Vale Verde.
                        Oferecemos os melhores carros importados e os últimos modelos,
                        incluindo elétricos. Compre veículos novos e semi novos
                        com financiamento facilitado. Descubra a qualidade que você merece.
                    </p>
                    <span class="flex items-center gap-2 text-color text-base font-semibold mt-10">
                        <Icon name="heroicons:map-pin-16-solid" />
                        <span>Vila Verde, Avenida das Estrelas, 23.</span>
                    </span>
                </div>
            </div>
            <div
                class="regular-bg xl:dark:bg-white lg:dark:bg-white md:dark:bg-white sm:dark:bg-white lg:w-1/2 md:w-1/2 sm:w-1/2">
                <img class="dark:bg-transparent bg-transparent xl:relative lg:relative md:relative sm:relative xl:top-20 lg:top-20 md:top-20 sm:top-10 xl:right-80 lg:right-40 md:right-24 sm:right-24"
                    src="../../assets/images/renault-kwid.svg" alt="Renault Kwid Elétrico" />
            </div>
        </div>
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