import type { PiniaPluginContext } from 'pinia'

/**
 * 插件方法  有几个模块执行几次
 * @param context
 */
export function persistedState(context: PiniaPluginContext) {
    // console.log('11', context.store.$id)
    //初始化数据
    //根据模块名称拿到对应的数据
    const currentState = JSON.parse(localStorage.getItem(context.store.$id) || '{}')
    //数据载入
    context.store.$patch(currentState)

    //每次state变化  都保存在localStorage
    context.store.$subscribe((_store, state) => {
            // console.log(_store, state)
            localStorage.setItem(_store.storeId, JSON.stringify(state))
        }, {
            //组件卸载
            detached: true
        }
    )
}