<template>
    <div class="h-auto w-full flex flex-col items-center">
        <p class="text-light_black dark:text-medium_gray font-medium text-lg mt-24">Preencha seus dados, e
            entraremos em contato</p>
        <div
            class="flex w-1/2 gap-y-12 flex-col text-light_black dark:text-medium_gray font-medium tracking-wide text-base mt-16">
            <div class="flex flex-col gap-2">
                <label for="fullname">* NOME COMPLETO</label>
                <InputText class="border-2 p-2 h-10 border-medium_gray rounded-none" id="fullname" v-model="fullname"
                    aria-describedby="fullname" />
            </div>

            <div class="flex flex-col gap-2">
                <label for="phone">* CONTATO</label>
                <InputMask class="border-2 p-2 h-10 border-medium_gray rounded-none" id="phone" v-model="phone"
                    aria-describedby="phone" mask="(XX) XXXX-XXXXX" placeholder="(XX) XXXX-XXXXX" />
            </div>

            <div class="flex items-center">
                <input type="checkbox" id="simular" v-model="simular" class="checkbox-custom" />
                <label for="simular" class="ml-2 tracking-wider"> Deseja realizar uma simulação de financiamento? </label>
            </div>

            <template v-if="simular">
                <div class="flex flex-col gap-2">
                    <label for="cpf">* CPF</label>
                    <InputMask class="border-2 p-2 h-10 border-medium_gray rounded-none" id="cpf" v-model="cpf"
                        aria-describedby="cpf" mask="000.000.000-00" placeholder="000.000.000-00" />
                </div>

                <div class="flex flex-col gap-2">
                    <label for="valorEntrada">VALOR DE ENTRADA</label>
                    <InputText class="border-2 p-2 h-10 border-medium_gray rounded-none" id="valor_entrada"
                        v-model="valorEntrada" aria-describedby="valorEntrada" placeholder="R$" />
                </div>

                <div class="flex items-center">
                    <input type="checkbox" id="cnh" v-model="cnh" class="checkbox-custom" />
                    <label for="cnh" class="ml-2 tracking-wider"> * Possui CNH? </label>
                </div>
            </template>

            <p>* Indica que o campo é obrigatório.</p>

            <button
                class="tracking-wider dark:hover:bg-gray hover:bg-gray hover:text-white transition duration-200 mt-1 text-base font-bold bg-transparent_gray dark:bg-transparent_gray px-5 py-2 w-56 text-light_black dark:text-white self-end">
                ENVIAR
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
const fullname = ref<string>('')
const phone = ref<string>('')
const simular = ref<boolean>(false)
const cpf = ref<string>('')
const valorEntrada = ref<number | null>(null)
const cnh = ref<boolean>(false)
</script>

<style scoped>
.checkbox-custom {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 1.5rem;
    width: 1.5rem;
    background-color: transparent;
    border: 2px solid #939393;
    display: flex;
    align-items: center;
    justify-content: center;
}

.checkbox-custom:checked {
    @apply dark:bg-white bg-beige border-white;
}

.checkbox-custom:hover {
    @apply cursor-pointer transition duration-300 border-beige dark:border-white;
}

.checkbox-custom::before {
    content: "";
    height: 0.75rem;
    width: 0.75rem;
    background-color: black;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 0, 80% 0, 35% 75%);
    display: none;
}

.checkbox-custom:checked::before {
    display: block;
}
</style>