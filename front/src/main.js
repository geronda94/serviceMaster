import { createApp } from 'vue'
import './assets/main.css'
import './assets/reset.css'
import App from './App.vue'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import { faWhatsapp, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faWhatsapp, faTelegram, faPhone, faFacebook)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')



  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});