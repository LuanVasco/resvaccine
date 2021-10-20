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
    var raw = JSON.stringify({
      "query": {
        "bool": {
          "must": [
            { "match": { "estabelecimento_municipio_nome": "RIBEIRAO PRETO"} },
            { "match": { "paciente_enumSexoBiologico": "M" }},
            { "match": { "vacina_descricao_dose": "1ª Dose" }}
          ]
        }
      }
    });

    const params = {
      method: 'POST',
      body: raw,
      headers: {
        "Authorization": "Basic aW11bml6YWNhb19wdWJsaWM6cWx0bzV0JjdyX0ArI1Rsc3RpZ2k=",
        "Content-Type": "application/json"
      },
      redirect: 'follow',
      params: {
        size: 1000,
      }
    }
    
    const response = await fetch("https://imunizacao-es.saude.gov.br/_search?scroll=1m", params).then(res => res.json());
    
    store.commit('setDados', response)

    return response
  },
}
</script>
