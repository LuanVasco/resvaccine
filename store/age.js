export const state = () => ({
  kids: 0,
  jovem: 0,
  jovemAdulto: 0,
  adulto: 0,
  meiaIdade: 0,
  adultoIdoso: 0,
  idoso: 0,
})

export const mutations = {
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