import { createPinia } from 'pinia'
import { persistedState } from '@/stores/plugins/persistedState'


export const pinia = createPinia()
pinia.use(persistedState)