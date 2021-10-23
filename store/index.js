export const state = () => ({
  uf: [],
  city: "",
  data: [],
})

export const mutations = {
  setState(state, estado) {
    state.uf = estado
  },
  setCity(state, cidade) {
    state.city = cidade
  },
  setDados(state, dados) {
    state.data = dados
  }
}

export const actions = {
   async getData({ commit, state }) {
    const raw = JSON.stringify({
      "query": {
        "bool": {
          "must": [
            {
              "match": {
                "estabelecimento_municipio_codigo": {
                  "query": `${state.city}`,
                  "operator": "and"
                }
              }
            }
          ]
        }
      }
    })
    
    const params = {
      method: "POST",
      body: raw,
      headers: {
        common: {
          "Authorization": "Basic aW11bml6YWNhb19wdWJsaWM6cWx0bzV0JjdyX0ArI1Rsc3RpZ2k=",
          "Content-Type": "application/json"
        }
      },
      redirect: 'follow',
    }

    const response = await fetch("https://imunizacao-es.saude.gov.br/_search?scroll=1m&size=10000", params).then(res => res.json())

    commit('setDados', response)
  }
}