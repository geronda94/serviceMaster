<script setup>
import { ref, inject, watch, onMounted } from 'vue';
import RewItem from './RewItem.vue';


const windWidth = inject('windWidth')
const reviews = [
    {
        text: 'Приносим свою огромную благодарность Роману-мастеру своего дела!🙏🙏🙏 Работа сделана быстро и качественно!💪💪💪 Очень рекомендуем!🔥🔥🔥 И,в дальнейшем будем еще обращаться! 🙌🙌🙌',
        authorLink: 'https://web.facebook.com/profile.php?id=100009310597158',
        authorName: 'Ирма Циблиашвили',
        avatarLink: 'https://scontent.fotp7-2.fna.fbcdn.net/v/t39.30808-1/419104660_3674376186216032_7406444293575326846_n.jpg?stp=c0.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGCRWQf3-Wb8dpXiu64P810hInGWiJpCxKEicZaImkLEtrRCh_oSEBc34iFgADAYKxIM1izyvwAb7G5wZGUl1mP&_nc_ohc=Xsyya-xp140Q7kNvgEyBI7v&_nc_ht=scontent.fotp7-2.fna&oh=00_AYC4kBeztL0kjWoTum5Wy8RoI8lNJRxZtzUm3JtUzq0t6Q&oe=6692E152'
    },
    {
        text: 'Спасибо большое мастеру Роме .Очень довольна его работой по ремонту стиралки.',
        authorLink: 'https://web.facebook.com/profile.php?id=100034339729239',
        authorName: 'Галина Арутюновп',
        avatarLink: 'https://scontent.fotp7-2.fna.fbcdn.net/v/t1.6435-1/84948566_208061930348463_6600642127179284480_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=109&ccb=1-7&_nc_sid=e4545e&_nc_eui2=AeE5DgaXuDrn1yKO3u26M8QZhfTwS3Mwd5GF9PBLczB3kQ-Vk1WTQW0tLsEZGqpv8NzUwHL7f1pdwITWBtLzDazX&_nc_ohc=gxcnIDuTfX8Q7kNvgHKa9QV&_nc_ht=scontent.fotp7-2.fna&oh=00_AYBHsj1j9aQjFcJ17NLuRoUZGMkehbiCYzryy8_1bepkSg&oe=66B46E07'
    },
    {
        text: 'დიდი მადლობა საუკეთესო ხელოსანია',
        authorLink: 'https://web.facebook.com/profile.php?id=100029008895474',
        authorName: 'მარინა რობაქიძე',
        avatarLink: 'https://scontent.fotp7-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeGBNRvdWXQQzn2u-iKbi8YGso2H55p0AlGyjYfnmnQCUWHIWqFtMviVp384gwm-TRXCk_f7VpWxSYhmS5X4CFfg&_nc_ohc=-dp4r5TMT70Q7kNvgHmtxYc&_nc_ht=scontent.fotp7-2.fna&oh=00_AYDLam33iiUXSf-wf7qBkvtq6fy_Gu4mPhDbWKEQ6RCS0A&oe=66B46BF8'
    },
    {
        text: 'მადლობა ოპერატიულობისთვის და კეთილსინდისიერად შესრულებული სამუშაოსთვის, ხელოსან რომას! უდიდესი რეკომენდაცია.',
        authorLink: 'https://web.facebook.com/meri.tsiklauri.3',
        authorName: 'Meri Tsiklauri',
        avatarLink: 'https://scontent.fotp7-2.fna.fbcdn.net/v/t39.30808-1/292215530_1350991852091577_3171956272868783719_n.jpg?stp=cp6_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHUE68J0zcO8_qnylkKB_i98xnUUfrBPo7zGdRR-sE-jtopFdviQ3k42qMxXc3fujtNdpVmppPDVYOk33ONPut7&_nc_ohc=pYPHOq_adO8Q7kNvgHipywA&_nc_ht=scontent.fotp7-2.fna&oh=00_AYCGfoScPiBc-FJkI1_pZ1V0q-GAzPRDYYzse6Lej_-6Mw&oe=6692E83C'    
    },
    {
        text: 'კარგი ხელოსანია. კმაყოფილი ვარ.',
        authorLink: 'https://web.facebook.com/profile.php?id=100009126287079',
        authorName: 'თალიკო წიკლაური',
        avatarLink: 'https://scontent.fotp7-2.fna.fbcdn.net/v/t31.18172-1/12792343_1563251053989089_6325800445934608770_o.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=e4545e&_nc_eui2=AeFVlyNIaYI3JhF_byL62ITczTBFfb_XPWnNMEV9v9c9aXRIibR5T7cir04gQZ80qDT0JnKQR4cmfTYU8VV8HQ1h&_nc_ohc=ghNVuQW0kS8Q7kNvgHlRaDQ&_nc_ht=scontent.fotp7-2.fna&oh=00_AYAtghA384N7htxpmB9mtQHZBMafecWG2YGEnY4HjFIgPg&oe=66B4692B'
    },
    {
        text: 'Спасибо Роме за быструю починку посудомоечной машины. Приехал вовремя, качественносделал работу.',
        authorLink: 'https://web.facebook.com/twicemax',
        authorName: 'Макс Ат',
        avatarLink: 'https://scontent.fotp7-2.fna.fbcdn.net/v/t1.18169-1/20258367_1963278640627770_6649938368070628464_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=e4545e&_nc_eui2=AeHs5QZtcev39BV6SRxW_9Y5aPWKoMIpNcdo9Yqgwik1xxtPsBWYpCu1LaWhKgQ4HSvR5aeEYexZGgTroNa3WWQA&_nc_ohc=F-BapX8fxi0Q7kNvgG8hEU4&_nc_ht=scontent.fotp7-2.fna&oh=00_AYCyyKnc_0CxBICnjCfZErNtDlcCaBXESXPnz0FoxUP1HQ&oe=66B47404'
        },
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
            <RewItem  v-for="item in reviews" :key="item.text" 
                :aName="item.authorName"
                :aLink="item.authorLink"
                :aAvatar="item.avatarLink"
                :text="item.text"
            />
        </div>
    </div>
</template>

<style scoped>
.review__wrapper{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    margin: 0 auto;
    gap: 30px;
    
}

.block__title{
    margin-bottom: 30px;
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

@media(max-width: 730px){
    .review__wrapper{
        width: 90%;
        gap: 5px;
    }
}
</style>
