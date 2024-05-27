<template>
    <div>
        <section class="h-screen" id="inicio">
            <HomeSection />
        </section>
        <section class="h-screen" id="quem-somos">
            <QuemSomosSection />
        </section>
        <section class="h-screen" id="catalogo">
        </section>
        <section class="h-screen" id="fale-conosco"></section>
    </div>
</template>

<script setup lang="ts">
import HomeSection from "../components/sections/HomeSection.vue";
import QuemSomosSection from "~/components/sections/QuemSomosSection.vue";


</script>

