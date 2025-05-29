import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/styles/_generic.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount('#app');
createApp(App).mount('#app');
