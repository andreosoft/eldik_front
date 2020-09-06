<template>
  <form1
    :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '', title: 'Загрузить документ'}]"
    :loading="loading"
  >
    <template v-slot:title>Загрузить документ</template>
    <template v-slot:right>
      <div class="btn-block">
        <button @click="$root.goBack()" class="btn btn-secondary">Назад</button>
        <button @click="upload()" class="btn btn-primary">Загрузить файл</button>
      </div>
    </template>
    <template v-slot:body>
      <div v-if="result">
        <div>Файл загружен</div>
      </div>
      <div v-else>
        <div class="row" style="margin: 0 0 20px 0;">
          <div class="col-sm-4"></div>
          <div class="col-sm-8">
            <div>
              <input
                @change="onselectfile()"
                ref="file"
                type="file"
                style="display: none"
                :id="id+'-in'"
              />
              <label class="btn btn-secondary" :for="id+'-in'">Выберите документ для загрузки</label>
            </div>
            <div>
              <transition name="fade" v-if="file">
                <div class="file-image-el row" style="align-items: center;">
                  <div class="col-6">{{file.name}}</div>
                  <div class="col-6">
                    <div class="progress">
                      <div class="progress-bar" :style="{width: status + '%'}">{{status}}%</div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div>
          <b-textarea v-model="comment" label="Комментрий"></b-textarea>
        </div>
      </div>
    </template>
  </form1>
</template>

<script>
import form1 from "@/widgets/form1/form.vue";
import axios from "axios";
import api from "@/config/api";
import base_input from "@/mixings/base_input.js";

export default {
  mixins: [base_input],
  components: {
    form1
  },
  data() {
    return {
      loading: false,
      result: false,
      file: null,
      status: 0,
      id: null,
      comment: ""
    };
  },
  mounted() {
    this.id = this._uid;
  },
  methods: {
    onselectfile: function() {
      this.file = this.$refs.file.files[0];
    },
    upload: function() {
      this.status = 0;
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("name", this.file.name);
      formData.append("comment", this.comment);
      axios
        .post(api.doc_upload, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress: progressEvent => {
            this.status = parseInt(
              (progressEvent.loaded / progressEvent.total) * 100
            );
          }
        })
        .then(response => {
          if (response.data.status == "error") {
            this.$root.$emit("show-info", {
              text: "Ошибка записи \n" + response.data.massage,
              class: "error"
            });
          } else {
            this.$root.$emit("show-info", {
              text: "Данные записаны",
              class: "info"
            });
            this.result = true;
          }
        })
        .catch(function() {
          this.$root.$emit("show-info", {
            text: "Ошибка записи",
            class: "error"
          });
          console.log("FAILURE!!");
        });
    }
  }
};
</script>