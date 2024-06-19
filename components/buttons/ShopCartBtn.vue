<template>
  <div>
    <div class="bg-beige text-white dark:bg-beige dark:text-light_black fixed z-30 px-3 py-2 rounded-full transition duration-200 bottom-10 right-10 cursor-pointer text-2xl dark:hover:bg-transparent_gray dark:hover:text-light_black hover:bg-transparent_gray hover:text-white" 
    @click="showShopCart = !showShopCart">
      <Icon name="heroicons:shopping-cart-20-solid" class="bg-transparent dark:bg-transparent" />
      <span 
      v-if="storeShop.shopCart.length > 0" 
      class="bg-red-500 dark:bg-red-500 dark:text-black absolute -top-1 -right-1 rounded-full w-5 h-5 flex items-center justify-center text-sm font-medium text-white">
        {{ storeShop.shopCart.length }}
      </span>
    </div>
  </div>
  <transition name="fade">
    <div v-if="showShopCart" class="flex flex-col justify-center fixed z-30 bottom-24 xl:right-24 lg:right-24 md:right-24 sm:right-20 p-5 w-auto bg-beige text-light_black dark:bg-beige dark:text-light_black rounded">
      <div
        class="dark:bg-transparent bg-transparent max-h-96 mb-4 overflow-auto"
      >
        <template v-for="(item, index) in storeShop.shopCart" :key="index">
          <div class="flex gap-x-6 mb-3 p-3 rounded bg-white dark:bg-white">
            <img :src="item.image" :alt="item.name" class="w-24" />
            <div class="flex flex-col dark:bg-white">
              <p class="font-bold tracking-wide dark:bg-white">{{ item.name }}</p>
              <p class="font-bold dark:bg-white">
                <span class="text-beige dark:bg-white">R$</span>
                {{ item.price }}
              </p>
            </div>
            <div class="ml-auto cursor-pointer mt-auto text-beige text-xl dark:bg-transparent">
              <Icon
                name="heroicons:trash-16-solid"
                class="icon-bg cursor-pointer dark:bg-transparent"
                @click="storeShop.deleteToCart(item)"
              />
            </div>
          </div>
        </template>
      </div>
      <button 
      class="tracking-wider transition duration-200 mt-1 hover:bg-white hover:text-light_black dark:hover:bg-white dark:hover:text-light_black text-xs font-bold border-2 py-2 border-light_black dark:border-light_black bg-transparent dark:bg-transparent px-5 w-full text-light_black dark:text-light_black" @click="handleContact">
        SOLICITAR CONTATO
      </button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useShopCartStore } from "~/stores/ShopCart";
import { useNotificationStore } from "~/stores/Notification";

const storeShop = useShopCartStore();
const storeNotification = useNotificationStore();
const showShopCart = ref<boolean>(false);

const handleContact = () => {
  storeNotification.showNotification(
    "Para solicitar contato, preencha o formulário.",
    "info",
  );
  const contactSection = document.getElementById("fale-conosco");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
