<template>
  <div class="product-card">
    <img :src="image" :alt="name" class="product-image mb-1" />
    <p class="product-price">
      <span class="price-currency mr-1">R$</span>
      <span class="price-amount">{{ price }}</span>
    </p>
    <p class="product-name">{{ name }}</p>
    <button class="buy-button" @click="addToCart">COMPRAR</button>
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

<style scoped>
.product-card {
  @apply flex-col;
}
.product-image {
  @apply mb-1;
}
.product-price {
  @apply font-semibold text-lg;
}
.price-currency {
  @apply text-beige dark:text-beige;
}
.price-amount {
  @apply text-light_black dark:text-white;
}
.product-name {
  @apply text-sm text-gray dark:text-medium_gray tracking-wide;
}
.buy-button {
  @apply tracking-wider transition duration-200 mt-1 hover:bg-beige hover:text-light_black dark:hover:bg-beige dark:hover:text-light_black text-xs font-bold border-solid border-2 py-2 border-beige dark:border-beige bg-transparent dark:bg-transparent px-5 w-full text-light_black dark:text-white;
}
</style>
