<template>
  <transition name="toast">
    <div
      v-if="message"
      :class="[
        'toast',
        typeClass,
        'fixed bottom-0 z-30 flex flex-col items-center px-4 px-6 py-4 font-medium tracking-wide',
      ]"
    >
      <div
        class="flex w-auto items-center bg-transparent text-base dark:bg-transparent"
      >
        <Icon
          name="heroicons:bell-alert-16-solid"
          class="mr-2 bg-transparent dark:bg-transparent"
        />
        <p class="bg-transparent dark:bg-transparent">{{ message }}</p>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  message: string;
  type: string;
}>();
const typeClass = computed(() => {
  switch (props.type) {
    case "error":
      return "error";
    case "success":
      return "success";
    default:
      return "info";
  }
});
</script>

<style scoped>
.toast {
  opacity: 1;
  transition: opacity 0.5s;
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.5s;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
}

.success {
  background-color: #34d399; /* bg-green-600 */
  color: #000; /* dark:text-white */
  font-weight: 600;
}

.error {
  background-color: #ef4444; /* bg-red-500 */
  color: #fff; /* dark:text-white */
  font-weight: 600;
}

.info {
  background-color: #3b82f6; /* bg-blue-500 */
  color: #000; /* dark:text-white */
  font-weight: 600;
}

.dark .success {
  background-color: #34d399; /* dark:bg-green-600 */
}

.dark .error {
  background-color: #ef4444; /* dark:bg-red-500 */
}

.dark .info {
  background-color: #3b82f6; /* dark:bg-blue-500 */
}
</style>
