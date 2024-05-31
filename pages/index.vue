<template>
    <div class="flex flex-col">
        <section id="inicio">
            <HomeSection />
        </section>
        <section class="flex flex-col" id="quem-somos">
            <QuemSomosSection />
        </section>
          <section class="flex flex-col" id="catalogo">
             <CatalogoSection />
         </section>
         <section class="flex flex-col" id="fale-conosco">
             <FaleConoscoSection />
         </section>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import HomeSection from "~/components/sections/HomeSection.vue";
import QuemSomosSection from "~/components/sections/QuemSomosSection.vue";
import CatalogoSection from "~/components/sections/CatalogoSection.vue";
import FaleConoscoSection from "~/components/sections/FaleConoscoSection.vue";


</script>

