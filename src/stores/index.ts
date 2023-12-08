import { createPinia } from 'pinia'
import { persistedState } from '@/stores/plugins/persistedState'
import TIMPlugin from '@/stores/plugins/TIM-plugin'


export const pinia = createPinia()
pinia.use(persistedState)
pinia.use(TIMPlugin)