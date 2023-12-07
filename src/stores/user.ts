import { defineStore } from 'pinia'

const delay = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1)
        }, 1000)
    })
}
export const useUserStore = defineStore('user', {
    /**
     * 返回值就是这个模块的状态，类似通用值？对外暴露。可调用方法修改
     * 最好别直接操作值 而是通过写的方法修改内部的值
     */
    state: () => {
        return {
            age: 18,
            name: 'zbc',
            list: [] as String[]
        }
    },
    getters: {
        doubleAge: (state) => {
            return state.age * 2
        },
        getAgeAndName(): string {
            return this.name
        }
    },
    actions: {
        async saveName(name: string) {
            await delay()
            this.name = name
        },
        getDoubleAge(): number {
            // this.age *= 2
            return this.doubleAge * 2
        }
    }
})