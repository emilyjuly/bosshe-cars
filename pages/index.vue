<template>
    <div class="flex flex-col w-full">
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
         <div class="flex items-center justify-center">
             <NotificationCard :message="store.msg" :type="store.type" v-if="store.show" />
         </div>
    </div>
</template>

<script setup lang='ts'>
import HomeSection from '~/components/sections/HomeSection.vue'
import QuemSomosSection from '~/components/sections/QuemSomosSection.vue'
import CatalogoSection from '~/components/sections/CatalogoSection.vue'
import FaleConoscoSection from '~/components/sections/FaleConoscoSection.vue'
import NotificationCard from '~/components/cards/NotificationCard.vue'
import { useNotificationStore } from '~/stores/Notification'

const store = useNotificationStore()

onMounted(async () => {
    const colorMode = useColorMode()
    await colorMode.preference;
})
</script>

