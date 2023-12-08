import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import ShopView from '../views/Shop.vue'
// @ts-ignore
import NotFound from '../views/404.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/shop',
            name: 'shop',
            component: ShopView
        },
        {
            path: '/login',
            name: 'login',
            // @ts-ignore
            component: () => import('../views/login.vue')
        },
        {
            path: '/layout',
            name: 'layout',
            // @ts-ignore
            component: () => import('../views/layout.vue'),
            children: [
                {
                    path: '/home',
                    // @ts-ignore
                    component: () => import('../views/home.vue')
                },
                {
                    path: '/customer-service',
                    // @ts-ignore
                    component: () => import('../views/customer-service.vue')
                }
            ]
        },
        {
            path: '/:catchAll(.*)',
            name: '/404',
            component: NotFound
        }
    ]
})

export default router
