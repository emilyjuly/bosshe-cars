<template>
    <div class="h-screen w-full flex flex-col items-center">
        <p class="text-light_black dark:text-white font-black tracking-wide text-4xl dark:text-white mt-28">NOSSA
            COLEÇÃO DE CARROS</p>
        <p
            class="text-gray dark:text-medium_gray font-medium text-base w-1/3 text-center mt-2"
        >
            Explore e Descubra Nossa Exclusiva Coleção de Carros: Encontre o Veículo
            Perfeito para Cada Momento da Sua Vida!
        </p>
        <div class="text-white dark:text-white justify-center flex w-full mt-10">
            <template v-for="car in cars.suv" :key="car.name">
                <div class="grid grid-cols-3 gap-52">
                    <CarCard
                        :image-src="car.image"
                        :price="car.price"
                        :carName="car.name"
                    />
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import CarCard from "~/components/cards/CarCard.vue";
import captur from "../../assets/images/catalogo/suv/captur.svg"
import kona from "../../assets/images/catalogo/suv/kona.svg"
import hrv from "../../assets/images/catalogo/suv/hr-v.svg"
import kicks from "../../assets/images/catalogo/suv/kicks.svg"
import citroen from "../../assets/images/catalogo/suv/citroen.svg"
import palisade from "../../assets/images/catalogo/suv/palisade.svg"

const tabs = ref(['SUV', 'SEDAN', 'HATCH', '4 X 4']);

const cars = {
    suv: [
        { name: 'Renault Captur', price: '200.000,00', image: captur },
        { name: 'Hyundai Kona', price: '200.000,00', image: kona },
        { name: 'Honda HR-V', price: '200.000,00', image: hrv },
        { name: 'Nissan Kicks', price: '200.000,00', image: kicks },
        { name: 'Citroen AirCross', price: '200.000,00', image: citroen },
        { name: 'Hyundai Palisade', price: '200.000,00', image: palisade },
    ]
}
</script>