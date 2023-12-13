import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './routes'
import AOS from 'aos';
import 'aos/dist/aos.css';






createApp(App).use(router).mount('#app')
app.use(AOS.init({
    // Global settings or options for AOS
  }));