<template>
  <form1
    :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '', title: 'Пайщики'}]"
    :loading="loading"
  >
    <template v-slot:title>Пайщики</template>
    <template v-slot:right>
      <div>
        <label style="padding-right: 5px;">Фильтрация: </label>
        <select class="form-control" style="display:inline-block; width: auto;" @change="onChangeFilter('st')" v-model="filters.st">
          <option value="0">Все</option>
          <option v-for="(el, key) in user_model.st" :key="key" :value="el.value">{{el.text}}</option>
        </select>
      </div>
    </template>
    <template v-slot:body>
      <table1
        :data="data"
        :pager="pager"
        :style_body="{top: '28px'}"
        :style_table="{top: '60px', left: '15px', right: '15px', 'min-width': '800px' }"
      >
        <template v-slot:header>
          <div class="flex-table-row">
            <col1 class_col="flex-table-col-4">ФИО</col1>
            <col1 class_col="flex-table-col-3">Сумма</col1>
            <col1 class_col="flex-table-col-3">Дата</col1>
            <col1 class_col="flex-table-col-2">Статус пайщика</col1>
          </div>
        </template>
        <template v-slot:body>
          <div v-for="(el, key) in data" :key="key" class="flex-table-row">
            <div class="flex-table-col flex-table-col-4">{{el.name}}</div>
            <div class="flex-table-col flex-table-col-3">{{el.sum}}</div>
            <div class="flex-table-col flex-table-col-3">{{el.updatedst}}</div>
            <div class="flex-table-col flex-table-col-2">
              {{user_model.st.find(x => x.value == el.st)
              ? user_model.st.find(x => x.value == el.st).text
              : "не задано"}}
            </div>
          </div>
        </template>
      </table1>
    </template>
  </form1>
</template>

<script>
import user_model from "@/models/user";
import form1 from "@/widgets/form1/form.vue";
import table1 from "@/widgets/table/table1.vue";
import col1 from "@/widgets/table/col1.vue";
import fitch_all_1 from "@/mixings/fitch_all_1";
import api from "@/config/api";
import axios from "axios";

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
      title: "Пользователи",
      api: api.partner_all,
      user_model: user_model,
      filters: {st: 0},
      data: []
    };
  },
  methods: {
    onChangeFilter() {
      this.updateRoute();
    }
  }
};
</script>