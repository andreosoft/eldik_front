<template>
  <div class="form-group row">
    <label class="col-form-label col-sm-4 text-right-sm">{{label}}:</label>
    <div class="col-sm-8">
      <a :href="docs_upload + '/' + view" target="_blank"><img style="width: 100px; margin: 5px 10px 5px 0; " :src="docs_upload + '/' + view"/></a>
      <button class="btn btn-primary" @click="select_block=true">Выбрать</button>
    </div>
    <select-block v-if="select_block" @change="onChange" @close-menu="select_block=false"></select-block>
  </div>
</template>

<script>
import selectBlock from "@/views/selectDoc.vue";
import api from "@/config/api";

export default {
  components: {
    selectBlock
  },
  props: {
    value: String,
    label: {
      type: String,
      default: ""
    },
    error: {
      type: String,
      default: ""
    },
    view: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      select_block: false,
      docs_upload: api.docs_upload
    };
  },
  methods: {
    onChange: function(v) {
      this.select_block = false;
      this.$emit("input", v.id);
      this.$emit("change-view", v.view);
      this.$emit("change", v);
    }
  }
};
</script>