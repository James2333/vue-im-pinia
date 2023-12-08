/**
 * 首先需要初始化IM的sdk
 * 并且验证登陆信息
 * 能收发信息
 */
import type { PiniaPluginContext } from 'pinia'
import TIMCore from '@/stores/plugins/TIM-plugin/TIM-core'

let TimPlugin
export default TimPlugin = (context: PiniaPluginContext) => {

    if (context.options.TIMOptions) {
        context.store.timCore = new TIMCore(context.options.TIMOptions())
    }
}