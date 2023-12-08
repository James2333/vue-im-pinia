import 'pinia'
import { ChatDefineProps } from '@/stores/plugins/TIM-plugin/type'
import TIMCore from '@/stores/plugins/TIM-plugin/TIM-core'

declare module 'pinia' {
    export interface DefineStoreOptionsBase<S, Store> {
        // 允许为任何操作定义毫秒数
        debounce?: Partial<Record<keyof StoreActions<Store>, number>>
        TIMOptions?: () => ChatDefineProps
    }
    export interface PiniaCustomProperties {
       timCore: TIMCore
    }
}