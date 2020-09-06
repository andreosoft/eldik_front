<template>
  <form-modal @close-menu="$emit('close-menu')" :loading="loading" type="fullscreen">
    <template v-slot:title>
      <div>Выбрать клиента</div>
    </template>
    <template v-slot:body>
      <div>
        <table-clients
          @loading="onLoading"
          @change="onChangeClient"
        ></table-clients>
      </div>
    </template>
  </form-modal>
</template>

<script>
import FormModal from "@/widgets/form_modal1/FormModal.vue";
import tableClients from "./tableClients.vue";

export default {
  components: {
    tableClients,
    FormModal
  },
  data: function() {
    return {
      loading: false
    };
  },
  methods: {
    onLoading: function(v) {
      if (v) {
        this.loading = true;
      } else {
        this.loading = false;
      }
    },
    onChangeClient: function(v) {
      this.$emit("change", v);
    }
  }
};
</script>