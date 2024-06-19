<template>
  <div class="flex-col">
    <img :src="image" :alt="name" class="mb-1" />
    <p class="text-lg font-semibold">
      <span class="mr-1 text-beige dark:text-beige">R$</span>
      <span class="text-light_black dark:text-white">{{ price }}</span>
    </p>
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
import type { CarInfo } from "~/types/types";

const storeShop = useShopCartStore();
const storeNotification = useNotificationStore();

const addToCart = () => {
  const carInfo: CarInfo = {
    image: props.image,
    price: props.price,
    name: props.name,
  };
  if (!storeShop.checkExistsCar(carInfo)) {
    storeShop.addToCart(carInfo);
  } else {
    storeNotification.showNotification(
      "Esse produto já existe no seu carrinho.",
      "info",
    );
  }
};

const props = defineProps<{
  image: any;
  price: string;
  name: string;
}>();
</script>
