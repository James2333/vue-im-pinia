import { defineStore } from 'pinia'

interface Goods {
    name: string
    price: number
    num?: number
    select: boolean
}

export const useShopStore = defineStore('shop', {
    state: () => {
        return {
            goods: [
                { name: '羊肉', price: 20 },
                { name: '猪肉', price: 10 },
                { name: '牛肉', price: 18 },
                { name: '鸡肉', price: 5 }
            ] as Goods[],
            isAllSelect: false
        }
    },
    getters: {
        sum(): number {
            return this.goods.filter((item) => item.select).reduce((total, item) => total += (item.num || 1) * item.price, 0)
        }
    },
    actions: {
        updateNum(index: number, num: number) {
            //初始化num
            this.goods[index].num = this.goods[index].num || 1

            //数值修改
            this.goods[index].num! += num
        },
        allSelectChange() {
            //每次点击全选同步状态
            this.goods.forEach(item => {
                item.select = this.isAllSelect
            })
        },
        singleChange() {
            //判断是不是所有商品都是已选
            this.isAllSelect = this.goods.every((item) => item.select)
        }
    }
})