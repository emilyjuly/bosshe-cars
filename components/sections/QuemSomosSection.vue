<template>
  <div class="w-full flex-col bg-white dark:bg-light_black">
    <div
      class="flex h-auto w-full justify-between p-10 sm:h-72 md:h-72 lg:h-72 xl:h-72"
    >
      <img
        class="w-10 sm:w-16 md:w-16 lg:w-20 xl:w-20"
        v-for="marca in marcas"
        :src="marca.src"
        :alt="`Símbolo da ${marca.name}`"
        :key="marca.name"
      />
    </div>
    <div
      class="flex flex-col justify-center sm:flex-row sm:justify-between md:flex-row md:justify-between lg:flex-row lg:justify-between xl:flex-row xl:justify-between"
    >
      <div class="flex flex-col sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div
          class="mb-5 flex items-center justify-between px-4 text-light_black dark:text-white sm:px-16 md:px-16 lg:px-16 xl:px-24"
        >
          <div class="flex flex-col items-center justify-center">
            <p
              class="text-xl font-bold tracking-wide sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            >
              20+
            </p>
            <p
              class="text-base font-semibold sm:text-xs md:text-xs lg:text-sm xl:text-lg"
            >
              MODELOS
            </p>
          </div>

          <div
            class="h-10 w-0.5 -translate-x-2/4 bg-light_black dark:bg-light_gray"
          ></div>

          <div class="flex flex-col items-center justify-center">
            <p
              class="text-xl font-bold tracking-wide sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            >
              10000+
            </p>
            <p
              class="text-base font-semibold sm:text-xs md:text-xs lg:text-sm xl:text-lg"
            >
              CLIENTES
            </p>
          </div>

          <div
            class="h-10 w-0.5 -translate-x-2/4 bg-light_black dark:bg-light_gray"
          ></div>

          <div class="flex flex-col items-center justify-center">
            <p
              class="text-xl font-bold tracking-wide sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            >
              10+
            </p>
            <p
              class="text-base font-semibold sm:text-xs md:text-xs lg:text-sm xl:text-lg"
            >
              MARCAS
            </p>
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-center sm:items-start sm:justify-start sm:pl-12 sm:pt-12 md:items-start md:justify-start md:pl-12 md:pt-12 lg:items-start lg:justify-start lg:pl-12 lg:pt-12 xl:items-start xl:justify-start xl:pl-24 xl:pt-12"
        >
          <p
            class="w-72 text-center text-xl leading-10 text-light_black dark:text-light_gray sm:w-72 sm:text-left sm:text-sm md:w-80 md:text-left md:text-lg lg:w-80 lg:text-left lg:text-lg xl:text-left"
          >
            Há duas décadas, somos referência em Vale Verde. Oferecemos os
            melhores carros importados e os últimos modelos, incluindo
            elétricos. Compre veículos novos e semi novos com financiamento
            facilitado. Descubra a qualidade que você merece.
          </p>
          <span
            class="mt-10 flex items-center gap-2 text-base font-semibold text-light_black dark:text-white"
          >
            <Icon name="heroicons:map-pin-16-solid" />
            <span>Vila Verde, Avenida das Estrelas, 23.</span>
          </span>
        </div>
      </div>
      <div
        class="bg-white dark:bg-light_black sm:w-1/2 sm:dark:bg-white md:w-1/2 md:dark:bg-white lg:w-1/2 lg:dark:bg-white xl:dark:bg-white"
      >
        <img
          class="bg-transparent dark:bg-transparent sm:relative sm:right-24 sm:top-10 md:relative md:right-24 md:top-20 lg:relative lg:right-40 lg:top-20 xl:relative xl:right-80 xl:top-20"
          src="../../assets/images/renault-kwid.svg"
          alt="Renault Kwid Elétrico"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import hondaImage from "../assets/images/honda.svg";
import renaultImage from "../assets/images/renault.svg";
import hyundaiImage from "../assets/images/hyundai.svg";
import nissanImage from "../assets/images/nissan.svg";
import citroenImage from "../assets/images/citroen.svg";

const marcas = [
  { name: "Honda", src: hondaImage },
  { name: "Renault", src: renaultImage },
  { name: "Hyundai", src: hyundaiImage },
  { name: "Nissan", src: nissanImage },
  { name: "Citroen", src: citroenImage },
];
</script>
