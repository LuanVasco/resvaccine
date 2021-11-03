<template>
  <div>
    <MenuHeader />
    <SectionsCidade/>
    <div class="container mx-auto px-4">
      <SectionsFabricante/>
      <SectionsPeopleAge />
      <SectionsSexo />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        
    }  
  },
  computed: {
    getCity() {
      return this.$store.state.city
    }
  },
  watch: {
    getCity(value) {
      console.log(value)
      this.$store.dispatch('getData')
    }
  },
  
  async asyncData({ store, $axios }) {
    const raw = JSON.stringify({
      "query": {
        "bool": {
          "must": [
            {
              "match": {
                "estabelecimento_uf": {
                  "query": `SP`,
                  "operator": "and"
                }
              }
            }
          ]
        }
      }
    })
    
    const params = {
      method: 'POST',
      body: raw,
      headers: {
        "Authorization": "Basic aW11bml6YWNhb19wdWJsaWM6cWx0bzV0JjdyX0ArI1Rsc3RpZ2k=",
        "Content-Type": "application/json"
      },
      redirect: 'follow',
    }
  
    try {
      const response = await fetch("https://imunizacao-es.saude.gov.br/_search?scroll=1m&size=10000", params).then(res => res.json());

      store.commit('setDados', response.hits.hits)

      return response.hits.hits
      
    } catch(error) {
      console.error(error);
    }
        
  },
}
</script>
