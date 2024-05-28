<template>
  <div class="h-screen w-full flex flex-col justify-center items-center">
    <p
      class="text-light_black dark:text-white font-black tracking-wide text-4xl"
    >
      NOSSA COLEÇÃO DE CARROS
    </p>
    <p
      class="text-gray dark:text-medium_gray font-medium text-base w-1/3 text-center mt-2"
    >
      Explore e Descubra Nossa Exclusiva Coleção de Carros: Encontre o Veículo
      Perfeito para Cada Momento da Sua Vida!
    </p>

    <TabView class="w-full flex-col gap-64 text-ligth_black font-bold text-xl dark:text-white justify-between">
      <TabPanel v-for="tab in tabs" :key="tab" :header="tab">
        <p class="m-0">{{ tab }}</p>
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup lang="ts">
const tabs = ['SUV', 'SEDAN','HATCH', '4 X 4']
</script>
