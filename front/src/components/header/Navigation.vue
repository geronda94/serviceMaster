<script setup>
import NavItem from "./NavItem.vue";
import { inject,  ref } from "vue";

const activeItem = inject( 'activatedNav')
const activateItem = (nm) => {
  activeItem.value = nm;
};

const activeNav = ref(false)
const menuItems = [ {name:"О нас", id:"our"},
                     {name:'Цены', id:"price"}, 
                     {name:'Отзывы', id: "review"} ];





</script>

<template>
  <nav >
    <ul class="navigation__menu">
      <li v-for="item of menuItems" :key="item.name">
        <NavItem
          @click="activateItem(item.name)"
          :name="item.name"
          :indicator="activeItem === item.name"
          :idElement="item.id"
        />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navigation__menu {
  display: flex;
  gap: 10px;
  
}
</style>
