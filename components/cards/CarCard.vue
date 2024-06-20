<template>
  <div class="flex-col">
    <div v-if="loading" class="loading-container">
      <Skeleton size="15rem"></Skeleton>
    </div>
    <img v-show="!loading" :src="image" :alt="name" @load="onLoad" />
    <div class="flex justify-between text-lg font-semibold">
      <div class="flex">
        <span class="mr-1 text-beige dark:text-beige">R$</span>
        <span class="text-light_black dark:text-white">{{ price }}</span>
      </div>
      <Icon
        v-if="showDeleteButton"
        name="heroicons:trash-16-solid"
        class="mt-auto cursor-pointer text-2xl text-black dark:bg-transparent dark:text-white"
        @click="storeCatalogo.deleteCar(props.category, name)"
      />
    </div>
    <p class="text-sm tracking-wide text-gray dark:text-medium_gray">
      {{ name }}
    </p>
    <button
      class="mt-1 w-full border-2 border-solid border-beige bg-transparent px-5 py-2 text-xs font-bold tracking-wider text-light_black transition duration-200 hover:bg-beige hover:text-light_black dark:border-beige dark:bg-transparent dark:text-white dark:hover:bg-beige dark:hover:text-light_black"
      @click="addToCart"
    >
      COMPRAR
    </button>
  </div>
</template>

<script setup lang="ts">
import { useShopCartStore } from "~/stores/ShopCart";
import { useNotificationStore } from "~/stores/Notification";
import { useCatalogoStore } from "~/stores/Catalogo";
import type { CarInfo } from "~/types/types";
import CatalogoSection from "../sections/CatalogoSection.vue";

const storeShop = useShopCartStore();
const storeNotification = useNotificationStore();
const storeCatalogo = useCatalogoStore();

const addToCart = () => {
  const carInfo: CarInfo = {
    image: props.image,
    price: props.price,
    name: props.name,
  };
  if (!storeShop.checkExistsCar(carInfo)) {
    storeShop.addToCart(carInfo);
    storeNotification.showNotification(
      "Um produto foi adicionado ao carrinho.",
      "info",
    );
  } else {
    storeNotification.showNotification(
      "Esse produto já existe no seu carrinho.",
      "info",
    );
  }
};

const loading = ref(true);

const onLoad = () => {
  loading.value = false;
};

const props = defineProps<{
  image: any;
  price: string;
  name: string;
  showDeleteButton: boolean;
  category: string;
}>();
</script>
