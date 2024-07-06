<script setup>

</script>


<template>
    <div class="silver-border" >
        <div class="logo__wrapper ">
            <p class="logo__text">Master Servis</p>
        </div>
    </div>
</template>


<style scoped>
.silver-border{
    padding: 5px;
    max-width: 300px;
    background: var(--silver-gradient);
    border-radius: 8px;

}
.logo__wrapper{
    background: var(--dark);
    display: block;
    border-radius: 6px;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    position: relative; 
    padding:15px 10px;
}
.logo__text{
    width: 100%;
    text-align: center;
    font-family: 'Disp';
    font-size: 16pt;
    font-weight: 600;
    color: var(--light);
    letter-spacing: 2px;
    text-shadow: 0 0 10px var(--text-shadow), 
                 0 0 10px var(--text-shadow), 
                 0 0 10px var(--text-shadow);

    display: inline-block;
    animation: blink 2s infinite;
}
@keyframes blink {
            0%, 70%, 80% { opacity: 1; }
            71%, 79% { opacity: .8; }
            73%, 77% { opacity: .5; }
            74%, 76% { opacity: 0; }
        }




</style>