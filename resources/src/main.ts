import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAxiosInstance } from '@/lib/axios';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import App from './App.vue'
import router from './router'


dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(timezone);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

createAxiosInstance(router);

