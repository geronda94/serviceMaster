<script setup>

import Logo from "./Logo.vue";
import Navigation from './Navigation.vue'

</script>

<template>
<header class="header">    
    <Navigation/>
    <Logo/>
</header>

    
</template>

<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>