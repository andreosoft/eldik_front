<template>
  <form1 :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '', title: 'Пайщики'}]" :loading="loading">
    <template v-slot:title>Пайщики</template>
    <template v-slot:right>
    </template>
    <template v-slot:body>
      <table1 :data="data" :pager="pager" :style_body="{top: '28px'}" :style_table="{top: '60px', left: '15px', right: '15px', 'min-width': '800px' }">
        <template v-slot:header>
          <div class="flex-table-row">
            <col1 class_col="flex-table-col-3">Сумма</col1>
            <col1 class_col="flex-table-col-3">Дата платежа</col1>
            <col1 class_col="flex-table-col-3">Комментарий</col1>
            <col1 class_col="flex-table-col-3">Дата ввода</col1>
          </div>
        </template>
        <template v-slot:body>
          <div v-for="(el, key) in data" :key="key" class="flex-table-row">
            <div class="flex-table-col flex-table-col-3">{{el.account}}</div>
            <div class="flex-table-col flex-table-col-3">{{el.date_pay}}</div>
            <div class="flex-table-col flex-table-col-3">{{el.comment}}</div>
            <div class="flex-table-col flex-table-col-3">{{el.createdon}}</div>
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
      api: api.my_finance,
      data: []
    };
  }
};
</script>