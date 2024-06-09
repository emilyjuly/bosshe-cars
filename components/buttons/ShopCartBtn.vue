<template>
    <div>
        <div class="hover-card btn-icon" @click="showShopCart = !showShopCart">
            <Icon name="heroicons:shopping-cart-20-solid" class="icon-bg" />
            <span v-if="storeShop.shopCart.length > 0" class="cart-badge">
                {{ storeShop.shopCart.length }}
            </span>
        </div>
    </div>
    <transition name="fade">
        <div v-if="showShopCart" class="cart-container">
            <div class="dark:bg-transparent bg-transparent max-h-96 mb-4 overflow-auto">
                <template v-for="(item, index) in storeShop.shopCart" :key="index">
                    <div class="cart-item">
                        <img :src="item.image" :alt="item.name" class="item-img" />
                        <div class="item-info">
                            <p class="item-name">{{ item.name }}</p>
                            <p class="item-price">
                                <span class="price-currency">R$</span>
                                {{ item.price }}
                            </p>
                        </div>
                        <div class="delete-icon">
                            <Icon name="heroicons:trash-16-solid" class="icon-bg cursor-pointer"
                                @click="storeShop.deleteToCart(item)" />
                        </div>
                    </div>
                </template>
            </div>
            <button class="contact-btn" @click="handleContact">
                SOLICITAR CONTATO
            </button>
        </div>
    </transition>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useShopCartStore } from '~/stores/ShopCart'
import { useNotificationStore } from '~/stores/Notification'

const storeShop = useShopCartStore()
const storeNotification = useNotificationStore()
const showShopCart = ref<boolean>(false)

const handleContact = () => {
    storeNotification.showNotification('Para solicitar contato, preencha o formulário.', 'info')
    const contactSection = document.getElementById('fale-conosco')
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<style scoped>
.hover-card {
    @apply fixed z-30 px-3 py-2 rounded-full bg-beige text-white text-2xl dark:bg-beige dark:text-light_black cursor-pointer transition duration-200;
}

.hover-card:hover {
    @apply dark:hover:bg-transparent_gray dark:hover:text-light_black hover:bg-transparent_gray hover:text-white;
}

.icon-bg {
    @apply bg-transparent dark:bg-transparent;
}

.btn-icon {
    @apply fixed z-30 bottom-10 right-10 px-3 py-2 rounded-full cursor-pointer text-2xl;
}

.cart-badge {
    @apply bg-red-500 dark:bg-red-500 dark:text-black absolute -top-1 -right-1 rounded-full w-5 h-5 flex items-center justify-center text-sm font-medium text-white;
}

.cart-container {
    @apply flex flex-col justify-center fixed z-30 bottom-24 xl:right-24 lg:right-24 md:right-24 sm:right-20 p-5 w-auto bg-beige text-light_black dark:bg-beige dark:text-light_black rounded;
}

.cart-item {
    @apply flex gap-x-6 mb-3 p-3 rounded bg-white dark:bg-white;
}

.item-img {
    @apply w-24;
}

.item-info {
    @apply flex flex-col dark:bg-white;
}

.item-name {
    @apply font-bold tracking-wide dark:bg-white;
}

.item-price {
    @apply font-bold dark:bg-white;
}

.price-currency {
    @apply text-beige dark:bg-white;
}

.delete-icon {
    @apply ml-auto cursor-pointer mt-auto text-beige text-xl dark:bg-transparent;
}

.contact-btn {
    @apply tracking-wider transition duration-200 mt-1 hover:bg-white hover:text-light_black dark:hover:bg-white dark:hover:text-light_black text-xs font-bold border-2 py-2 border-light_black dark:border-light_black bg-transparent dark:bg-transparent px-5 w-full text-light_black dark:text-light_black;
}

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
