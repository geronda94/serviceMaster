<script setup>


const prices = [
    {name:'Диагностика без разбора', price:'30-40'},
    {name:'Устранение засора без разборки', price:'30-50'},
    {name:'Устранение засора с разборкой', price:'40-60'},
    {name:'Замена нагревательного элемента', price:'45-70'},
    {name:'Замена сливного насоса', price:'50-75'},
    {name:'Замена манжеты люка', price:'60-105'},
    {name:'Замена подшипников барабана', price:'90-200'},
    {name:'Ремонт электронного модуля', price:'60-180'},
    {name:'Замена приводного ремня', price:'40-60'},
    {name:'Замена замка', price:'40-60'},
    {name:'Замена клапана', price:'40-60'},
    {name:'Ремонт двигателя', price:'60-120'},
    {name:'Замена амортизаторов', price:'50-60'},
    {name:'Замена двери люка', price:'50-100'},
    {name:'Замена ручки люка', price:'40-70'},
    {name:'Замена прессостата', price:'50-80'},
    {name:'Замена датчика температуры', price:'30-60'},
    {name:'Замена крестовины бака', price:'150-250'},
    {name:'Замена корпуса стиральной машины', price:'50-100'},
    {name:'Ремонт/замена крестовины', price:'80-150'},
]

</script>

<template>
    <div id="price" class="wrapper__price section__wrapper">
        <div class="block__title title__light">
            Цены на наши услуги
        </div>
        <div class="price__wrapper">
            <div class="price__block">
                <div class="price__line" v-for="item in prices" :key="item.name">
                    <div class="price__name">{{ item.name }}</div>
                    <div class="price__value">{{ item.price }}  ₾</div>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped>
.wrapper__price {
    margin: 30px 0;
    border-top: 5px dashed var(--light-blue);
    position: relative;
    color: var(--dark-blue);
}

.title__light {
    color: var(--dark-blue);
}

.price__wrapper {
    margin-top: 50px;
    background-image: url('/img/baraban2.jpg');
    position: relative;
    display: flex;
    justify-content: center; /* Центрируем содержимое */
    padding: 20px;
}

.price__wrapper::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px); /* Значение размытия */
    z-index: 1; /* Псевдоэлемент за содержимым */
}

.price__block {
    background: rgba(255, 255, 255, 0.7);
    width: 550px;
    padding: 20px;
    position: relative;
    border-radius: 10px;
    outline: 2px solid var(--dark);
    z-index: 2; /* Содержимое поверх размытого фона */
}

.price__line {
    display: flex;
    justify-content: space-between;
    font-size: 18pt;
    margin: 10px;
    font-weight: 400;
    border-bottom: 1px solid var(--light-blue);
}
</style>
