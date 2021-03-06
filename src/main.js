import Vue from 'vue'
import App from '@/App.vue'
import router from '@/config/router'
import axios from 'axios'
import config from '@/config/config'
import store from '@/store/index'
import mainMenu from '@/config/menu'
import { log } from 'util';

Vue.config.productionTip = false

Array.prototype.getTextByValue = function (el) {
    return this.find(x => x.value == el)
        ? this.find(x => x.value == el).text
        : ""
}


const token = localStorage.getItem('user-token')
if (token) {
    axios.defaults.headers.common['Authorization'] = token
}

new Vue({
    router,
    store,
    render: h => h(App),
    el: '#app',
    mixins: [config],
    data: {
        showMenu: true,
        mainMenu: { data: mainMenu.data },
        phone_number: ''
    },
    methods: {
        errors: function (typ, error) {
            console.log(error);
        },
        logout: function () {
            this.$store.commit('auth/authLogout')
            window.location.href = '/';
        },
        goBack: function () {
            router.go(-1)
        },
        showInfo: function (message) {
            this.info.text = message
            this.info.visible = true
            setTimeout(() => {
                this.info.visible = false
            }, 2000);
        },
        path_code(str) {
            return window.btoa(unescape(encodeURIComponent(JSON.stringify(str))));
        },
        path_decode(str) {
            return JSON.parse(decodeURIComponent(escape(window.atob(str))));
        }
    },
    created() {

    },
    mounted: function () {
        this.$store.dispatch("auth/updateProfile");
        axios.interceptors.response.use(undefined, function (err) {
            return new Promise(function (resolve, reject) {
                if (err.response.status === 403) {
                    localStorage.removeItem('user-token')
                    localStorage.removeItem('user-profile')
                    alert('Кто то зашел под вашим логином. Ваша сессия недоступна');
                    window.location.href = '/';
                }
                throw err;
            });
        });
    }
})