import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './routes'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createPinia } from 'pinia';

const app = createApp(App); 

const pinia = createPinia();
app.use(pinia);

app.use(router).mount('#app');
