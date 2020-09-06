<template>
  <form1
    :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '#/content', title: 'Тексты'}, {url: '', title: fields.id ? fields.id : 'Новый документ'}]"
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
          <div class="form-group">
            <label>Наименование:</label> 
            <input class="form-control" v-model="fields.name" />
          </div>
          <div class="form-group">
            <label>Содержимое:</label> 
            <textarea class="form-control" v-model="fields.content" rows="30"></textarea>
          </div>
        </div>
      </div>
    </template>
  </form1>
</template>

<script>
import form1 from "@/widgets/form1/form.vue";
import model from "@/models/finance";
import base_input from "@/mixings/base_input.js";
import submit_and_validate from "@/mixings/submit_and_validate";
import api from "@/config/api";
import fitch_one_1 from "@/mixings/fitch_one_1.js";
import axios from "axios";
import router from "@/config/router";

export default {
  mixins: [base_input, submit_and_validate, fitch_one_1],
  components: {
    form1
  },
  data: function() {
    return {
      loading: false,
      fields: {name: null, content: null},
      api: api.content,
      validators: {name: ['req']},
      errors: {name: null, content: null},
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