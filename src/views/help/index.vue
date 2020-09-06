<template>
  <form1
    :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '', title: 'Помощь'}]"
    :loading="loading"
  >
    <template v-slot:title>Помощь</template>
    <template v-slot:right>

    </template>
    <template v-slot:body>
      
    </template>
  </form1>
</template>

<script>
import form1 from "@/widgets/form1/form.vue";

export default {
  components: {
    form1
  }
};
</script>