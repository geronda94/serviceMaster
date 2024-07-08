<script setup>
import { ref, provide } from 'vue'
import Head from './components/header/Head.vue'
import Our from './components/content/Our.vue'
import Price from './components/content/Price.vue'
import Reviews from './components/content/Reviews.vue'


const windWidth = ref()

function updateScreenSize() {
            windWidth.value = window.innerWidth;
        }

        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);

provide('windWidth', windWidth)
</script>

<template>
<Head/>
<main>
    <Our/>
    <Price/>
    <Reviews/>
</main>

</template>

<style scoped>

</style>
