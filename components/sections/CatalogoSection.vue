<template>
  <div class="regular-container xl:mt-20 lg:mt-20 md:mt-20 sm:mt-20">
    <p class="text-color regular-title">NOSSA COLEÇÃO DE CARROS</p>
    <p class="text-sm text-color text-center mt-2">
      Explore e Descubra Nossa Exclusiva Coleção de Carros!
    </p>
    <TabView
      class="tabview-custom flex-col-center mt-5"
      v-model:activeIndex="activeTab"
    >
      <TabPanel v-for="(tab, index) in tabs" :key="index">
        <template #header>
          <span
            :class="{ active: activeTab === index }"
            class="flex regular-transition text-medium_gray dark:text-medium_gray text-lg mx-5 xl:mx-24 lg:mx-24 md:mx-16 sm:mx-10 font-bold mb-10"
          >
            {{ tab }}
          </span>
        </template>
        <div class="regular-grid">
          <template v-for="car in filteredCars" :key="car.name">
            <CarCard :image="car.image" :price="car.price" :name="car.name" />
          </template>
        </div>
      </TabPanel>
    </TabView>
    <ShopCartBtn v-if="store.shopCart.length > 0" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import CarCard from "~/components/cards/CarCard.vue";
import { useShopCartStore } from "~/stores/ShopCart";

import captur from "../../assets/images/catalogo/suv/captur.svg";
import kona from "../../assets/images/catalogo/suv/kona.svg";
import hrv from "../../assets/images/catalogo/suv/hr-v.svg";
import kicks from "../../assets/images/catalogo/suv/kicks.svg";
import citroen from "../../assets/images/catalogo/suv/citroen.svg";
import palisade from "../../assets/images/catalogo/suv/palisade.svg";

import fluence from "../../assets/images/catalogo/sedan/fluence.svg";
import elantra from "../../assets/images/catalogo/sedan/elantra.svg";
import civic from "../../assets/images/catalogo/sedan/civic.svg";
import sentra from "../../assets/images/catalogo/sedan/sentra.svg";
import c4 from "../../assets/images/catalogo/sedan/c4.svg";
import hb20 from "../../assets/images/catalogo/sedan/hb20.svg";

import kwid from "../../assets/images/catalogo/hatch/kwid.svg";
import hb20h from "../../assets/images/catalogo/hatch/hb20.svg";
import city from "../../assets/images/catalogo/hatch/city.svg";
import micra from "../../assets/images/catalogo/hatch/micra.svg";
import c3 from "../../assets/images/catalogo/hatch/c3.svg";
import i20 from "../../assets/images/catalogo/hatch/i20.svg";

import duster from "../../assets/images/catalogo/4x4/duster.svg";
import santaFe from "../../assets/images/catalogo/4x4/santaFe.svg";
import elevate from "../../assets/images/catalogo/4x4/elevate.svg";
import frontier from "../../assets/images/catalogo/4x4/frontier.svg";
import c34 from "../../assets/images/catalogo/4x4/c3.svg";
import creta from "../../assets/images/catalogo/4x4/creta.svg";
import ShopCartBtn from "~/components/buttons/ShopCartBtn.vue";

const tabs = ref(["SUV", "SEDAN", "HATCH", "4 X 4"]);
const activeTab = ref(0);
const store = useShopCartStore();

const cars = {
  suv: [
    { name: "Renault Captur", price: "200.000,00", image: captur },
    { name: "Hyundai Kona", price: "200.000,00", image: kona },
    { name: "Honda HR-V", price: "200.000,00", image: hrv },
    { name: "Nissan Kicks", price: "200.000,00", image: kicks },
    { name: "Citroen AirCross", price: "200.000,00", image: citroen },
    { name: "Hyundai Palisade", price: "200.000,00", image: palisade },
  ],
  sedan: [
    { name: "Renault Fluence", price: "200.000,00", image: fluence },
    { name: "Hyundai Elantra", price: "200.000,00", image: elantra },
    { name: "Honda Civic", price: "200.000,00", image: civic },
    { name: "Nissan Sentra", price: "200.000,00", image: sentra },
    { name: "Citroen C4", price: "200.000,00", image: c4 },
    { name: "Hyundai HB20", price: "200.000,00", image: hb20 },
  ],
  hatch: [
    { name: "Renault Kwid", price: "200.000,00", image: kwid },
    { name: "Hyundai HB20", price: "200.000,00", image: hb20h },
    { name: "Honda City", price: "200.000,00", image: city },
    { name: "Nissan Micra", price: "200.000,00", image: micra },
    { name: "Citroen C3", price: "200.000,00", image: c3 },
    { name: "Hyundai i20", price: "200.000,00", image: i20 },
  ],
  "4x4": [
    { name: "Renault Duster", price: "200.000,00", image: duster },
    { name: "Hyundai Santa Fe", price: "200.000,00", image: santaFe },
    { name: "Honda Elevate", price: "200.000,00", image: elevate },
    { name: "Nissan Frontier", price: "200.000,00", image: frontier },
    { name: "Citroen C3", price: "200.000,00", image: c34 },
    { name: "Hyundai Creta", price: "200.000,00", image: creta },
  ],
};

const filteredCars = computed(() => {
  switch (tabs.value[activeTab.value]) {
    case "SUV":
      return cars.suv;
    case "SEDAN":
      return cars.sedan;
    case "HATCH":
      return cars.hatch;
    case "4 X 4":
      return cars["4x4"];
    default:
      return [];
  }
});
</script>

<style scoped>
.active {
  @apply text-gray dark:text-white border-b-2 transition duration-300;
}
</style>
