import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// @ts-ignore
import App from './App.vue'
import Shop from './views/Shop.vue'
import router from './router'
import { pinia } from '@/stores'

const app = createApp(Shop)

app.use(pinia)
app.use(router)

app.mount('#app')
