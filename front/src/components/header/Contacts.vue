<script setup>

</script>

<template>
    
        <ul class="contacts" >
            <li>
                <a href="https://wa.me/+995557256175" class="contact__link" target="_blank">
                    <font-awesome-icon :icon="['fab', 'whatsapp']" />
                </a>
            </li>
            <li>
                <a href="https://t.me/+995522222742" class="contact__link" target="_blank">
                    <font-awesome-icon :icon="['fab', 'telegram']" />
                </a>
            </li>
            <li>
                <a href="https://facebook.com/RomkaMaster" class="contact__link" target="_blank">
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                </a>
            </li>
            <li>
                <a href="tel:+995522222742" class="contact__link" target="_blank">
                    <font-awesome-icon icon="fa-solid fa-phone" />
                </a>
            </li>
        </ul>
    
</template>


<style>


.contacts{
    display: flex;
    gap: 15px;
    justify-content: flex-end;
}

.contact__link{
    font-size: 18pt;
    color: var(--dark-blue) !important;
}
@media (max-width:550px) {
    .contacts{
        max-width: 35% !important;
        justify-content: center;
        gap: 20px; 
    }
    
}
</style>