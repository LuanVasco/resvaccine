export const state = () => ({
  uf: [],
  city: "",
  data: [],
  primeira_dose: 0,
  segunda_dose: 0,
  terceira_dose: 0,
  sexo_feminino: 0,
  sexo_masculino: 0,
  fab_butantan: 0,
  fab_fiocruz: 0,
  fab_pfizer: 0,
  fab_janssen: 0,

  kids: 0,
  jovem: 0,
  jovemAdulto: 0,
  adulto: 0,
  meiaIdade: 0,
  adultoIdoso: 0,
  idoso: 0,
})

export const mutations = {
  setState(state, estado) {
    state.uf = estado
  },
  setCity(state, cidade) {
    state.city = cidade
  },
  setDados(state, infos) {
    state.data = infos
  },
  setPrimeiraDose(state, payload) {
    state.primeira_dose = payload
  },
  setSegundaDose(state, payload) {
    state.segunda_dose = payload
  },
  setTerceiraDose(state, payload) {
    state.terceira_dose = payload
  },
  setSexoFeminino(state, payload) {
    state.sexo_feminino = payload
  },
  setSexoMasculino(state, payload) {
    state.sexo_masculino = payload
  },
  setFabBUTANTAN(state, payload) {
    state.fab_butantan = payload
  },
  setFabFIOCRUZ(state, payload) {
    state.fab_fiocruz = payload
  },
  setFabPFIZER(state, payload) {
    state.fab_pfizer = payload
  },
  setFabJANSSEN(state, payload) {
    state.fab_janssen = payload
  },    


  setKids(state, payload) {
    state.kids = payload
  },
  setJovem(state, payload) {
    state.jovem = payload
  },
  setJovemAdulto(state, payload) {
    state.jovemAdulto = payload
  },
  setAdulto(state, payload) {
    state.adulto = payload
  },
  setMeiaIdade(state, payload) {
    state.meiaIdade = payload
  },
  setAdultoIdoso(state, payload) {
    state.adultoIdoso = payload
  },
  setIdoso(state, payload) {
    state.idoso = payload
  }
}

// export const actions = {
//    async getData({ commit, state }) {
//     const raw = JSON.stringify({
//       "query": {
//         "bool": {
//           "must": [
//             {
//               "match": {
//                 "estabelecimento_municipio_codigo": {
//                   "query": `${state.city}`,
//                   "operator": "and"
//                 }
//               }
//             }
//           ]
//         }
//       }
//     })
    
//     const params = {
//       method: "POST",
//       body: raw,
//       headers: {
//         common: {
//           "Authorization": "Basic aW11bml6YWNhb19wdWJsaWM6cWx0bzV0JjdyX0ArI1Rsc3RpZ2k=",
//           "Content-Type": "application/json"
//         }
//       },
//       redirect: 'follow',
//     }

//     const response = await fetch("https://imunizacao-es.saude.gov.br/_search?scroll=1m&size=10000", params).then(res => res.json())

//     commit('setDados', response)
//   }
// }