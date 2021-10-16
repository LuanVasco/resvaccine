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

