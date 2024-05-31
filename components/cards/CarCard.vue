<template>
    <div class="flex-col">
        <img :src="imageSrc" :alt="carName" class="mb-1"/>
        <p class="font-semibold text-lg">
            <span class="text-beige dark:text-beige mr-1">R$</span>
            <span class="text-light_black dark:text-white">{{ price }}</span>
        </p>
        <p class="text-sm text-gray dark:text-medium_gray tracking-wide">{{ carName }}</p>
        <button
            class="tracking-wider transition duration-200 mt-1 dark:hover:bg-beige dark:hover:text-light_black hover:bg-beige hover:text-light_black text-xs font-bold border-solid border-2 py-2 border-beige dark:border-beige bg-transparent dark:bg-transparent px-5 w-full text-light_black dark:text-white">
            COMPRAR
        </button>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    imageSrc: any;
    price: string;
    carName: string;
}>();
</script>