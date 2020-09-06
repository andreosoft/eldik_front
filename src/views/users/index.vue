<template>
  <form1 :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '', title: title}]" :loading="loading">
    <template v-slot:title>{{title}}</template>
    <template v-slot:right>
      <div class="btn-block">
        <button @click="$root.goBack()" class="btn btn-secondary">Назад</button>
        <router-link :to="{ name: 'users_create'}" class="btn btn-primary">
          <i class="far fa-plus"></i> Создать
        </router-link>
      </div>
    </template>
    <template v-slot:body>
      <table1 :data="data" :pager="pager" :style_table="{top: '60px', left: '15px', right: '15px', 'min-width': '1800px' }">
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
              class_col="flex-table-col-1"
              @sort-by="sortBy('login')"
              field="login"
            >Login</col1>
            <col1
              :sort="sort"
              :sortable="true"
              class_col="flex-table-col-1"
              @sort-by="sortBy('firstname')"
              field="firstname"
            >Фамилия</col1>
            <col1
              :sort="sort"
              :sortable="true"
              class_col="flex-table-col-1"
              @sort-by="sortBy('secondname')"
              field="secondname"
            >Имя</col1>
            <col1
              :sort="sort"
              :sortable="true"
              class_col="flex-table-col-1"
              @sort-by="sortBy('thirdname')"
              field="thirdname"
            >Отчество</col1>
            <col1
              :sort="sort"
              :sortable="true"
              class_col="flex-table-col-1"
              @sort-by="sortBy('phone1')"
              field="phone1"
            >Телефон</col1>
            <col1
              :sort="sort"
              :sortable="true"
              class_col="flex-table-col-1"
              @sort-by="sortBy('sum')"
              field="sum"
            >Сумма</col1>
            <col1
              :sort="sort"
              :sortable="true"
              class_col="flex-table-col-1"
              @sort-by="sortBy('st')"
              field="st"
            >Статус пайщика</col1>
            <col1
              :sort="sort"
              :sortable="true"
              class_col="flex-table-col-1"
              @sort-by="sortBy('type')"
              field="type"
            >Тип пайщика</col1>
            <col1
              :sort="sort"
              :sortable="true"
              class_col="flex-table-col-1"
              @sort-by="sortBy('status')"
              field="status"
            >Статус</col1>
            <col1
              :sort="sort"
              :sortable="true"
              class_col="flex-table-col-1"
              @sort-by="sortBy('role')"
              field="role"
            >Роль</col1>
            <col1 class_col="flex-table-col-1">Действия</col1>
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
            <div class="flex-table-col flex-table-col-1">
              <input
                class="form-control"
                type="text"
                @change="onChangeFilter('login')"
                v-model="filters.login"
              />
            </div>
            <div class="flex-table-col flex-table-col-1">
              <input
                class="form-control"
                type="text"
                @change="onChangeFilter('firstname')"
                v-model="filters.firstname"
              />
            </div>
            <div class="flex-table-col flex-table-col-1">
              <input
                class="form-control"
                type="text"
                @change="onChangeFilter('secondname')"
                v-model="filters.secondname"
              />
            </div>
            <div class="flex-table-col flex-table-col-1">
              <input
                class="form-control"
                type="text"
                @change="onChangeFilter('thirdname')"
                v-model="filters.thirdname"
              />
            </div>
            <div class="flex-table-col flex-table-col-1">
              <input
                class="form-control"
                type="text"
                @change="onChangeFilter('phone1')"
                v-model="filters.phone1"
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
            <div class="flex-table-col flex-table-col-1">
              <select
                class="form-control"
                @change="onChangeFilter('st')"
                v-model="filters.st"
              >
                <option value>Все</option>
                <option
                  v-for="(el, key) in user_model.st"
                  :key="key"
                  :value="el.value"
                >{{el.text}}</option>
              </select>
            </div>
            <div class="flex-table-col flex-table-col-1">
              <select
                class="form-control"
                @change="onChangeFilter('type')"
                v-model="filters.type"
              >
                <option value>Все</option>
                <option
                  v-for="(el, key) in user_model.type"
                  :key="key"
                  :value="el.value"
                >{{el.text}}</option>
              </select>
            </div>
            <div class="flex-table-col flex-table-col-1">
              <select
                class="form-control"
                @change="onChangeFilter('status')"
                v-model="filters.status"
              >
                <option value>Все</option>
                <option
                  v-for="(el, key) in user_model.status"
                  :key="key"
                  :value="el.value"
                >{{el.text}}</option>
              </select>
            </div>
            <div class="flex-table-col flex-table-col-1">
              <select class="form-control" @change="onChangeFilter('role')" v-model="filters.role">
                <option value>Все</option>
                <option
                  v-for="(el, key) in user_model.role"
                  :key="key"
                  :value="el.value"
                >{{el.text}}</option>
              </select>
            </div>
            <div class="flex-table-col flex-table-col-1"></div>
          </div>
        </template>
        <template v-slot:body>
          <div v-for="(el, key) in data" :key="key" class="flex-table-row">
            <div class="flex-table-col flex-table-col-1">{{el.id}}</div>
            <div class="flex-table-col flex-table-col-1">{{el.login}}</div>
            <div class="flex-table-col flex-table-col-1">{{el.firstname}}</div>
            <div class="flex-table-col flex-table-col-1">{{el.secondname}}</div>
            <div class="flex-table-col flex-table-col-1">{{el.thirdname}}</div>
            <div class="flex-table-col flex-table-col-1">{{el.phone1}}</div>
            <div class="flex-table-col flex-table-col-1">{{el.sum}}</div>
            <div class="flex-table-col flex-table-col-1">
              {{user_model.st.find(x => x.value == el.st)
              ? user_model.st.find(x => x.value == el.st).text
              : "не задано"}}
            </div>
            <div class="flex-table-col flex-table-col-1">
              {{user_model.type.find(x => x.value == el.type)
              ? user_model.type.find(x => x.value == el.type).text
              : "не задано"}}
            </div>
            <div class="flex-table-col flex-table-col-1">
              {{user_model.status.find(x => x.value == el.status)
              ? user_model.status.find(x => x.value == el.status).text
              : "не задано"}}
            </div>
            <div class="flex-table-col flex-table-col-1">
              {{user_model.role.find(x => x.value == el.role)
              ? user_model.role.find(x => x.value ==el.role).text
              : "не задано"}}
            </div>
            <div class="flex-table-col flex-table-col-1">
              <div class="btn-block">
                <router-link
                  :to="{ name: 'users_view', params: { id: el.id }}"
                  title="Открыть"
                  class="btn btn-primary"
                ><i class="far fa-eye"></i></router-link>
                <button
                  v-if="parseInt($store.getters['auth/profile'].role) >= 100"
                  title="Удалить"
                  class="btn btn-danger"
                  @click="remove(el.id)"
                ><i class="fas fa-minus-circle"></i></button>
              </div>
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
      api: api.users,
      user_model: user_model,
      data: []
    };
  },
  methods: {
    remove: function(id) {
      if (confirm("Вы уверены, что хотите удалить пользователя?")) {
        this.loading = true;
        axios({
          method: "delete",
          url: this.api,
          data: { ids: [id] },
          params: {}
        })
          .then(response => {
            this.loading = false;
            this.$root.$emit("show-info", {
              text: "Пользователь удален",
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