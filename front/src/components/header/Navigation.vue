<script setup>
import NavItem from "./NavItem.vue";
import { inject, ref, computed } from "vue";

const activeItem = inject('activatedNav');
const lang = inject('lang');

const activateItem = (nm) => {
  activeItem.value = nm;
};

const activeNav = ref(false);

const menuContent = {
  ru: [
    { name: "О нас", id: "our" },
    { name: "Цены", id: "price" },
    { name: "Отзывы", id: "review" },
  ],
  ge: [
        { name: "ჩვენზე", id: "our" },
        { name: "ფასი", id: "price" },
        { name: "მიმოხილვა", id: "review" },
      ]
};

const menuItems = computed(() => menuContent[lang.value]);
</script>

<template>
  <nav>
    <ul class="navigation__menu">
      <li v-for="item of menuItems" :key="item.id">
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
