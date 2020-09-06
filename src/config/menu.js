export default {
    data: [
        {
            route: '/index',
            icon: 'fal fa-address-book',
            title: 'Пайщики',
            name: 'Пайщики',
            auth: [1, 100]
        },
        {
            route: '/finance',
            icon: 'fal fa-sack-dollar',
            title: 'Все платежи',
            name: 'Все платежи',
            auth: [100]
        },
        {
            route: '/new_docs',
            icon: 'fal fa-file-alt',
            title: 'Новые документы',
            name: 'Новые документы',
            auth: [100]
        },
        {
            route: '/my_finance',
            icon: 'fal fa-piggy-bank',
            title: 'Мои платежи',
            name: 'Мои платежи',
            auth: [1]
        },
        {
            route: '/help',
            icon: 'fal fa-question-circle',
            title: 'Инструкции',
            name: 'Инструкции',
            auth: [1]
        },
        {
            route: '/pay',
            icon: 'fal fa-money-bill',
            title: 'Оплата',
            name: 'Оплата',
            auth: [1]
        },
        {
            route: '/doc',
            icon: 'fal fa-upload',
            title: 'Загрузить документ',
            name: 'Загрузить документ',
            auth: [1]
        },
        {
            route: '/content',
            icon: 'fal fa-file-alt',
            title: 'Тексты',
            name: 'Тексты',
            auth: [100]
        },
        {
            route: '/profile',
            icon: 'fal fa-user',
            title: 'Мой профиль',
            name: 'Мой профиль',
            auth: [1, 100]
        },
    ]
}