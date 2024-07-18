<script setup>

</script>

<template>
    
        <ul class="contacts" >
            <li>
                <a href="tel:+995522222742" class="contact__link phone__number" target="_blank">557 25 61 75</a>
            </li>
            <li>
                <a href="https://wa.me/+99557256175" class="contact__link" target="_blank">
                    <font-awesome-icon :icon="['fab', 'whatsapp']" />
                </a>
            </li>
            <li>
                <a href="https://t.me/+99557256175" class="contact__link" target="_blank">
                    <font-awesome-icon :icon="['fab', 'telegram']" />
                </a>
            </li>
            <li>
                <a href="https://facebook.com/RomkaMaster" class="contact__link" target="_blank">
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                </a>
            </li>
            
            
        </ul>
    
</template>


<style>

.phone__number{
    color: var(--fb-blue) !important;
    font-size: 16pt !important;
    text-decoration: underline;
}

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
        
        justify-content: center;
        gap: 20px; 
    }
    
}
</style>