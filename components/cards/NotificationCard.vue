<template>
    <transition name="toast">
        <div v-if="type === 'error'" class="toast error notification">
            <div class="flex items-center transparent">
                <Icon name="heroicons:bell-alert-16-solid" class="mr-2 transparent" />
                <p class="transparent">{{ message }}</p>
            </div>
        </div>
        <div v-else class="toast success notification">
            <div class="flex items-center transparent">
                <Icon name="heroicons:bell-alert-16-solid" class="mr-2 transparent" />
                <p class="transparent">{{ message }}</p>
            </div>
        </div>
    </transition>
</template>

<script setup lang='ts'>
defineProps<{
    message: string
    type: string
}>()
</script>

<style scoped>
.toast {
    opacity: 1;
    transition: opacity 0.5s;
}

.toast-enter-active, .toast-leave-active {
    transition: opacity 0.5s;
}

.toast-enter-from, .toast-leave-to {
    opacity: 0;
}

.notification {
    @apply tracking-wide font-bold px-6 py-4 fixed z-30 bottom-4 flex flex-col items-center;
}

.transparent {
    @apply dark:bg-transparent bg-transparent;
}

.success {
    @apply bg-green-600 dark:bg-green-600 dark:text-white;
}

.error {
    @apply bg-red-500 dark:bg-red-500 dark:text-white;
}
</style>
