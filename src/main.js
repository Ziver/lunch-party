import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import '@popperjs/core';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css';

const pinia = createPinia();

createApp(App).use(pinia).mount('#app');
