<template>
    <div>
        <section class="h-screen" id="inicio">
            <div>
                <img
                    v-show="colorMode.preference === 'dark'"
                    class="absolute top-0 right-0 h-full object-cover w-3/4"
                    src="../assets/images/carro-pagina-inicial-dark.svg"
                    alt="Imagem de um carro"
                />
                <img
                    v-show="colorMode.preference === 'light'"
                    class="absolute top-0 right-0 h-full object-cover w-3/4"
                    src="../assets/images/carro-pagina-inicial-light.svg"
                    alt="Imagem de um carro"
                />
            </div>
            <div>
                <img
                    v-show="colorMode.preference === 'dark'"
                    class="absolute z-20"
                    style="top: 20rem; left: 13rem; background-color: transparent"
                    src="../assets/images/palavras-inicio-dark.png"
                    alt="Palavras sobre a imagem do carro"
                />
                <img
                    v-show="colorMode.preference === 'light'"
                    class="absolute z-20 bg-transparent"
                    style="top: 20rem; left: 13rem;"
                    src="../assets/images/palavras-inicio-light.png"
                    alt="Palavras sobre a imagem do carro"
                />
            </div>
        </section>
        <section class="h-screen" id="quem-somos">
            <p>Conteúdo da seção Quem Somos</p>
        </section>
        <section class="h-screen" id="catalogo">
            <p>Conteúdo da seção Catálogo</p>
        </section>
        <section class="h-screen" id="fale-conosco">
        </section>
    </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode();

</script>