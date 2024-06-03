<template>
    <div>
        <div
            class="dark:hover:bg-white hover:bg-transparent_gray hover:text-white transition duration-200 bottom-10 right-10 cursor-pointer fixed z-30 px-3 py-2 rounded-full dark:bg-beige bg-beige dark:text-light_black text-white text-2xl"
            @click="showShopCart = true"
        >
            <Icon
                name="heroicons:shopping-cart-20-solid"
                class="dark:bg-transparent bg-transparent"
            />
            <span
                v-if="store.shopCart.length > 0"
                class="bg-red-500 dark:bg-red-500 dark:text-black absolute -top-1 -right-1 rounded-full w-5 h-5 flex items-center justify-center text-sm font-medium text-white"
            >
            {{ store.shopCart.length }}
        </span>
        </div>
    </div>
    <div v-if="showShopCart" class="fixed rounded z-30 bottom-10 right-28 h-auto p-5 w-auto bg-transparent_beige text-light_black">
        <template v-for="(item, index) in store.shopCart" :key="index">
            <div class="bg-white p-3 rounded flex gap-x-6 mb-3">
                <img :src="item.image" :alt="item.carName" class="w-24" />
                <div class="flex flex-col">
                    <p class="font-bold tracking-wide">{{item.carName}}</p>
                    <p class="font-bold">
                        <span class="text-beige">R$</span>
                        {{item.price}}
                    </p>
                </div>
                <div class="ml-auto cursor-pointer mt-auto text-beige text-xl">
                    <Icon name="heroicons:trash-16-solid" class="cursor-pointer" @click="store.deleteToCart(item)" />
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useShopCartStore } from "~/stores/ShopCart";

const store = useShopCartStore();
const showShopCart = ref<boolean>(false)
</script>