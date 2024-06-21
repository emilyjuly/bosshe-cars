<template>
  <div class="flex-col">
    <div v-if="loading" class="loading-container">
      <Skeleton size="16rem"></Skeleton>
    </div>
    <div v-show="!loading" class="flex h-60 w-80 items-center overflow-hidden">
      <img
        class="h-full w-full object-cover"
        :src="image"
        :alt="name"
        @load="onLoad"
      />
    </div>
    <div class="flex items-end justify-between">
      <div class="flex flex-col">
        <div class="flex text-lg font-semibold">
          <span class="mr-1 text-beige dark:text-beige">R$</span>
          <span class="text-light_black dark:text-white">{{ price }}</span>
        </div>
        <p class="text-sm tracking-wide text-gray dark:text-medium_gray">
          {{ name }}
        </p>
      </div>
      <Icon
        v-if="showDeleteButton"
        name="heroicons:trash"
        class="cursor-pointer text-2xl text-black dark:bg-transparent dark:text-white"
        @click="confirmDelete"
      />
    </div>
    <button
      v-if="!showDeleteButton"
      class="mt-1 w-full border-2 border-solid border-beige bg-transparent px-5 py-2 text-xs font-bold tracking-wider text-light_black transition duration-200 hover:bg-beige hover:text-light_black dark:border-beige dark:bg-transparent dark:text-white dark:hover:bg-beige dark:hover:text-light_black"
      @click="addToCart"
    >
      COMPRAR
    </button>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <div
          class="flex h-60 w-96 items-center overflow-hidden border-2 border-beige"
        >
          <img
            class="mb-4 h-full w-full object-cover"
            :src="image"
            :alt="name"
            @load="onLoad"
          />
        </div>

        <p class="bg-transparent text-lg dark:bg-transparent">
          Você tem certeza que deseja excluir o carro <br />
          <span
            class="bg-transparent font-bold dark:bg-transparent dark:text-beige"
            >{{ name }}?</span
          >
        </p>
        <div
          class="mt-10 flex w-full justify-between bg-transparent dark:bg-transparent"
        >
          <button
            @click="deleteCar"
            class="border-2 bg-transparent p-2 text-beige dark:bg-transparent"
            title="Confirmar"
          >
            <Icon
              class="bg-transparent text-3xl dark:bg-transparent"
              name="heroicons:check-16-solid"
            />
          </button>
          <button
            @click="cancelDelete"
            class="border-2 bg-transparent p-2 text-beige dark:bg-transparent"
            title="Cancelar"
          >
            <Icon
              class="bg-transparent text-3xl dark:bg-transparent"
              name="heroicons:x-mark-16-solid"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useShopCartStore } from "~/stores/ShopCart";
import { useNotificationStore } from "~/stores/Notification";
import { useCatalogoStore } from "~/stores/Catalogo";
import type { CarInfo } from "~/types/types";

const storeShop = useShopCartStore();
const storeNotification = useNotificationStore();
const storeCatalogo = useCatalogoStore();
const loading = ref<boolean>(true);
const showModal = ref<boolean>(false);

const addToCart = () => {
  const carInfo: CarInfo = {
    image: props.image,
    price: props.price,
    name: props.name,
  };
  if (!storeShop.checkExistsCar(carInfo)) {
    storeShop.addToCart(carInfo);
    storeNotification.showNotification(
      "Um produto foi adicionado ao carrinho.",
      "info",
    );
  } else {
    storeNotification.showNotification(
      "Esse produto já existe no seu carrinho.",
      "info",
    );
  }
};

const onLoad = () => {
  loading.value = false;
};

const confirmDelete = () => {
  showModal.value = true;
};

const deleteCar = async () => {
  await storeCatalogo.deleteCar(props.category, props.name);
  showModal.value = false;
};

const cancelDelete = () => {
  showModal.value = false;
  storeNotification.showNotification("O carro não foi excluído", "info");
};

const props = defineProps<{
  image: any;
  price: string;
  name: string;
  showDeleteButton: boolean;
  category: string;
}>();
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  color: black;
  padding: 40px;
  text-align: center;
}
</style>
