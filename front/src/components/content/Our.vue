<script setup>
import { inject,ref } from 'vue';

const lang = inject('lang')

const componentContent = {
    ru:{
        title:'Ремонт посудомоечных и стиральных машин',
        p1:'Работаем в Тбилиси и окрестностях.',
        p2:'Высокая квалификация.',
        p3:'Ремонтируем более 10 лет.',
        p4:'Точная диагностика и решение.',
        p5:'Приемлемые цены.',
        p6:'Быстро решаем задачи!',
        desc1:"Мастер по ремонту стиральных машин с опытом более 10 лет и 4000 успешных ремонтов оперативно выезжает на дом и эффективно чинит поломки любой сложности. Работаю в Тбилиси и окрестностях." 
    },
    ge:{
        title:'ჭურჭლისა და სარეცხი მანქანების რემონტი',
        p1:'ვმუშაობთ თბილისში და მის შემოგარენში.',
        p2:'მაღალი კვალიფიკაცია.',
        p3:'ვახორციელებთ რემონტს 10 წელზე მეტი ხნის განმავლობაში.',
        p4:'ზუსტი დიაგნოსტიკა და გადაჭრა.',
        p5:'მისაღები ფასები.',
        p6:'სწრაფად ვაგვარებთ ამოცანებს!',
        desc1:"10 წელზე მეტი გამოცდილების მქონე სარემონტო ოსტატი, რომელმაც წარმატებით შეასრულა 4000-ზე მეტი სარემონტო სამუშაო, სწრაფად მიდის ადგილზე და ეფექტურად ასწორებს ნებისმიერი სირთულის პრობლემებს. ვმუშაობ თბილისში და მის მიმდებარე ტერიტორიაზე."  
    }
}


</script>
<template>
    <div id="our" class="wrapper__main section__wrapper">
        <div class="block__title">
            <h1>{{componentContent[lang].title}}</h1>
        </div>


        <div class="description__wrapper">
            <div class="description__block">
                <div class="desc__item">
                    <p class="desc__right">{{componentContent[lang].p1}}</p>
                </div>
                <div class="desc__item">
                    <p class="desc__left">{{componentContent[lang].p2}}</p>
                </div>
                <div class="desc__item">
                    <p class="desc__right">{{componentContent[lang].p3}}</p>
                </div>
                
            </div>

            <img class="us__img" src="/img/worker.jpg" alt="">

            <div class="description__block">
                <div class="desc__item">
                    <p class="desc__left">{{componentContent[lang].p4}}</p>
                </div>
                <div class="desc__item">
                    <p class="desc__right">{{componentContent[lang].p5}}</p>
                </div>
                <div class="desc__item">
                    <p class="desc__left">{{componentContent[lang].p6}}</p>
                </div>
            </div>
        </div>

        <div class="long__description">
    <p>{{componentContent[lang].desc1}}</p>
    <p>{{componentContent[lang].desc2}}</p>
    <p>{{componentContent[lang].desc3}}</p>
    <p>{{componentContent[lang].desc4}}</p>
    <p>{{componentContent[lang].desc5}}</p>

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