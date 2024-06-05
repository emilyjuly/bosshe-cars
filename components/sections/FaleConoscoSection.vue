<template>
    <div class="regular-container">
        <p class="subtitle px-3 text-center mt-20">Preencha seus dados, e entraremos em contato</p>
        <div class="flex flex-col px-5 gap-y-12 label mt-16">
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
                    class="error-text"
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
                    class="error-text"
                    v-show="formData.phone.error !== ''"
                > {{ formData.phone.error }} </p>
            </div>

            <div class="flex items-center">
                <input
                    id="simular"
                    type="checkbox"
                    v-model="formData.simular.value"
                    aria-label="Deseja simular um financiamento?"
                    class="checkbox-custom"/>
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
                        class="error-text"
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
                        placeholder="R$"/>
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

            <a
                v-if="storeShop.shopCart.length > 0"
                class="dark:text-white"
            >
                <Icon name="heroicons:information-circle-solid" />
                Você se interessou por um total de {{ storeShop.shopCart.length }} items. Para ver, abra seu carrinho!
            </a>

            <button
                class="tracking-wider send-btn mt-1 px-5 py-2 w-56 self-center"
                @click="validateForm"
            >
                <template v-if="loading">
                    <div class="loaderContainer">
                        <div class="particleContainer">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="particleContainer">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <span class="text-base font-bold dark:bg-transparent bg-transparent"> ENVIAR </span>
                </template>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type {FormData} from '~/types/types'
import { useNotificationStore } from '~/stores/Notification'
import { useShopCartStore } from '~/stores/ShopCart'

const errorMessage: string = 'Esse campo é obrigatório'
const loading = ref<boolean>(false)
const storeNotification = useNotificationStore()
const storeShop = useShopCartStore()

const formDataDefault: FormData = {
    fullname: {value: '', error: ''},
    phone: {value: '', error: ''},
    simular: {value: false, error: ''},
    cpf: {value: '', error: ''},
    valorEntrada: {value: '', error: ''},
    cnh: {value: false, error: ''},
}

const formData = ref<FormData>({...formDataDefault})

const check = (prop: keyof FormData) => {
    const field = formData.value[prop]
    if (typeof field.value === 'string' && field.value.length === 0) {
        field.error = errorMessage
        return false
    }
    field.error = ''
    return true
}

const validateForm = async () => {
    const simular: boolean = formData.value.simular.value
    let isValid: boolean = false

    simular
        ? isValid = check('fullname') && check('phone') && check('cpf')
        : isValid = check('fullname') && check('phone')


    if (!isValid) {
        storeNotification.showNotification('Por favor preencha todos os campos obrigatórios.', 'error')
    } else {
        try {
            loading.value = true
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullname: formData.value.fullname.value,
                    phone: formData.value.phone.value,
                    simular: formData.value.simular.value,
                    cpf: formData.value.cpf.value,
                    valorEntrada: formData.value.valorEntrada.value,
                    cnh: formData.value.cnh.value,
                }),
            });

            const result = await response.json()
            if (result.error) {
                storeNotification.showNotification('Ocorreu um erro ao enviar o formulário, tente novamente.', 'error')
                formData.value = { ...formDataDefault }
                loading.value = false
            } else {
                storeNotification.showNotification('Formulário enviado com sucesso!', 'success')
                formData.value = { ...formDataDefault }
                storeShop.shopCart = []
                loading.value = false
            }
        } catch (error) {
            storeNotification.showNotification('Ocorreu um erro ao enviar o formulário, tente novamente.', 'error')
            formData.value = { ...formDataDefault }
            loading.value = false
        }
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

.loaderContainer {
    display: flex;
    overflow: hidden;
    gap: 0.5em;
    background: transparent;
}

.particleContainer {
    display: flex;
    gap: 0.5em;
    animation: slide 2000ms linear infinite;
    background: transparent;
}

.particleContainer div {
    width: 1.5em;
    aspect-ratio: 1;
    background: white;
    transform-origin: left bottom;
    animation: squeeze 750ms ease-in-out infinite;
}

.particleContainer div:nth-child(2) {
    animation-delay: 50ms;
}

.particleContainer div:last-child {
    animation-delay: 100ms;
}

@keyframes squeeze {
    0% {
        transform: scale(1) translateY(0);
    }
    50% {
        transform: scale(0.75);
    }
    75% {
        transform: scale(1.05);
    }
    100% {
        transform: sclae(1);
    }
}

@keyframes slide {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(calc(-50% + 1.25em));
    }
}
</style>
