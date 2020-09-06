<template>
  <div class="form-group row">
    <label class="col-form-label col-sm-4 text-right-sm">{{label}}:</label>
    <div class="col-sm-8">
      <div class="form-control" style="cursor: pointer;" @click="select_block=true">{{view}}</div>
    </div>
    <select-block v-if="select_block" @change="onChange" @close-menu="select_block=false"></select-block>
  </div>
</template>

<script>
import selectBlock from "@/views/users/selectClient.vue";

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
      select_block: false
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