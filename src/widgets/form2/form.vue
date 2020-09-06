<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10 col-md-8 col-lg-5 text-center" style="margin: 0 auto;">
        <h2 style="color:#fff">{{title1}}
        </h2>
        <div class="login-panel">
          <loader v-if="loading"></loader>
          <div>
            <h3>
              {{title2}}
            </h3>
            <hr />
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loader from "@/views/common/loader.vue";

export default {
  components: {
    loader
  },
  props: {
    title1: {
      type: String,
      default: ""
    },
    title2: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>