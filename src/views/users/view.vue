<template>
  <form1
    :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '#/users', title: 'Пользователи'}, {url: '', title: fields.login}]"
    :loading="loading"
  >
    <template v-slot:title>{{fields.login}}</template>
    <template v-slot:right>
      <div class="btn-block">
        <button @click="$root.goBack()" class="btn btn-secondary">Назад</button>
        <router-link
          :to="{ name: 'users_update', params: { id: fields.id }}"
          class="btn btn-primary"
        >Изменить</router-link>
      </div>
    </template>
    <template v-slot:body>
      <div class="row">
        <div class="col-lg-6">
          <view1 :label="labels.id">{{fields.id}}</view1>
          <view1 :label="labels.login">{{fields.login}}</view1>
          <view1 :label="labels.firstname">{{fields.firstname}}</view1>
          <view1 :label="labels.secondname">{{fields.secondname}}</view1>
          <view1 :label="labels.thirdname">{{fields.thirdname}}</view1>
          <view1 :label="labels.st">
            {{user_model.st.find(x => x.value == fields.st)
            ? user_model.st.find(x => x.value == fields.st).text
            : "не задано"}}
          </view1>
          <view1 :label="labels.type">
            {{user_model.type.find(x => x.value == fields.type)
            ? user_model.type.find(x => x.value == fields.type).text
            : "не задано"}}
          </view1>
          <view1 :label="labels.sum">{{fields.sum}}</view1>
          <view1 :label="labels.citizenship">{{fields.citizenship}}</view1>
          <view1 :label="labels.pass_num">{{fields.pass_num}}</view1>
          <view1 :label="labels.pass_taken">{{fields.pass_taken}}</view1>
          <view1 :label="labels.pass_then">{{fields.pass_then}}</view1>
          <view1 :label="labels.pass_end">{{fields.pass_end}}</view1>
        </div>
        <div class="col-lg-6">
          <view1 :label="labels.inn">{{fields.inn}}</view1>
          <view1 :label="labels.address_reg">{{fields.address_reg}}</view1>
          <view1 :label="labels.address_live">{{fields.address_live}}</view1>
          <view1 :label="labels.phone1">{{fields.phone1}}</view1>
          <view1 :label="labels.phone2">{{fields.phone2}}</view1>
          <view1 :label="labels.phone3">{{fields.phone3}}</view1>
          <view1 :label="labels.email">{{fields.email}}</view1>
          <template v-if="fields.role == 1">
            <view1 :label="labels.updatedst">{{fields.updatedst}}</view1>
            <view1 :label="labels.status">
              {{user_model.status.find(x => x.value == fields.status)
              ? user_model.status.find(x => x.value == fields.status).text
              : ""}}
            </view1>
          </template>
          <view1 :label="labels.role">
            {{user_model.role.find(x => x.value == fields.role)
            ? user_model.role.find(x => x.value == fields.role).text
            : ""}}
          </view1>
        </div>
      </div>
    </template>
  </form1>
</template>

<script>
import api from "@/config/api";
import user_model from "@/models/user";
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
      api: api.users,
      fields: {},
      labels: user_model.labels,
      user_model: user_model
    };
  }
};
</script>