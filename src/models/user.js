export default {

    Fields() {
        this.fields = {
            id: null,
            login: null,
            password: null,
            api_key: null,
            firstname: null,
            secondname: null,
            thirdname: null,
            citizenship: null,
            pass_num: null,
            pass_taken: null,
            pass_then: null,
            pass_end: null,
            inn: null,
            address_reg: null,
            address_live: null,
            phone1: null,
            phone2: null,
            phone3: null,
            email: null,
            st: null,
            sum: null,
            updatedst: null
        }
    },

    validators: {
        login: ['req', 'login'],
        password: ['pass'],
        name: ['req'],
    },

    labels: {
        id: 'id',
        login: 'Логин',
        password: 'Пароль',
        role: 'Роль',
        status: 'Статус',
        st: 'Статус пайщика',
        sum: 'Общая сумма внесенных средств',
        firstname: 'Фамилия',
        secondname: 'Имя',
        thirdname: 'Отчество',
        citizenship: 'Гражданство',
        pass_num: 'Номер паспорта',
        pass_taken: 'Паспорт выдан кем',
        pass_then: 'Паспорт выдан когда',
        pass_end: 'Срок действия паспорта',
        inn: 'ИНН',
        address_reg: 'Адрес регистрации',
        address_live: 'Адрес проживания',
        phone1: 'Номер телефона 1',
        phone2: 'Номер телефона 2',
        phone3: 'Номер телефона 3',
        email: 'Email',
        type: 'Тип пайщика',
        updatedst: 'Дата, когда стал очередником'
    },

    status: [
        { value: 1, text: 'Новый' },
        { value: 2, text: 'Активный' },
        { value: 10, text: 'Не активный' },
    ],

    st: [
        { value: 1, text: 'Пайщик' },
        { value: 2, text: 'В очереди 10%' },
        { value: 3, text: 'В очереди 35%' },
        { value: 4, text: 'Рассчитываются' },
        { value: 5, text: 'Рассчитанные' },
    ],
    
    type: [
        { value: 1, text: 'недвижимость' },
        { value: 2, text: 'авто' },
    ],

    role: [
        { value: 1, text: 'Пользователь' },
        { value: 100, text: 'Админ' }
    ]
}