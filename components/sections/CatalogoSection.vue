<template>
    <div class="flex h-auto w-full flex-col items-center sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20">
        <p class="text-xl font-bold tracking-wide text-light_black dark:text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            v-if="props.showTitle">
            NOSSA COLEÇÃO DE CARROS
        </p>
        <p class="mt-2 text-center text-sm text-light_black dark:text-white" v-if="props.showTitle">
            Explore e Descubra Nossa Exclusiva Coleção de Carros!
        </p>
        <div class="mt-6 flex flex-col gap-y-5 text-black dark:text-light_gray sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
            v-if="!props.showTitle">
            <span class="flex flex-col">
                <label for="carName">* NOME</label>
                <InputText id="carName" v-model="formData.name" aria-label="Nome do Carro"
                    class="h-10 rounded-none border-2 border-medium_gray p-2" />
            </span>

            <span class="flex flex-col">
                <label for="price">* PREÇO</label>
                <InputText id="price" v-model="formData.price" aria-label="Preço do Carro"
                    class="h-10 rounded-none border-2 border-medium_gray p-2" />
            </span>

            <span class="flex flex-col">
                <label for="category">* CATEGORIA</label>
                <select id="category" v-model="formData.category" class="h-10 rounded-none border-2 border-medium_gray p-2">
                    <option v-for="category in categories" :key="category.value" :value="category.value">
                        {{ category.name }}
                    </option>
                </select>
            </span>

            <div v-if="imagePreview" class="flex h-96 w-96 items-center overflow-hidden">
                <img class="max-h-full max-w-full object-cover" v-if="imagePreview" :src="imagePreview"
                    alt="Image Preview" />
            </div>

            <span class="flex flex-col">
                <label for="image">* IMAGEM</label>
                <input id="image" type="file" @change="handleFileUpload" />
            </span>

            <p class="self-end text-black dark:text-light_gray">
                * Indica que o campo é obrigatório.
            </p>

            <button
                class="mt-1 border-2 border-solid border-beige bg-transparent px-5 py-2 text-xs font-bold tracking-wider text-light_black transition duration-200 hover:bg-beige hover:text-light_black dark:border-beige dark:bg-transparent dark:text-white dark:hover:bg-beige dark:hover:text-light_black"
                @click="addNewCar">
                {{ loading ? "CARREGANDO..." : "ADICIONAR CARRO" }}
            </button>
        </div>
        <div class="mb-10 mt-10 flex w-80 justify-center" v-if="showTitle">
            <div class="relative flex w-full items-center">
                <input type="text" id="search" v-model="search" aria-label="Pesquisar" placeholder="Pesquise um carro"
                    class="flex h-10 w-full rounded-none border-2 border-medium_gray p-2 text-gray dark:text-light_gray sm:w-80 md:w-80 lg:w-80 xl:w-80" />
                <span class="absolute right-3 flex items-center pl-3">
                    <i class="pi pi-search text-medium_gray"></i>
                </span>
            </div>
        </div>
        <TabView class="tabview-custom mt-5 flex flex-col items-center justify-center" v-model:activeIndex="activeTab">
            <TabPanel v-for="(tab, index) in tabs" :key="index">
                <template #header>
                    <span :class="{ active: activeTab === index }"
                        class="mx-5 mb-10 flex text-lg font-bold text-medium_gray transition duration-300 dark:text-medium_gray sm:mx-10 md:mx-16 lg:mx-24 xl:mx-24">
                        {{ tab }}
                    </span>
                </template>
                <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 md:gap-x-12 lg:grid-cols-3 lg:gap-x-24 xl:grid-cols-3 xl:gap-x-24"
                    v-if="filteredCars.length">
                    <template v-for="car in filteredCars" :key="car.name">
                        <CarCard :image="car.image" :price="car.price" :name="car.name" :showDeleteButton="showDeleteButton"
                            :category="tab === '4 X 4' ? '4x4' : tab.toLowerCase()" />
                    </template>
                </div>
                <div class="mb-32 mt-32 flex w-full flex-col justify-center gap-y-10 text-center" v-else>
                    <Icon name="heroicons:exclamation-circle" class="flex self-center text-gray dark:text-light_gray"
                        size="64px" />
                    <p class="text-xl text-gray dark:text-light_gray">
                        Não achamos o modelo que você procura. <br />Tente buscar em outra
                        categoria, ou entre em contato conosco através do formulário abaixo.
                    </p>
                </div>
            </TabPanel>
        </TabView>
        <ShopCartBtn v-if="store.shopCart.length > 0" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import CarCard from "~/components/cards/CarCard.vue";
import { useShopCartStore } from "~/stores/ShopCart";
import { useNotificationStore } from "~/stores/Notification";
import ShopCartBtn from "~/components/buttons/ShopCartBtn.vue";
import { useCatalogoStore } from "~/stores/Catalogo";
import type { CarInfo, FormDataCar } from "~/types/types";

const props = defineProps<{
    showTitle: boolean;
}>();

const tabs = ref(["SUV", "SEDAN", "HATCH", "4 X 4"]);
const categories = [
    { name: "SUV", value: "suv" },
    { name: "4 X 4", value: "4x4" },
    { name: "HATCH", value: "hatch" },
    { name: "SEDAN", value: "sedan" },
];
const activeTab = ref(0);
const store = useShopCartStore();
const notificationStore = useNotificationStore();
const fileInput = ref<HTMLInputElement | null>(null);
const catalogoStore = useCatalogoStore();
const search = ref<string>("");
const loading = ref<boolean>(false);
const imagePreview = ref<string | null>(null);
const showDeleteButton = props.showTitle ? false : true;
const formDataDefault: FormDataCar = {
    name: "",
    price: "",
    image: "",
    category: "",
};

const formData = ref<FormDataCar>({ ...formDataDefault });
const addNewCar = async () => {
    if (
        formData.value.name === "" ||
        formData.value.price === "" ||
        formData.value.category === "" ||
        !fileInput.value
    ) {
        notificationStore.showNotification(
            "Preencha todos os campos obrigatórios.",
            "error",
        );
        return
    }

    loading.value = true

    if (fileInput.value && fileInput.value.files) {
        const file = fileInput.value.files[0];
        formData.value.image = await catalogoStore.uploadImage(
            file,
            formData.value.category,
        );
        await catalogoStore.addNewCar(formData.value.category, {
            name: formData.value.name,
            price: formData.value.price,
            image: formData.value.image,
        });
        formData.value = { ...formDataDefault };
        imagePreview.value = null;
        loading.value = false;
    }
};

async function handleFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    fileInput.value = input;
    if (fileInput.value.files) {
        imagePreview.value = await fileToBase64(fileInput.value.files[0]);
    }
}

function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result as string);
        };
        reader.onerror = (error) => reject(error);
    });
}

const filteredCars = computed(() => {
    const searchTerm = search.value.toLowerCase();
    let filteredCarsByCategory: CarInfo[] = [];

    switch (tabs.value[activeTab.value]) {
        case "SUV":
            filteredCarsByCategory = catalogoStore.cars.suv;
            break;
        case "SEDAN":
            filteredCarsByCategory = catalogoStore.cars.sedan;
            break;
        case "HATCH":
            filteredCarsByCategory = catalogoStore.cars.hatch;
            break;
        case "4 X 4":
            filteredCarsByCategory = catalogoStore.cars["4x4"];
            break;
        default:
            filteredCarsByCategory = [];
    }

    if (searchTerm) {
        return filteredCarsByCategory.filter((car) =>
            car.name.toLowerCase().includes(searchTerm),
        );
    }

    return filteredCarsByCategory;
});

onMounted(() => {
    catalogoStore.getCars();
});
</script>

<style scoped>
.active {
    border-bottom-width: 2px;
    font-weight: 600;
    color: black;
}

.dark .active {
    color: white;
}
</style>
