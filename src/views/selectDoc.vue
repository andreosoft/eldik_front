<template>
  <form-modal @close-menu="$emit('close-menu')" :loading="loading" type="fullscreen">
    <template v-slot:title>
      <div>Выбрать документ оплаты</div>
    </template>
    <template v-slot:body>
      <div>
        <table-block
          @loading="onLoading"
          @change="onChange"
        ></table-block>
      </div>
    </template>
  </form-modal>
</template>

<script>
import FormModal from "@/widgets/form_modal1/FormModal.vue";
import tableBlock from "./tableDoc.vue";

export default {
  components: {
    tableBlock,
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
    onChange: function(v) {
      this.$emit("change", v);
    }
  }
};
</script>