<script setup>



</script>
<template>
    <div id="our" class="wrapper__main section__wrapper">
        <div class="block__title">
            Ремонт посудомоечных и стиральных машин
        </div>


        <div class="description__wrapper">
            <div class="description__block">
                <div class="desc__item">
                    <p class="desc__right">Работаем в Тбилиси и окрестностях.</p>
                </div>
                <div class="desc__item">
                    <p class="desc__left">На рынке более 10 лет.</p>
                </div>
                <div class="desc__item">
                    <p class="desc__right">Высокая квалификация и качество обслуживания.</p>
                </div>
                
            </div>

            <img class="us__img" src="/img/worker.jpg" alt="">

            <div class="description__block">
                <div class="desc__item">
                    <p class="desc__left">Точная диагностика и эффективное решение.</p>
                </div>
                <div class="desc__item">
                    <p class="desc__right">Приемлемые цены.</p>
                </div>
                <div class="desc__item">
                    <p class="desc__left">Быстро и ответственно решаем задачи!</p>
                </div>
            </div>
        </div>

        <div class="long__description">
            Стиральная машина – часть нашей жизни

            Стабильная работа стиральной машины – ее главное преимущество, так как она рассчитана на ежедневное использование.

            Когда стиральная машина ломается, сегодня это настоящая проблема: из-за быстрого темпа жизни у людей нет времени и сил стирать одежду вручную, как это было 50 или 100 лет назад.

            К счастью для вас, в наше время из этой ситуации очень легко выйти.

            Не нужно изобретать стиральную машину, достаточно обратиться за помощью к мастеру, это дешевле, чем покупать новую стиральную машину.        
        </div>
                    
    </div>
</template>
<style scoped>
.wrapper__main {
    background: var(--background-gradient);
    color: white;
    padding-top: 140px;
}

.description__wrapper{
    display: flex;
    margin-top: 70px;
    margin-bottom: 50px;
    gap: 40px;
    justify-content: center
}



.us__img {
    width: 320px;
    height: 320px;
    border-radius: 50%;
}

.description__block{
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    
}


.description__block p {
    /* background-color: rgba(240, 240, 240, 0.2); */

    font-size: 17pt;
    letter-spacing: 2px;
    text-align: center;
    font-weight: 500;
    line-height: 18pt;
}

.long__description{
    margin: 0 auto;
    width: 80%;
    margin-bottom:50px;
    margin-top: 50px;
    font-size: 16pt;
    line-height: 18pt;
}

.desc__item{
    display: flex;
    justify-content: center;
}

.desc__left, .desc__right{
    border:1px solid white;
    display: block;
    padding: 12px 15px;
    border-radius: 10px;
    background: rgba(242, 242, 242, .1);
}

</style>