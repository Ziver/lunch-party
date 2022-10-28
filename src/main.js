import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import localStore from './store/local.js';

createApp(App).use(localStore).mount('#app');
