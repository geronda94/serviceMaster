<script setup>



</script>
<template>
    <div class="wrapper__main section__wrapper">
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

            <img class="us__img" src="/img/worker.png" alt="">

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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ipsa consequuntur eum, assumenda ad et ab autem fugit voluptates! Officia maiores earum ad laborum aperiam quis alias vel mollitia quaerat, asperiores veritatis quos eos tempora corporis accusantium, aliquid odit vero velit fugiat sed similique accusamus sint. Rem voluptates, nihil mollitia assumenda nesciunt facilis soluta accusantium placeat natus distinctio ea non iusto, deleniti dolores? Doloribus cupiditate unde delectus eius. Deleniti impedit facilis, dolore assumenda optio incidunt cumque temporibus deserunt vel minus, neque ea et, consequatur dignissimos. Harum vel illum ipsa beatae perspiciatis autem nobis. Commodi impedit magni deleniti minima corrupti rerum harum, quos, placeat quasi et consectetur neque voluptate exercitationem hic excepturi! Eaque, ipsum. Tenetur ab modi perspiciatis deserunt eligendi odit blanditiis fugiat totam, reprehenderit laborum mollitia molestiae velit consequatur? Delectus consequatur perferendis, et quidem nesciunt doloribus earum maxime voluptate assumenda, iure neque deserunt ipsa distinctio, illo unde porro numquam architecto saepe quae beatae! Assumenda saepe illo a laudantium expedita dicta voluptatum sunt, perspiciatis earum veritatis voluptatibus doloremque aliquid quisquam enim natus, unde cum. Dolorum expedita laboriosam ut aperiam tenetur alias voluptates aut tempora. Neque, inventore repellat facere, aspernatur aliquid recusandae pariatur, accusamus veritatis reprehenderit aut obcaecati laboriosam eligendi corrupti? Soluta.
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
    width: 300px;
    height: 300px;
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

    font-size: 16pt;
    letter-spacing: 2px;
    text-align: center;
    font-weight: 500;
}

.long__description{
    margin: 0 auto;
    width: 80%;
    margin-bottom:50px;
    margin-top: 50px;
    font-size: 14pt;
}

</style>