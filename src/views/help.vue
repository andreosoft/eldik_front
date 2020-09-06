<template>
  <form1
    :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '', title: 'Помощь'}]"
    :loading="loading"
  >
    <template v-slot:title>Помощь</template>
    <template v-slot:right>
      <div class="btn-block">
        <button @click="$root.goBack()" class="btn btn-secondary">Назад</button>
      </div>
    </template>
    <template v-slot:body><div v-html="html.content"></div></template>
  </form1>
</template>

<script>
import form1 from "@/widgets/form1/form.vue";
import api from '@/config/api'
import axios from 'axios'

export default {
  components: {
    form1
  },
  data: function() {
    return {
      loading: false,
      html: []
    }
  },
  created () {
    this.getContent()
  },
  methods: {
    getContent: function() {
      this.loading = true
      axios
      .get(api.content, {params: {id: '1'} })
      .then(response => {
        this.loading = false
        if (response.data.status == 'ok') {
          this.html = response.data.data
        }
      })
      .catch(error => { console.log(error) })
    }
  }
}
</script>