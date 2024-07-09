<script setup>

</script>
<template>
    <div class="footer__wrap">
        <p>Master Servis</p>
        <p>2024</p>
    </div>
</template>

<style scoped>
    .footer__wrap{
        width: 100%;
        height: 50px;
        background: var(--dark);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
    }

    .footer__wrap p{
        font-family: 'Disp';
        font-size: 13pt;
        font-weight: 500;
        color: var(--light);
        letter-spacing: 2px;
        text-shadow: 0 0 10px var(--text-shadow), 
                    0 0 10px var(--text-shadow), 
                    0 0 10px var(--text-shadow);
    }
</style>