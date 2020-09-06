// @ts-nocheck
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
    saveScrollPosition: true,
    history: true,
    // mode: 'history',
    routes: [{
        path: '/',
        redirect: to => {
            return '/index'
        }
    },
    {
        path: '/',
        meta: { auth: [1, 100] },
        component: () =>
            import('@/layouts/main.vue'),
        children: [{
            path: '/profile',
            name: 'profile',
            meta: { 'title': 'Мой профиль', auth: [1, 50, 100] },
            component: () =>
                import('@/views/signup/profile.vue'),
        },
        {
            path: '/index',
            name: 'index',
            meta: { 'title': 'Кабинет', auth: [1, 50, 100] },
            component: () =>
                import('@/views/index/index.vue'),
        },
        {
            path: '/users',
            name: 'users',
            meta: { 'title': 'Пользователи', auth: [50, 100] },
            component: () =>
                import('@/views/users/index.vue')
        },
        {
            path: '/users/view/:id',
            name: 'users_view',
            meta: { 'title': 'Пользователи', auth: [50, 100] },
            component: () =>
                import('@/views/users/view.vue')
        },
        {
            path: '/users/update/:id',
            name: 'users_update',
            meta: { 'title': 'Пользователи', auth: [50, 100] },
            component: () =>
                import('@/views/users/form.vue')
        },
        {
            path: '/users/create',
            name: 'users_create',
            meta: { 'title': 'Пользователи', auth: [50, 100] },
            component: () =>
                import('@/views/users/form.vue')
        },
        {
            path: '/my_finance',
            name: 'my_finance',
            meta: { 'title': 'Мои платежи', auth: [1, 100] },
            component: () =>
                import('@/views/finance/my_finance.vue')
        },
        {
            path: '/finance',
            name: 'finance',
            meta: { 'title': 'Платежи', auth: [50, 100] },
            component: () =>
                import('@/views/finance/index.vue')
        },
        {
            path: '/finance/view/:id',
            name: 'finance_view',
            meta: { 'title': 'Платежи', auth: [50, 100] },
            component: () =>
                import('@/views/finance/view.vue')
        },
        {
            path: '/finance/update/:id',
            name: 'finance_update',
            meta: { 'title': 'Платежи', auth: [50, 100] },
            component: () =>
                import('@/views/finance/form.vue')
        },
        {
            path: '/finance/create',
            name: 'finance_create',
            meta: { 'title': 'Платежи', auth: [50, 100] },
            component: () =>
                import('@/views/finance/form.vue')
        },
        {
            path: '/new_docs',
            name: 'new_docs',
            meta: { 'title': 'Новые документ', auth: [100] },
            component: () =>
                import('@/views/new_docs.vue')
        },
        {
            path: '/doc',
            name: 'doc_upload',
            meta: { 'title': 'Загрузить документ', auth: [1, 100] },
            component: () =>
                import('@/views/doc_upload.vue')
        },
        {
            path: '/content',
            name: 'content',
            meta: { 'title': 'Тексты', auth: [50, 100] },
            component: () =>
                import('@/views/content/index.vue')
        },
        {
            path: '/content/update/:id',
            name: 'content_update',
            meta: { 'title': 'Тексты', auth: [50, 100] },
            component: () =>
                import('@/views/content/form.vue')
        },
        {
            path: '/content/create',
            name: 'content_create',
            meta: { 'title': 'Тексты', auth: [50, 100] },
            component: () =>
                import('@/views/content/form.vue')
        },
        {
            path: '/pay',
            name: 'pay',
            meta: { 'title': 'Оплата', auth: [1, 100] },
            component: () =>
                import('@/views/pay.vue')
        },
        {
            path: '/help',
            name: 'help',
            meta: { 'title': 'Помощь', auth: [1, 100] },
            component: () =>
                import('@/views/help.vue')
        }
        ]
    },
    {
        path: '/',
        component: () =>
            import('@/layouts/blank.vue'),
        children: [{
            path: '/login',
            name: 'login',
            meta: { 'title': 'login', auth: ['0'] },
            component: () =>
                import('@/views/signup/login.vue')
        },
        {
            path: '*',
            name: 'notfound',
            meta: { 'title': '404', auth: ['*'] },
            component: () =>
                import('@/views/notFound.vue')
        }
        ]
    }
    ]
})
export default router