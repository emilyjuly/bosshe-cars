<template>
  <div
    class="flex h-auto w-full flex-col items-center sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20"
  >
    <p
      class="text-xl font-bold tracking-wide text-light_black dark:text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
    >
      NOSSA COLEÇÃO DE CARROS
    </p>
    <p class="mt-2 text-center text-sm text-light_black dark:text-white">
      Explore e Descubra Nossa Exclusiva Coleção de Carros!
    </p>
    <TabView
      class="tabview-custom mt-5 flex flex-col items-center justify-center"
      v-model:activeIndex="activeTab"
    >
      <TabPanel v-for="(tab, index) in tabs" :key="index">
        <template #header>
          <span
            :class="{ active: activeTab === index }"
            class="mx-5 mb-10 flex text-lg font-bold text-medium_gray transition duration-300 dark:text-medium_gray sm:mx-10 md:mx-16 lg:mx-24 xl:mx-24"
          >
            {{ tab }}
          </span>
        </template>
        <div
          class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 md:gap-x-12 lg:grid-cols-3 lg:gap-x-24 xl:grid-cols-3 xl:gap-x-24"
        >
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
import ShopCartBtn from "~/components/buttons/ShopCartBtn.vue";
import axios from "axios";
import type { CarCategories } from "~/types/types";

const tabs = ref(["SUV", "SEDAN", "HATCH", "4 X 4"]);
const activeTab = ref(0);
const store = useShopCartStore();

const cars = ref<CarCategories>({ suv: [], sedan: [], hatch: [], "4x4": [] });

async function fetchData(): Promise<void> {
  try {
    const response = await axios.get(
      "https://gist.githubusercontent.com/emilyjuly/70a7511f112fb070d31015e00fad1f6e/raw/5260ec0fbc4078d586df14f99f4fa8fe28c88bfa/catalogo.json",
    );
    cars.value = response.data;
  } catch (error) {
    console.error("Erro ao carregar catálogo de carros:", error);
  }
}

fetchData();

const filteredCars = computed(() => {
  switch (tabs.value[activeTab.value]) {
    case "SUV":
      return cars.value.suv;
    case "SEDAN":
      return cars.value.sedan;
    case "HATCH":
      return cars.value.hatch;
    case "4 X 4":
      return cars.value["4x4"];
    default:
      return [];
  }
});
</script>

<style scoped>
.active {
  border-bottom-width: 2px;
  font-weight: 500;
  color: black;
}

.dark .active {
  color: white;
}
</style>
