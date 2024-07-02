<script setup>


const props = defineProps({
    name:String,
    indicator:{
        required: false,
        type: Boolean
    }
})
</script>

<template> 
    <div :class="['button__wrapper', {'button-indicator':indicator}]">   
        <div class="nav__button">        
            <div class="button__name">{{name}}</div>
            <div :class="['button__indicator', {'button__on': indicator}]"></div>
        </div>
    </div>
</template>

<style scoped>
.button__wrapper{
    background: var(--silver-gradient);
    padding: 1.5px;
    border-radius: 4px;
    height: 42px;
    padding: 1.5px;
}
.button-indicator{
    padding: 2px;
    height: 43px;
}

.button__wrapper:hover{cursor: pointer; }
.nav__button{
    padding:5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
    border-radius: 1px;
    background: white;
    height: 32px;
}

.button__name{
    font-size: 13pt;
    color: var(--dark);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
}

.button__indicator{
    width: 15px;
    height: 2px;
    border: 1.5px solid var(--light);
    border-radius: 1px;
    background: var(--dark);
}


.button__on{
    background: linear-gradient(135deg, #3fff3f, #00b200); /* Зеленый градиент как фон */
    box-shadow: 0 0 10px rgba(63, 255, 63, 0.8), 0 0 20px rgba(63, 255, 63, 0.6); /* Зеленая тень */
    cursor: pointer; /* Курсор при наведении */

}

/* .button__indicator:hover {
    box-shadow: 0 0 20px rgba(63, 255, 63, 0.8), 0 0 40px rgba(63, 255, 63, 0.6); 
} */
</style>