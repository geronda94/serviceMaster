<script setup>

import {provide,  ref } from "vue";
import Contacts from "./Contacts.vue";
import Logo from "./Logo.vue";
import Navigation from './Navigation.vue'

const navActive = ref(true)

const activatedNav = ref(false)
provide('activatedNav', activatedNav)



const windWidth = ref()

function updateScreenSize() {
            windWidth.value = window.innerWidth;
            console.log(windWidth.value)
        }

        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);

</script>

<template>
<header class="header">    
    
    
    <div v-if="windWidth > 980" class="header__border">
        <Navigation class="header__nav header__el"/>
        <Logo class="header__log header__el"/>
        <Contacts class="header__contacts header__el"/>
    </div>
    <div class="header__border" v-else>
        <Logo class="header__log header__el  logo__el"/>
        <div class="mob__nav">
            <Navigation class="header__nav header__el"/>
            <Contacts class="header__contacts header__el"/>
        </div>
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

.header__el{
    min-width: 30%;
}
.mob__nav{
    display: flex;
}


@media(max-width:980px){
    .header__border{
        flex-direction: column;
        gap: 20px;
    }

    .header__el{
        max-width: 80%;
        min-width: 10%;
    }
    .logo__el{
        width: 100%;
    }
    .mob__nav {
        width: 100%;
        order: 2; /* Навигация будет последней */
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }

    .header__log {
        order: 1; /* Логотип будет вторым */
    }


}
</style>