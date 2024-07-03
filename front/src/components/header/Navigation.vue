<script setup>
import NavItem from "./NavItem.vue";
import { inject, ref } from "vue";

const activeItem = ref()
const activateItem =  (nm) => {
    activeItem.value = nm
}
const menuItems = ["О нас", "Цены", "Локация"]
</script>

<template>
    <nav class="navigation__menu">   
        <ul v-for="item of menuItems"
            :key="item">
            <li>
                <NavItem 
            @click="activateItem(item)" 
            :name='item' 
            :indicator="activeItem ===item"/>
            </li>
        </ul>     
        
        
            
    </nav>
</template>



<style scoped>
.navigation__menu{
    display: flex;
    gap: 10px;
}
</style>