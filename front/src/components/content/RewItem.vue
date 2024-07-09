<script setup>


const props = defineProps({
    aName: String,
    aLink:String,
    aAvatar:String,
    text: String,

})


</script>
<template>
    <div class="review__item">
        <div class="rew__head">
            <a :href="aLink" class="author__row" target="_blank">
                <div class="author__avatar">
                    <img class="author__img" :src="aAvatar" alt="">
                </div>
                <div class="author__name">
                    <span>{{ aName }}</span>
                </div>
            </a>
            <a  target="_blank" href="https://web.facebook.com/RomkaMaster/reviews">        
                <font-awesome-icon class="fb__link" :icon="['fab', 'facebook']" />
            </a>
        </div>
        <div class="rew__row">
            {{ text }}
        </div>

    </div>
</template>
<style scoped>
.rew__head{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.fb__link{
    font-size: 20pt;
    color: var(--fb-blue) !important;
}
.review__item{
    width: 95%;
    border: 1px solid #cacad4;
    border-radius: 10px;
    padding: 15px;
    margin:5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}
.author__row{
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    justify-content: flex-start;
    align-items: center;
}
.author__name:hover{
    color: var(--fb-blue)!important;
    transform: 0.2s;
}

.author__img{
    width: 35pt;
    height: 35pt;
    border-radius: 50%;
}

.author__name{
    font-weight: 600;
    font-size: 14pt;
    line-height: 15pt;
}



.rew__row{
    font-size: 15pt;
    line-height: 17pt;
    letter-spacing: .5px;
}

@media(max-width: 730px){
    
}


</style>