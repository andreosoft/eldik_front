<template>
  <form2
    :loading="this.$store.getters['auth/status'] == 'loading'"
    :title1="$root.appName"
    title2="Войти"
  >
    <template>
      <form class="login" @submit.prevent="submitForm" method="post" action>
        <p
          v-if="this.$store.getters['auth/status'] == 'error'"
          style="color: red"
        >{{ this.$store.getters['auth/error'] }}</p>
        <div class="form-group">
          <input
            class="form-control form-control-lg"
            :class="{'is-invalid': errors.login}"
            @change="validate('login', fields.login)"
            v-model="fields.login"
            type="text"
            :placeholder="labels.login"
          />
          <div v-if="errors.login" class="invalid-feedback">{{errors.login}}</div>
        </div>
        <div class="form-group">
          <input
            class="form-control form-control-lg"
            :class="{'is-invalid': errors.password}"
            @change="validate('password', fields.password)"
            v-model="fields.password"
            type="password"
            :placeholder="labels.password"
          />
          <div v-if="errors.password" class="invalid-feedback">{{errors.password}}</div>
        </div>
        <!-- <div class="text-right">
                <router-link :to="{ name: 'forget' }">напомнить пароль</router-link>
        </div>-->
        <div>
          <button
            type="submit"
            class="btn btn btn-outline-success btn-lg"
            style="width: 100%;"
          >Войти</button>
        </div>
      </form>
    </template>
  </form2>
</template>

<script>
import model from "@/models/login";
import form2 from "@/widgets/form2/form";
import mixingValidator from "@/mixings/validators";

export default {
  mixins: [mixingValidator],
  components: {form2},
  data: function() {
    return {
      loading: false,
      labels: model.labels,
      fields: new model.Fields().fields,
      errors: new model.Fields().fields
    };
  },
  methods: {
    submitForm: function() {
      if (this.validateAll(this.fields)) {
        this.submit();
      }
    },
    submit: function() {
      this.$store
        .dispatch("auth/login", {
          login: this.fields.login,
          password: this.fields.password
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(e => {
          this.error = e;
        });
    },
    validateAll: function(fields) {
      var noerror = true;
      for (var index in fields) {
        if (this.validate(index, fields[index])) {
          noerror = false;
        }
      }
      return noerror;
    },
    validate: function(field, value) {
      return (this.errors[field] = this.validator(
        model.validators[field],
        value
      ));
    }
  }
};
</script>
