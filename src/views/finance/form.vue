<template>
  <form1
    :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '#/finance', title: 'Все платежи'}, {url: '', title: fields.id ? fields.id : 'Новый документ'}]"
    :loading="loading"
  >
    <template v-slot:title>{{fields.id ? fields.id : 'Новый документ'}}</template>
    <template v-slot:right>
      <div class="btn-block">
        <button @click="$root.goBack()" class="btn btn-secondary">Назад</button>
        <button @click="submitForm()" class="btn btn-primary">Записать</button>
        <button @click="remove()" class="btn btn-danger">Удалить</button>
      </div>
    </template>
    <template v-slot:body>
      <div>
        <div>
          <clientinput
            label="Клиент"
            :view="fields.client_view"
            v-model="fields.client_id"
            @change-view="fields.client_view = $event"
          ></clientinput>
          <docinput
            label="Документ"
            :view="fields.doc_view"
            v-model="fields.doc_id"
            @change-view="fields.doc_view = $event"
          ></docinput>
          <b-text v-model="fields.account" label="Сумма"></b-text>
          <b-mask-input
            label="Дата платежа"
            v-model="fields.date_pay"
            template="####-##-##"
            placeholder="ГГГГ-ММ-ДД"
          ></b-mask-input>
          <b-textarea v-model="fields.comment" label="Комментрий"></b-textarea>
        </div>
      </div>
    </template>
  </form1>
</template>

<script>
import form1 from "@/widgets/form1/form.vue";
import clientinput from "@/widgets/clientinput.vue";
import docinput from "@/widgets/docinput.vue";
import model from "@/models/finance";
import base_input from "@/mixings/base_input.js";
import func from "@/libs/func.js";
import submit_and_validate from "@/mixings/submit_and_validate";
import api from "@/config/api";
import fitch_one_1 from "@/mixings/fitch_one_1.js";
import axios from "axios";
import router from "@/config/router";

export default {
  mixins: [base_input, submit_and_validate, fitch_one_1],
  components: {
    form1,
    clientinput,
    docinput
  },
  created() {
    if (this.$route.query.q) {
      let params = func.url_decode(this.$route.query.q);
      if (params.client_view) {
        this.fields.client_view = params.client_view;
      }
      if (params.client_id) {
        this.fields.client_id = params.client_id;
      }
      if (params.doc_view) {
        this.fields.doc_view = params.doc_view;
      }
      if (params.doc_id) {
        this.fields.doc_id = params.doc_id;
      }
    }
  },
  data: function() {
    return {
      loading: false,
      docs_upload: api.docs_upload,
      fields: new model.Fields().fields,
      labels: model.labels,
      api: api.finance,
      validators: model.validators,
      errors: new model.Fields().fields
    };
  },
  methods: {
    remove: function() {
      if (confirm("Вы уверены, что хотите удалить документ?")) {
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
              text: "документ удален",
              class: "alert"
            });
            router.push({ name: "finance", params: {} });
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>