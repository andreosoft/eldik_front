<template>
  <form1
    :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '', title: 'Все платежи'}]"
    :loading="loading"
  >
    <template v-slot:title>Все платежи</template>
    <template v-slot:right>
      <div class="btn-block">
        <button @click="$root.goBack()" class="btn btn-secondary">Назад</button>
        <router-link :to="{ name: 'finance_create'}" class="btn btn-primary">
          <i class="far fa-plus"></i> Создать
        </router-link>
      </div>
    </template>
    <template v-slot:body>
<table1 :data="data" :pager="pager" :style_table="{top: '60px', left: '15px', right: '15px', 'min-width': '1000px' }">
        <template v-slot:header>
          <div class="flex-table-row">
            <col1
              :sort="sort"
              :sortable="true"
              class_col="flex-table-col-1"
              @sort-by="sortBy('id')"
              field="id"
            >#</col1>
            <col1
              :sort="sort"
              :sortable="true"
              class_col="flex-table-col-2"
              @sort-by="sortBy('date_pay')"
              field="date_pay"
            >Дата платежа</col1>
            <col1
              :sort="sort"
              :sortable="true"
              class_col="flex-table-col-3"
              @sort-by="sortBy('username')"
              field="username"
            >ФИО</col1>
            <col1
              :sort="sort"
              :sortable="true"
              class_col="flex-table-col-2"
              @sort-by="sortBy('account')"
              field="account"
            >Сумма</col1>
            <col1
              :sort="sort"
              :sortable="true"
              class_col="flex-table-col-2"
              @sort-by="sortBy('comment')"
              field="comment"
            >Комментарий</col1>
            <col1 class_col="flex-table-col-2">Действия</col1>
          </div>
          <div class="flex-table-row" style="height: 44px;">
            <div class="flex-table-col flex-table-col-1">
              <input
                class="form-control"
                type="text"
                @change="onChangeFilter('id')"
                v-model="filters.id"
              />
            </div>
            <div class="flex-table-col flex-table-col-2">
              <input
                class="form-control"
                type="text"
                @change="onChangeFilter('date_pay')"
                v-model="filters.date_pay"
              />
            </div>
            <div class="flex-table-col flex-table-col-3">
              <input
                class="form-control"
                type="text"
                @change="onChangeFilter('username')"
                v-model="filters.username"
              />
            </div>
            <div class="flex-table-col flex-table-col-2">
              <input
                class="form-control"
                type="text"
                @change="onChangeFilter('account')"
                v-model="filters.account"
              />
            </div>
            <div class="flex-table-col flex-table-col-2">
              <input
                class="form-control"
                type="text"
                @change="onChangeFilter('comment')"
                v-model="filters.comment"
              />
            </div>
            <div class="flex-table-col flex-table-col-2"></div>
          </div>
        </template>
        <template v-slot:body>
          <div v-for="(el, key) in data" :key="key" class="flex-table-row">
            <div class="flex-table-col flex-table-col-1">{{el.id}}</div>
            <div class="flex-table-col flex-table-col-2">{{el.date_pay}}</div>
            <div class="flex-table-col flex-table-col-3">{{el.client_view}}</div>
            <div class="flex-table-col flex-table-col-2">{{el.account}}</div>
            <div class="flex-table-col flex-table-col-2">{{el.comment}}</div>
            <div class="flex-table-col flex-table-col-2">
              <div class="btn-block">
                <router-link
                  :to="{ name: 'finance_view', params: { id: el.id }}"
                  title="Открыть"
                  class="btn btn-primary"
                ><i class="far fa-eye"></i></router-link>
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
import axios from "axios";
import model from "@/models/finance";

export default {
  mixins: [fitch_all_1],
  components: {
    form1,
    table1,
    col1
  },
  data: function() {
    return {
      loading: false,
      api: api.finance,
      model: model,
      data: []
    };
  },
};
</script>