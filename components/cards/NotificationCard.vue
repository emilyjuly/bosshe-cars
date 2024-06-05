<template>
    <transition name="toast">
        <div v-if="message" :class="['toast', typeClass, 'notification']">
            <div class="flex w-auto items-center transparent">
                <Icon name="heroicons:bell-alert-16-solid" class="mr-2 transparent" />
                <p class="transparent">{{ message }}</p>
            </div>
        </div>
    </transition>
</template>

<script setup lang='ts'>
import { computed } from 'vue'

const props = defineProps<{
    message: string
    type: string
}>()
const typeClass = computed(() => {
    switch (props.type) {
        case 'error':
            return 'error'
        case 'success':
            return 'success'
        default:
            return 'info'
    }
})
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
    @apply tracking-wide font-medium px-6 py-4 fixed z-30 bottom-0 px-4 flex flex-col items-center;
}

.transparent {
    @apply dark:bg-transparent bg-transparent text-base;
}

.success {
    @apply bg-green-600 dark:bg-green-600 dark:text-white;
}

.error {
    @apply bg-red-500 dark:bg-red-500 dark:text-white;
}

.info {
    @apply bg-blue-500 dark:bg-blue-500 dark:text-white;
}
</style>
