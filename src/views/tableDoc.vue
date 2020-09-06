<template>
  <table1
    :data="data"
    :pager="pager"
    :style_table="{top: '60px', left: '15px', right: '15px', 'min-width': '1000px' }"
  >
    <template v-slot:header>
      <div class="flex-table-row">
        <col1
          :sort="sort"
          :sortable="true"
          class_col="flex-table-col-2"
          @sort-by="sortBy('createdon')"
          field="createdon"
        >Дата</col1>
        <col1
          :sort="sort"
          :sortable="true"
          class_col="flex-table-col-4"
          @sort-by="sortBy('username')"
          field="username"
        >ФИО</col1>
        <col1 class_col="flex-table-col-2">Документ</col1>
        <col1 class_col="flex-table-col-4">Комментарий</col1>
      </div>
      <div class="flex-table-row" style="height: 44px;">
        <div class="flex-table-col flex-table-col-2">
          <input
            class="form-control"
            type="text"
            @change="onChangeFilter('createdon')"
            v-model="filters.createdon"
          />
        </div>
        <div class="flex-table-col flex-table-col-4">
          <input
            class="form-control"
            type="text"
            @change="onChangeFilter('username')"
            v-model="filters.username"
          />
        </div>
        <div class="flex-table-col flex-table-col-2"></div>
        <div class="flex-table-col flex-table-col-4">
          <input
            class="form-control"
            type="text"
            @change="onChangeFilter('comment')"
            v-model="filters.comment"
          />
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div
        style="cursor: pointer;"
        @click="$emit('change', {id: el.id, view: el.file})"
        title="Выбрать"
        v-for="(el, key) in data"
        :key="key"
        class="flex-table-row"
      >
        <div class="flex-table-col flex-table-col-2">{{el.createdon}}</div>
        <div class="flex-table-col flex-table-col-4">{{el.username}}</div>
        <div class="flex-table-col flex-table-col-2"><a :href="file_name(el)" target="_blank"><img style="width: 100px;" :src="file_name(el)"/></a></div>
        <div class="flex-table-col flex-table-col-4">{{el.comment}}</div>
      </div>
    </template>
  </table1>
</template>

<script>
import table1 from "@/widgets/table/table1.vue";
import col1 from "@/widgets/table/col1.vue";
import fitch_all_1 from "@/mixings/fitch_all_1";
import api from "@/config/api";

export default {
  mixins: [fitch_all_1],
  components: {
    table1,
    col1
  },
  data: function() {
    return {
      loading: false,
      docs_upload: api.docs_upload,
      api: api.new_docs,
      data: []
    };
  },
  methods: {
    file_name: function(el) {
      return this.docs_upload + '/' + el.file
    }
  }
};
</script>