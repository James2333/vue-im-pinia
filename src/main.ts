import './assets/main.css'

import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

// @ts-ignore
import App from './App.vue'
import router from './router/index'
import { pinia } from '@/stores'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Antd)
app.mount('#app')
