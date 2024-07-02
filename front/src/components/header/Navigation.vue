<script setup>
import NavItem from "./NavItem.vue";

</script>

<template>
    <nav class="navigation__menu">        
        <NavItem name='О нас' />
        <NavItem name='Цены' :indicator='true' />
        <NavItem name='Локация' :indicator='false' />
            
    </nav>
</template>



<style scoped>
.navigation__menu{
    display: flex;
    gap: 10px;
}
</style>