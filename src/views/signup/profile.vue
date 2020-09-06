<template>
  <form1
    :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '', title: 'Мой профиль'}]"
    :loading="loading"
  >
    <template v-slot:title>Мой профиль</template>
    <template v-slot:right>
      <div class="btn-block">
        <button @click="$root.goBack()" class="btn btn-secondary">Назад</button>
        <button @click="submitForm()" class="btn btn-primary">Записать</button>
      </div>
    </template>
    <template v-slot:body>
      <view1 v-if="fields.id" :label="labels.id">{{fields.id}}</view1>
      <view1 v-if="fields.id" :label="labels.login">{{fields.login}}</view1>
      <b-text
        v-model="fields.address_live"
        @change-model="validate('address_live', fields.address_live)"
        :label="labels.address_live"
        :error="errors.address_live"
      ></b-text>
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
      <b-text
        v-model="fields.password"
        @change-model="validate('password', fields.password)"
        :label="labels.password"
        :error="errors.password"
      ></b-text>
    </template>
  </form1>
</template>

<script>
import form1 from "@/widgets/form1/form.vue";
import base_input from "@/mixings/base_input.js";
import user_model from "@/models/user";
import api from "@/config/api";
import axios from "axios";
import submit_and_validate from "@/mixings/submit_and_validate";

export default {
  mixins: [base_input, submit_and_validate],
  components: { form1 },
  data: function() {
    return {
      loading: false,
      user_model: user_model,
      validators: user_model.validators,
      labels: user_model.labels,
      errors: new user_model.Fields().fields,
      api: api.set_profile
    };
  },
  computed: {
    fields: {
      get() {
        return this.$store.getters["auth/profile"];
      },
      set(value) {}
    }
  },
  methods: {
    submit: function(fields, api) {
      this.loading = true;
      axios
        .post(api, fields)
        .then(response => {
          this.loading = false;
          this.fields = response.data.data;
          this.isLoad = false;
          this.hasChanges = false;
          this.$store.commit("auth/updateProfile", this.fields);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>