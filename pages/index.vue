<template>
  <div>
    <MenuHeader />
    <SectionsCidade/>
    <div class="container mx-auto px-4">
      <SectionsFabricante/>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}  
  },
  async asyncData({ $axios, store }) {
    const params = {
      auth: {
        username: 'imunizacao_public',
        password: 'qlto5t&7r_@+#Tlstigi'
      },
      params: {
        size: 1000
      },
    }
    const { hits } = await $axios.$get('https://imunizacao-es.saude.gov.br/_search?scroll=1m', params)
    let data = hits.hits
    store.commit('setDados', data)
    return { data }
  },
}
</script>
