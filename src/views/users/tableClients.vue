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
          class_col="flex-table-col-1"
          @sort-by="sortBy('id')"
          field="id"
        >#</col1>
        <col1
          :sort="sort"
          :sortable="true"
          class_col="flex-table-col-2"
          @sort-by="sortBy('inn')"
          field="inn"
        >ИНН</col1>
        <col1
          :sort="sort"
          :sortable="true"
          class_col="flex-table-col-2"
          @sort-by="sortBy('name')"
          field="name"
        >ФИО</col1>
        <col1
          :sort="sort"
          :sortable="true"
          class_col="flex-table-col-2"
          @sort-by="sortBy('phone1')"
          field="phone1"
        >Телефон1</col1>
        <col1
          :sort="sort"
          :sortable="true"
          class_col="flex-table-col-2"
          @sort-by="sortBy('phone2')"
          field="phone2"
        >Телефон2</col1>
        <col1
          :sort="sort"
          :sortable="true"
          class_col="flex-table-col-2"
          @sort-by="sortBy('phone3')"
          field="phone3"
        >Телефон3</col1>
        <col1
          :sort="sort"
          :sortable="true"
          class_col="flex-table-col-1"
          @sort-by="sortBy('sum')"
          field="sum"
        >Сумма</col1>
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
            @change="onChangeFilter('inn')"
            v-model="filters.inn"
          />
        </div>
        <div class="flex-table-col flex-table-col-2">
          <input
            class="form-control"
            type="text"
            @change="onChangeFilter('name')"
            v-model="filters.name"
          />
        </div>
        <div class="flex-table-col flex-table-col-2">
          <input
            class="form-control"
            type="text"
            @change="onChangeFilter('phone1')"
            v-model="filters.phone1"
          />
        </div>
        <div class="flex-table-col flex-table-col-2">
          <input
            class="form-control"
            type="text"
            @change="onChangeFilter('phone2')"
            v-model="filters.phone2"
          />
        </div>
        <div class="flex-table-col flex-table-col-2">
          <input
            class="form-control"
            type="text"
            @change="onChangeFilter('phone3')"
            v-model="filters.phone3"
          />
        </div>
        <div class="flex-table-col flex-table-col-1">
          <input
            class="form-control"
            type="text"
            @change="onChangeFilter('sum')"
            v-model="filters.sum"
          />
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div
        style="cursor: pointer;"
        @click="$emit('change', {id: el.id, view: el.name})"
        title="Выбрать"
        v-for="(el, key) in data"
        :key="key"
        class="flex-table-row"
      >
        <div class="flex-table-col flex-table-col-1">{{el.id}}</div>
        <div class="flex-table-col flex-table-col-2">{{el.inn}}</div>
        <div class="flex-table-col flex-table-col-2">{{el.name}}</div>
        <div class="flex-table-col flex-table-col-2">{{el.phone1}}</div>
        <div class="flex-table-col flex-table-col-2">{{el.phone2}}</div>
        <div class="flex-table-col flex-table-col-2">{{el.phone3}}</div>
        <div class="flex-table-col flex-table-col-1">{{el.sum}}</div>
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
      api: api.users
    };
  }
};
</script>