<script setup>
import { inject, onMounted } from 'vue';


const lang = inject('lang')

const changeLang = () =>{
    if(lang.value === 'ru' || lang.value=== ''){
        lang.value = 'ge'
    }
    else {
        lang.value = 'ru'
    }
}

onMounted(changeLang)

</script>
<template>
    <div @click="changeLang" class="lang__container">
        <img class="flag__img" v-if="lang === 'ru'" src="/img/ru.svg" alt="">
        <img class="flag__img" v-else src="/img/ge.svg" alt="">
    </div>
</template>

<style scoped>
.lang__container{
    width: 60pt;
    height: 60pt;
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 10000;
    background: var(--light-blue2);
    padding: 3px;
    border-radius: 50%;
   
}
.lang__container:hover{
     cursor: pointer;
}

.flag__img{
    border-radius: 50%;    
    width: 100%;
    height: 100%;
}

@media(max-width:750px){
    .lang__container{
        width: 40pt;
        height: 40pt; 
    }
    
}
</style>
