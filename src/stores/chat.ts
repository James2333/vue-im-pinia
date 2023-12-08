import { defineStore } from 'pinia'
import type { ChatDefineProps } from '@/stores/plugins/TIM-plugin/type'


export const useTIMStore = defineStore('chat', {
    TIMOptions() {
        return {
            SDKAppID: 0
        } as ChatDefineProps
    },
    actions: {
        subscribeMessage(event: any) {
            console.log(event)
        }
    }
})