import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../layout/MainLayout.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('../views/login/Index.vue'),
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router