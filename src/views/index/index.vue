<template>
  <div>
    <formAdmin v-if="$store.getters['auth/profile'].role == 100"></formAdmin>
    <formUser v-else></formUser>
  </div>
</template>

<script>
import formUser from "@/views/users/index1.vue";
import formAdmin  from "@/views/users/index.vue";

export default {
  components: {
    formAdmin,
    formUser 
    },
};
</script>