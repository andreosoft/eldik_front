<template>
  <div>
    <nav class="navbar navbar-dark bg-primary fixed-top">
      <div>
        <button class="btn-blank" @click="$root.showMenu = !$root.showMenu ">
          <i class="fal fa-bars"></i>
        </button>
        <div class="menu-title">
          <router-link :to="{name: 'index'}">{{ $root.appName }}</router-link>
        </div>
      </div>

      <div class="user-info">
        <span v-if="$store.getters['auth/profile'].role == 1">
          <span style="padding: 10px;">
            <i class="fas fa-user-tie"></i>
            {{user_model.st.find(x => x.value == $store.getters['auth/profile'].st)
            ? user_model.st.find(x => x.value == $store.getters['auth/profile'].st).text
            : "не задано"}}
          </span>
          <span style="padding: 10px;">
            <i class="far fa-money-bill-alt"></i>
            {{$store.getters['auth/profile'].sum}}
          </span>
        </span>
        <span class="d-none d-sm-inline">
          <span>{{$store.getters['auth/profile'].firstname}} {{$store.getters['auth/profile'].secondname}} {{$store.getters['auth/profile'].thirdname}}</span>
          <button class="btn-blank" @click="showUserModal = true" title="Профиль">
            <i class="fal fa-user"></i>
          </button>
          <user-modal v-if="showUserModal" @close="showUserModal = false"></user-modal>
        </span>
        <span>
          <button class="btn-blank" @click="$root.logout">
            <i class="fal fa-sign-out-alt" title="Выйти"></i>
          </button>
        </span>
      </div>
    </nav>
    <transition name="fade">
      <div class="info-message" v-if="$root.info.visible">{{$root.info.text}}</div>
    </transition>
  </div>
</template>


<script>
import UserModal from "@/views/common/userModal.vue";
import axios from "axios";
import api from "@/config/api";
import user_model from "@/models/user";

export default {
  name: "mainheader",
  data: function() {
    return {
      showUserModal: false,
      search: null,
      user_model: user_model
    };
  },
  components: {
    UserModal
  }
};
</script>

<style lang="scss">
.navbar {
  color: #303030;
  padding: 2px;
  height: 70px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
  button {
    color: #303030;
  }
  a {
    display: inline-block;
    color: #303030;
  }
  .menu-title {
    display: inline-block;
    color: #303030;
    font-size: 20px;
    padding: 0 10px 0 10px;
  }
  .store-bock {
    display: inline-block;
    margin-left: 20px;
    color: #303030;
  }
  .store-icon {
    font-size: 26px;
    padding: 0 10px 0 10px;
  }
  .store-select {
    width: auto;
    margin: 0 0 1px 20px;
  }
  .search-block {
    display: inline-block;
    margin: 0 20px 0 20px;
    flex-grow: 1;
    i {
      font-size: 26px;
    }
  }
  .cart-block {
    display: inline-block;
    margin: 0 20px 0 20px;
    i {
      font-size: 26px;
    }
  }
  .user-info {
    display: inline-block;
    margin: 0 20px 0 20px;
    i {
      font-size: 20px;
    }
  }
}
</style>
