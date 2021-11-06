<template>
  <div>
    <MenuHeader />
    <div class="container mx-auto my-20 px-4">
      <SectionsFabricante/>
      <img 
        src="/fabricantes.png" 
        alt="Fabricantes"
        class="mx-auto my-20"
      />

      <SectionsPeopleAge />

      <div class="flex items-center justify-between my-20">
        <div class="w-1/2">
          <img src="/idade-vacinado.png" alt="Idade Vacinados">
        </div>
        <div class="w-1/2">
          <p class="text-2xl">
            Quem não se vacina não coloca apenas a própria
            saúde em risco, mas também a de seus familiares
            e outras pessoas com quem tem contato, além de
            contribuir para aumentar a circulação de doenças.
          </p>
        </div>
      </div>

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
