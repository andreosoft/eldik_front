<template>
  <form1
    :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '#/finance', title: 'Все платежи'}, {url: '', title: fields.id}]"
    :loading="loading"
  >
    <template v-slot:title>Платежный документ №{{fields.id}} от {{fields.date_pay}}</template>
    <template v-slot:right>
      <div class="btn-block">
        <button @click="$root.goBack()" class="btn btn-secondary">Назад</button>
        <router-link
          :to="{ name: 'finance_update', params: { id: fields.id }}"
          class="btn btn-primary"
        >Изменить</router-link>
      </div>
    </template>
    <template v-slot:body>
      <view1 label="Клиент">{{fields.client_view}}</view1>
      <div class="row form-group">
        <div class="col-sm-4 col-form-label text-right-sm">Документ:</div>
        <div class="col-sm-8">
          <div class="">
            <a :href="docs_upload + '/' + fields.doc_view" target="_blank">
              <img style="width: 100px;" :src="docs_upload + '/' + fields.doc_view" />
            </a>
          </div>
        </div>
      </div>
      <view1 label="Сумма">{{fields.account}}</view1>
      <view1 label="Дата платежа">{{fields.date_pay}}</view1>
      <view1 label="Комментрий">{{fields.comment}}</view1>
    </template>
  </form1>
</template>

<script>
import api from "@/config/api";
import form1 from "@/widgets/form1/form.vue";
import view1 from "@/widgets/form1/view.vue";
import fitch_one_1 from "@/mixings/fitch_one_1.js";

export default {
  mixins: [fitch_one_1],
  components: {
    form1,
    view1
  },
  data: function() {
    return {
      loading: false,
      docs_upload: api.docs_upload,
      api: api.finance,
      fields: {}
    };
  }
};
</script>