<template>
  <form1
    :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '#/users', title: 'Пользователи'}, {url: '', title: fields.login ? fields.login : 'Новый пользователь'}]"
    :loading="loading"
  >
    <template v-slot:title>{{fields.login ? fields.login : 'Новый пользователь'}}</template>
    <template v-slot:right>
      <div class="btn-block">
        <button @click="$root.goBack()" class="btn btn-secondary">Назад</button>
        <button @click="submitForm()" class="btn btn-primary">Записать</button>
        <button @click="remove()" class="btn btn-danger">Удалить</button>
      </div>
    </template>
    <template v-slot:body>
      <div class="row">
        <div class="col-lg-6">
          <view1 v-if="fields.id" :label="labels.id">{{fields.id}}</view1>
          <view1 v-if="fields.id" :label="labels.login">{{fields.login}}</view1>
          <b-text
            v-else
            v-model="fields.login"
            @change="validate('login', fields.login); validateLogin('login', $event)"
            :label="labels.login"
            :error="errors.login"
          ></b-text>
          <b-text
            v-model="fields.firstname"
            @change-model="validate('firstname', fields.firstname)"
            :label="labels.firstname"
            :error="errors.firstname"
          ></b-text>
          <b-text
            v-model="fields.secondname"
            @change-model="validate('secondname', fields.secondname)"
            :label="labels.secondname"
            :error="errors.secondname"
          ></b-text>
          <b-text
            v-model="fields.thirdname"
            @change-model="validate('thirdname', fields.thirdname)"
            :label="labels.thirdname"
            :error="errors.thirdname"
          ></b-text>
          <b-text
            v-model="fields.citizenship"
            @change-model="validate('citizenship', fields.citizenship)"
            :label="labels.citizenship"
            :error="errors.citizenship"
          ></b-text>
          <b-text
            v-model="fields.pass_num"
            @change-model="validate('pass_num', fields.pass_num)"
            :label="labels.pass_num"
            :error="errors.pass_num"
          ></b-text>
          <b-text
            v-model="fields.pass_taken"
            @change-model="validate('pass_taken', fields.pass_taken)"
            :label="labels.pass_taken"
            :error="errors.pass_taken"
          ></b-text>
          <b-text
            v-model="fields.pass_then"
            @change-model="validate('pass_then', fields.pass_then)"
            :label="labels.pass_then"
            :error="errors.pass_then"
          ></b-text>
          <b-text
            v-model="fields.pass_end"
            @change-model="validate('pass_end', fields.pass_end)"
            :label="labels.pass_end"
            :error="errors.pass_end"
          ></b-text>
          <b-text
            v-model="fields.inn"
            @change-model="validate('inn', fields.inn)"
            :label="labels.inn"
            :error="errors.inn"
          ></b-text>
          <b-text
            v-model="fields.address_reg"
            @change-model="validate('address_reg', fields.address_reg)"
            :label="labels.address_reg"
            :error="errors.address_reg"
          ></b-text>
          <b-text
            v-model="fields.address_live"
            @change-model="validate('address_live', fields.address_live)"
            :label="labels.address_live"
            :error="errors.address_live"
          ></b-text>
        </div>
        <div class="col-lg-6">
          <b-text
            v-model="fields.phone1"
            @change-model="validate('phone1', fields.phone1)"
            :label="labels.phone1"
            :error="errors.phone1"
          ></b-text>
          <b-text
            v-model="fields.phone2"
            @change-model="validate('phone2', fields.phone2)"
            :label="labels.phone2"
            :error="errors.phone2"
          ></b-text>
          <b-text
            v-model="fields.phone3"
            @change-model="validate('phone3', fields.phone3)"
            :label="labels.phone3"
            :error="errors.phone3"
          ></b-text>
          <b-text
            v-model="fields.email"
            @change-model="validate('email', fields.email)"
            :label="labels.email"
            :error="errors.email"
          ></b-text>
          <div v-show="fields.role == 1">
            <b-mask-input
              :label="labels.updatedst"
              v-model="fields.updatedst"
              template="####-##-##"
              placeholder="ГГГГ-ММ-ДД"
            ></b-mask-input>
            <b-select
              v-model="fields.st"
              @change-model="validate('st', fields.st)"
              :label="labels.st"
              :error="errors.st"
              :options="user_model.st"
            ></b-select>
            <b-select
              v-model="fields.type"
              @change-model="validate('type', fields.type)"
              :label="labels.type"
              :error="errors.type"
              :options="user_model.type"
            ></b-select>
          </div>
          <b-select
            v-model="fields.status"
            @change-model="validate('status', fields.status)"
            :label="labels.status"
            :error="errors.status"
            :options="user_model.status"
          ></b-select>
          <b-select
            v-model="fields.role"
            @change-model="validate('role', fields.role)"
            :label="labels.role"
            :error="errors.role"
            :options="user_model.role"
          ></b-select>
          <b-text
            v-model="fields.password"
            @change-model="validate('password', fields.password)"
            :label="labels.password"
            :error="errors.password"
          ></b-text>
          <b-text
            v-model="fields.api_key"
            @change-model="validate('api_key', fields.api_key)"
            label="Ключ для доступа по api"
            :error="errors.api_key"
          ></b-text>
          <div style="margin: 0 0 15px 0; text-align: right">
            <button @click="gen_new_api_key()" class="btn btn-primary">Сгенерировать новый ключ</button>
          </div>
        </div>
      </div>
    </template>
  </form1>
</template>

<script>
import user_model from "@/models/user";
import submit_and_validate from "@/mixings/submit_and_validate";
import api from "@/config/api";
import fitch_one_1 from "@/mixings/fitch_one_1.js";
import base_input from "@/mixings/base_input.js";
import form1 from "@/widgets/form1/form.vue";
import axios from "axios";
import router from "@/config/router";
import { log } from "util";

export default {
  mixins: [base_input, fitch_one_1, submit_and_validate],
  components: {
    form1
  },
  data: function() {
    return {
      loading: false,
      api: api.users,
      fields: new user_model.Fields().fields,
      labels: user_model.labels,
      user_model: user_model,
      validators: user_model.validators,
      errors: new user_model.Fields().fields
    };
  },

  methods: {
    remove: function() {
      if (confirm("Вы уверены, что хотите удалить пользователя?")) {
        this.loading = true;
        axios({
          method: "delete",
          url: this.api,
          data: { ids: [this.fields.id] },
          params: {}
        })
          .then(response => {
            this.loading = false;
            this.$root.$emit("show-info", {
              text: "Пользователь удален",
              class: "alert"
            });
            router.push({ name: "users", params: {} });
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    validateLogin: function(field, value) {
      if (value.length > 0) {
        axios
          .get(api.is_user_login, { params: { login: value } })
          .then(response => {
            if (response.data.data) {
              this.errors[field] =
                "Пользователь с таким логином уже существует";
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    gen_new_api_key: function() {
      var d = new Date().getTime();

      if (window.performance && typeof window.performance.now === "function") {
        d += performance.now();
      }

      var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function(c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );

      this.fields.api_key = uuid;
    }
  }
};
</script>