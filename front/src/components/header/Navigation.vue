<script setup>
import NavItem from "./NavItem.vue";
import { inject, ref } from "vue";

const activeItem = ref()
const activateItem =  (nm) => {
    activeItem.value = nm
}
const menuItems = ["О нас", "Цены", "Отзывы"]
</script>

<template>
    <nav>   
        <ul  class="navigation__menu">
            <li v-for="item of menuItems"
            :key="item">
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