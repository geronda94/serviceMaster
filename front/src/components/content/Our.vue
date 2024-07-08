<script setup>



</script>
<template>
    <div id="our" class="wrapper__main section__wrapper">
        <div class="block__title">
            <h1>Ремонт посудомоечных и стиральных машин</h1>
        </div>


        <div class="description__wrapper">
            <div class="description__block">
                <div class="desc__item">
                    <p class="desc__right">Работаем в Тбилиси и окрестностях.</p>
                </div>
                <div class="desc__item">
                    <p class="desc__left">Высокая квалификация.</p>
                </div>
                <div class="desc__item">
                    <p class="desc__right">Ремонтируем более 10 лет.</p>
                </div>
                
            </div>

            <img class="us__img" src="/img/worker.jpg" alt="">

            <div class="description__block">
                <div class="desc__item">
                    <p class="desc__left">Точная диагностика и решение.</p>
                </div>
                <div class="desc__item">
                    <p class="desc__right">Приемлемые цены.</p>
                </div>
                <div class="desc__item">
                    <p class="desc__left">Быстро решаем задачи!</p>
                </div>
            </div>
        </div>

        <div class="long__description">
    <p>Я занимаюсь ремонтом стиральных машин в Тбилиси уже более 10 лет. Мой профессионализм поможет решить любую проблему с вашей стиральной машиной.</p>

    <p>Если ваша стиральная машина не сливает воду, не отжимает белье или издает посторонние шумы, не медлите – обращайтесь ко мне, пока дискомфорт не стал серьезной проблемой. Я понимаю, как важно, чтобы ваша помощница работала без перебоев, и готов быстро прийти на помощь.</p>

    <p>Диагностика занимает всего 15 минут и не требует разбора машины. В зависимости от сложности поломки, ремонт может занять от 30 минут до 2 часов. Я ценю ваше время и стремлюсь вернуть вашу машинку в строй как можно скорее.</p>

    <p>За время работы я успешно отремонтировал более 4 тысяч стиральных машин различных марок и моделей. Мой опыт позволяет мне быстро и качественно устранить любые неисправности.</p>

    <p>Не ждите, пока проблема станет серьёзной! Обратитесь к профессионалу уже сегодня и убедитесь в моем профессионализме и надёжности. Я гарантирую, что быстро верну вашу стиральную машину к жизни, чтобы вы могли снова наслаждаться чистотой и комфортом вашего дома.</p>
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
    gap: 25px;
    justify-content: center
}



.us__img {
    min-width: 25%;
    max-width: 30%;
    height: 100%;
    border-radius: 50%;
}

.description__block{
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 30px;
    
}

.long__description p{
    margin:15px 5px;
    font-size: 17pt;
}

.description__block p {
    /* background-color: rgba(240, 240, 240, 0.2); */

    font-size: 17pt;
    letter-spacing: 2px;
    text-align: center;
    line-height: 19pt;
    letter-spacing: 1px;
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


@media(max-width:940px){
    .description__wrapper{
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        height: 100%;
        gap: 40px;
        padding: 0 5px;
    }

    .description__block{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 100%;
        min-height: 70px;
        
    }

    .description__block p{
        font-size: 15pt;
        line-height: 16pt;
    }

    .desc__item{
        display: block;
        max-width: 30%;
        min-width: 20%;
        height: 100%;
    }

    .desc__item p{
        display: block;
        height: 100%;
    }

    .us__img{
        min-width: 70%;
        max-width: 80%;
    }
}

@media (max-width:720px) {
    .long__description{
        width: 90%;
    }
}

@media(max-width:610px){
    .description__block{
        flex-direction: column;
        min-height: auto;
        width: 100%;
    }
    .desc__item{
        max-width: none;
        font-size: 17pt;
        line-height: 17pt;
    }

    
}


</style>