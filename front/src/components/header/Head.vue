<script setup>

import Contacts from "./Contacts.vue";
import Logo from "./Logo.vue";
import Navigation from './Navigation.vue'


</script>

<template>
<header class="header">    
    
    <div class="header__border">
        <Navigation/>
        <Logo/>
        <Contacts />
    </div>
    
</header>

    
</template>

<style scoped>
.header{
    position: fixed;
    width: 100%;
    padding-bottom:3px;
    border-radius: 30%;
    background: var(--light);
    z-index: 1000;
}
.header__border{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 45px;
    border-bottom: 3px solid var(--light);
    
    background:white;
    
}
</style>