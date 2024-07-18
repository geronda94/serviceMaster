<script setup>
import { provide, inject, ref, onMounted, watch } from "vue";
import Contacts from "./Contacts.vue";
import Logo from "./Logo.vue";
import Navigation from "./Navigation.vue";
import LangIcon from "./LangIcon.vue";

const windWidth = inject("windWidth");
const activatedNav = ref(false);
const showLogo = ref(true);
let prevScrollY = window.scrollY;

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > prevScrollY) {
    showLogo.value = false; // Скрываем логотип при прокрутке вниз
  } else if (currentScrollY < prevScrollY) {
    showLogo.value = true; // Показываем логотип при прокрутке вверх
  }
  prevScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

provide("activatedNav", activatedNav);
</script>

<template>
  <header class="header">
    <div v-if="windWidth > 980" class="header__border">
      <Navigation class="header__nav header__el" />
      <Logo class="header__log header__el" />
      <Contacts class="header__contacts header__el" />
    </div>

    <div v-else class="header__border">
      <Logo v-if="showLogo" class="header__log header__el logo__el" />
      <div class="mob__nav">
        <Navigation class="header__nav header__el" />
        <Contacts class="header__contacts header__el" />
      </div>
    </div>
  </header>
  <LangIcon />
</template>

<style>
.header {
  position: fixed;
  width: 100%;
  padding-bottom: 3px;
  border-radius: 20%;
  background: var(--dark);
  z-index: 1000;
}

.header__border {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 45px;
  border-bottom: 3px solid var(--dark);
  background: white;
}

.header__el {
  min-width: 30%;
}

.mob__nav {
  display: flex;
}

.logo__el {
  transition: opacity 0.3s ease-in-out; /* Плавность изменения прозрачности */
}

@media (max-width: 980px) {
  .header__border {
    flex-direction: column;
    gap: 15px;
  }
  .header__el {
    max-width: 80%;
    min-width: 10%;
  }
  .logo__el {
    width: 40%;
  }
  .mob__nav {
    width: 100%;
    order: 2;
    /* Навигация будет последней */
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  .header__log {
    order: 1;
    /* Логотип будет вторым */
  }
  .header__border {
    padding: 5px 20px;
    gap: 10px;
  }
}

@media (max-width: 660px) {
  .logo__el {
    width: 70%;
  }
  .mob__nav{
    flex-direction: column;
    width: 100%;
  }
  .header__el{
    max-width: 100%;
  }


  .contact__link {
    max-width: 100%;
    
  }
}

@media (max-width: 480px) {
  .nav__button {
    padding: 2px 6px;
    height: 28px;
  }
  .button__wrapper {
    height: 33px;
  }
  .button__name {
    font-size: 9pt !important;
  }
  .contact__link {
    font-style: 13pt !important;
  }
  .header__border {
    padding: 10px 5px;
  }
  .mob__nav {
    gap: 4px;
  }
  .logo__wrapper {
    padding: 10px;
  }
  .contacts {
    gap: 8px;
  }
  .navigation__menu {
    gap: 5px !important;
  }
}
</style>
