<template>
  <form1
    :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '', title: 'Тексты'}]"
    :loading="loading"
  >
    <template v-slot:title>Тексты</template>
    <template v-slot:right>
      <div class="btn-block">
        <button @click="$root.goBack()" class="btn btn-secondary">Назад</button>
        <router-link :to="{ name: 'content_create'}" class="btn btn-primary">
          <i class="far fa-plus"></i> Создать
        </router-link>
      </div>
    </template>
    <template v-slot:body>
<table1 :data="data" :pager="pager" :style_table="{top: '60px', left: '15px', right: '15px', 'min-width': '600px' }">
        <template v-slot:header>
          <div class="flex-table-row">
            <col1 class_col="flex-table-col-3">#</col1>
            <col1 class_col="flex-table-col-6">Наименование</col1>
            <col1 class_col="flex-table-col-3">Действия</col1>
          </div>
        </template>
        <template v-slot:body>
          <div v-for="(el, key) in data" :key="key" class="flex-table-row">
            <div class="flex-table-col flex-table-col-3">{{el.id}}</div>
            <div class="flex-table-col flex-table-col-6">{{el.name}}</div>
            <div class="flex-table-col flex-table-col-3">
              <div class="btn-block">
                <router-link
                  :to="{ name: 'content_update', params: { id: el.id }}"
                  title="Открыть"
                  class="btn btn-primary"
                ><i class="far fa-edit"></i></router-link>
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
      api: api.content,
      data: []
    };
  },
};
</script>