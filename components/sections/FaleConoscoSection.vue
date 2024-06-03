<template>
    <div class="regular-container">
        <p class="subtitle mt-24">Preencha seus dados, e entraremos em contato</p>
        <div class="flex w-1/2 gap-y-12 flex-col label mt-16">
            <div class="flex flex-col gap-2">
                <label for="fullname">* NOME COMPLETO</label>
                <InputText
                    id="fullname"
                    v-model="formData.fullname.value"
                    aria-label="Nome completo"
                    class="input"
                    @focusout="check('fullname')"
                />
                <p
                    class="text-sm text-red-600 dark:text-red-300"
                    v-show="formData.fullname.error !== ''"
                > {{ formData.fullname.error }} </p>
            </div>

            <div class="flex flex-col gap-2">
                <label for="phone">* CONTATO</label>
                <InputMask
                    id="phone"
                    v-model="formData.phone.value"
                    aria-label="Número de contato"
                    class="input"
                    mask="(99) 99999-9999"
                    placeholder="(99) 99999-9999"
                    @focusout="check('phone')"
                />
                <p
                    class="text-sm text-red-600 dark:text-red-300"
                    v-show="formData.phone.error !== ''"
                > {{ formData.phone.error }} </p>
            </div>

            <div class="flex items-center">
                <input
                    id="simular"
                    type="checkbox"
                    v-model="formData.simular.value"
                    aria-label="Deseja simular um financiamento?"
                    class="checkbox-custom" />
                <label
                    for="simular"
                    class="ml-2 tracking-wider"
                >
                    Deseja realizar uma simulação de financiamento?
                </label>
            </div>

            <template v-if="formData.simular.value">
                <div class="flex flex-col gap-2">
                    <label for="cpf">* CPF</label>
                    <InputMask
                        id="cpf"
                        v-model="formData.cpf.value"
                        aria-label="CPF"
                        class="input"
                        mask="999.999.999-99"
                        placeholder="999.999.999-99"
                        @focusout="check('cpf')"
                    />
                    <p
                        class="text-sm text-red-600 dark:text-red-300"
                        v-show="formData.cpf.error !== ''"
                    > {{ formData.cpf.error }} </p>
                </div>

                <div class="flex flex-col gap-2">
                    <label for="valorEntrada">VALOR DE ENTRADA</label>
                    <InputText
                        id="valor_entrada"
                        v-model="formData.valorEntrada.value"
                        aria-label="valorEntrada"
                        class="input"
                        placeholder="R$" />
                </div>

                <div class="flex items-center">
                    <input
                        id="cnh"
                        type="checkbox"
                        v-model="formData.cnh.value"
                        class="checkbox-custom"
                    />
                    <label
                        for="cnh"
                        class="ml-2 tracking-wider"
                    > Possui CNH? </label>
                </div>
            </template>

            <p>* Indica que o campo é obrigatório.</p>

            <button
                class="tracking-wider send-btn mt-1 text-base font-bold px-5 py-2 w-56 self-end"
                @click="validateForm"
            >
                ENVIAR
            </button>
        </div>
        <NotificationCard :message="notificationMessage" :type="notificationType" v-show="showNotification" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { FormData } from '~/types/types';
import NotificationCard from "~/components/cards/NotificationCard.vue";

const errorMessage: string = 'Esse campo é obrigatório';

const showNotification = ref<boolean>(false)
const notificationType = ref<string>('')
const notificationMessage = ref<string>('')

const formData = ref<FormData>({
    fullname: { value: '', error: '' },
    phone: { value: '', error: '' },
    simular: { value: false, error: '' },
    cpf: { value: '', error: '' },
    valorEntrada: { value: '', error: '' },
    cnh: { value: false, error: '' },
});

const check = (prop: keyof FormData) => {
    const field = formData.value[prop]
    if (typeof field.value === 'string' && field.value.length === 0) {
        field.error = errorMessage
        return false
    }
    field.error = ''
    return true
}

const validateForm = () => {
    const simular: boolean = formData.value.simular.value
    let isValid: boolean = false

    simular
        ? isValid = check('fullname') && check('phone') && check('cpf')
        : isValid = check('fullname') && check('phone');


    if (!isValid) {
        notificationMessage.value = 'Por favor preencha todos os campos obrigatórios.'
        notificationType.value = 'error'
        showNotification.value = true
        setTimeout(() => {
            showNotification.value = false
        }, 3000)
    } else {
        notificationMessage.value = 'Formulário enviado com sucesso!'
        notificationType.value = 'success'
        showNotification.value = true
        setTimeout(() => {
            showNotification.value = false
        }, 3000)
    }
};
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
