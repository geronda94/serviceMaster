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
                <a href="https://t.me/+995557256175" class="contact__link" target="_blank">
                    <font-awesome-icon :icon="['fab', 'telegram']" />
                </a>
            </li>
            <li>
                <a href="https://facebook.com/RomkaMaster" class="contact__link" target="_blank">
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                </a>
            </li>
            <li>
                <a href="tel:+995557256175" class="contact__link" target="_blank">
                    <font-awesome-icon icon="fa-solid fa-phone" />
                </a>
            </li>
        </ul>
    
</template>


<style scoped>


.contacts{
    display: flex;
    gap: 15px;
    justify-content: flex-end;
}

.contact__link{
    font-size: 15pt;
    color: var(--dark-blue) !important;
}
</style>