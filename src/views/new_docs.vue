<template>
  <form1
    :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '', title: 'Новые документы'}]"
    :loading="loading"
  >
    <template v-slot:title>Новые документы</template>
    <template v-slot:right>
      <div class="btn-block">
        <button @click="$root.goBack()" class="btn btn-secondary">Назад</button>
      </div>
    </template>
    <template v-slot:body>
      <table1
        :data="data"
        :pager="pager"
        :style_table="{top: '60px', left: '15px', right: '15px', 'min-width': '1000px' }"
        :style_body="{top: '28px'}"
      >
        <template v-slot:header>
          <div class="flex-table-row">
            <col1 class_col="flex-table-col-1">#</col1>
            <col1 class_col="flex-table-col-2">Дата</col1>
            <col1 class_col="flex-table-col-3">Пользователь</col1>
            <col1 class_col="flex-table-col-2">Документ</col1>
            <col1 class_col="flex-table-col-3">Комментарий</col1>
            <col1 class_col="flex-table-col-1">Действия</col1>
          </div>
        </template>
        <template v-slot:body>
          <div v-for="(el, key) in data" :key="key" class="flex-table-row">
            <div class="flex-table-col flex-table-col-1">{{key + 1}}</div>
            <div class="flex-table-col flex-table-col-2">{{el.createdon}}</div>
            <div class="flex-table-col flex-table-col-3">
              <a
                @click.prevent="$router.push({ name: 'users_view', params: { id: el.user_id }})"
                href="#"
              >{{el.username}}</a>
            </div>
            <div class="flex-table-col flex-table-col-2">
              <a :href="docs_upload + '/' + el.file" target="_blank">
                <img style="width: 100px;" :src="docs_upload + '/' + el.file" />
              </a>
            </div>
            <div class="flex-table-col flex-table-col-3">{{el.comment}}</div>
            <div class="flex-table-col flex-table-col-1">
              <div class="btn-block">
                <button title="Создать документ оплаты" class="btn btn-primary" @click="add(el)">
                  <i class="fas fa-plus-circle"></i>
                </button>
                <button
                  v-if="parseInt($store.getters['auth/profile'].role) >= 100"
                  title="Удалить"
                  class="btn btn-danger"
                  @click="remove(el.id)"
                >
                  <i class="fas fa-minus-circle"></i>
                </button>
              </div>
            </div>
          </div>
        </template>
      </table1>
    </template>
  </form1>
</template>

<script>
import form1 from "@/widgets/form1/form.vue";
import table1 from "@/widgets/table/table1.vue";
import col1 from "@/widgets/table/col1.vue";
import fitch_all_1 from "@/mixings/fitch_all_1";
import api from "@/config/api";
import func from "@/libs/func.js";
import axios from "axios";

export default {
  mixins: [fitch_all_1],
  components: {
    form1,
    table1,
    col1
  },
  data() {
    return {
      loading: false,
      docs_upload: api.docs_upload,
      api: api.new_docs,
      data: []
    };
  },
  methods: {
    add: function(el) {
      this.$router.push({
        name: "finance_create",
        query: {
          q: func.url_encode({
            client_view: el.username,
            client_id: el.user_id,
            doc_view: el.file,
            doc_id: el.id
          })
        }
      });
    },
    remove: function(id) {
      if (confirm("Вы уверены, что хотите удалить документ?")) {
        this.loading = true;
        axios({
          method: "delete",
          url: api.doc,
          data: { ids: [id] },
          params: {}
        })
          .then(response => {
            this.loading = false;
            this.$root.$emit("show-info", {
              text: "документ удален",
              class: "alert"
            });
            this.updateRoute();
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>