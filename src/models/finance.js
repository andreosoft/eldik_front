export default {

    Fields() {
        this.fields = {
            id: null,
            client_view: null,
            client_id: null,
            doc_view: null,
            doc_id: null,
            account: null,
            date_pay: null,
            comment: null
        }
    },

    validators: {
        client_id: ['req']
    },

    labels: {
    }
    ,
    status: [
        { value: 1, text: 'Новый' },
        { value: 2, text: 'Активный' },
        { value: 10, text: 'Не активный' },
    ],
}