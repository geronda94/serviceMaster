<script setup>
import { ref, inject, watch, onMounted } from 'vue';

const windWidth = inject('windWidth')
const reviews = [
    'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02NfQpVenyAchNLS7KhqeBFyjES3neCCGVTpLEFKNxXEHppcLzgDFTc5az1Rb2jJPvl%26id%3D100009310597158&show_text=true',
    'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02wzKZKSCzYL3C1GnqsvEJtwBUPa1FCQ7TWe7imCzLy8TDgjWw7VFcBU1MazQ5VZUWl%26id%3D100029008895474&show_text=true',
    'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Ftwicemax%2Fposts%2Fpfbid0exJEZ8271no685w8A577nPGp6HSarSMrd78MFYcyCErngZpNZuAxxr32zXPvb7vJl&show_text=true',
    'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fgabrieli.bichiashvili%2Fposts%2Fpfbid0nDrCBRJAX7bGoX6ifMawbCacs3csdaK2BvJ8Ves7J13bReBmay6yorJUGb4rJv3Sl&show_text=true',
    'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fsofo.saldadze%2Fposts%2Fpfbid0527Z5spsmy9ePaKhidQURtNd1vHX7qt4Rnkff7CqMaVTyfzMPC9ttu7957qbaZCfl&show_text=true'

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
        <div class="review__wrapper">
            <iframe v-for="rev in reviews" :key="rev" 
                :src="rev+'%width='+actualWidth" 
                class="review__frame"
                style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
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
