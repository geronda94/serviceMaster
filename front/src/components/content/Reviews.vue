<script setup>
import { ref, inject, watch, onMounted } from 'vue';

const windWidth = inject('windWidth')
const reviews = [
    {
        link: '',
    }
]

const actualWidth = ref()
const styleWidth = ref()

const refreshWidth = () => {
    if (windWidth.value >720){
    actualWidth.value = 700
    styleWidth.value = 500
  }
  else{
    actualWidth.value = Number(windWidth.value)-30
    if(actualWidth.value < 600){
        styleWidth.value =  actualWidth.value-120
    }
  }
}
watch(windWidth, refreshWidth);

onMounted(() => {
  refreshWidth();
});

</script>

<template>
    <div id="review" class="review wrapper__price section__wrapper section__light-wrapper">
        <div class="block__title title__light">
            <h1>Отзывы наших клиентов</h1>
        </div>
        <!-- <div class="review__wrapper">
            <iframe v-for="rev in reviews" :key="rev" 
                :src="rev+'%width='+actualWidth" 
                class="review__frame"
                data-lazy="true"
                style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div> -->

        <div class="review__wrapper">
            <div class="rev__item"></div>
        </div>
    </div>
</template>

<style scoped>
.review__wrapper{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 50px auto;
    gap: 0px;
}
.review__frame{
    width: 500px;
    min-height: 230px;
    max-height: 370px;
    border:none;
}

@media(max-width: 550px){
    .review__frame{
    width: 85%;
    }
}
</style>
