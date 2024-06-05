<template>
    <Icon
        name="heroicons:sun-16-solid"
        color="white"
        v-show="colorMode.preference === 'dark'"
        class="flex cursor-pointer text-2xl transition ease-in-out delay-150 hover:scale-125"
        @click="toggleTheme"
    />
    <Icon
        name="heroicons:moon-16-solid"
        color="light_black"
        v-show="colorMode.preference === 'light'"
        class="flex cursor-pointer text-2xl transition ease-in-out delay-150 hover:scale-125"
        @click="toggleTheme"
    />
</template>

<script setup>
const colorMode = useColorMode()

const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>