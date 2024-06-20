<template>
  <div class="flex w-full flex-col">
    <div
      class="mt-20 flex h-auto w-full flex-col bg-white dark:bg-light_black sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20"
    >
      <p
        class="text-center text-2xl font-medium tracking-wide text-black dark:text-white"
      >
        Editar catálogo
      </p>
      <p class="mt-1 text-center text-black dark:text-light_gray">
        Preencha o formulário para adicionar um novo carro, ou clique no ícone
        de lixeira para excluir um carro
      </p>
      <CatalogoSection :show-title="false" />
    </div>
    <Footer />
    <div class="flex items-center justify-center">
      <NotificationCard
        :message="store.msg"
        :type="store.type"
        v-if="store.show"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import NotificationCard from "~/components/cards/NotificationCard.vue";
import { useNotificationStore } from "~/stores/Notification";
import CatalogoSection from "~/components/sections/CatalogoSection.vue";

const store = useNotificationStore();

onMounted(async () => {
  const colorMode = useColorMode();
  await colorMode.preference;
});
</script>
