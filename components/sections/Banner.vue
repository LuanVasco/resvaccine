<template>
  <div class="banner-box container mx-auto text-center flex-1">
    <h1 class="text-4xl font-medium">
      Selecione seu estado e cidade
    </h1>
    <form 
      class="flex w-4/12 mt-6 mx-auto"
      @change="getInfo"
    >
      <select class="w-32" name="Estado" id="estado">
        <option 
          v-for="uf in states"
          :key="uf.value"
          :value="uf.value"
        >
          {{ uf.text }}
        </option>
        
      </select>
      <select class="w-5/6 ml-6" name="Cidades" id="cidades">
        <option 
          :value="null"
        >
          Selecione sua cidade
        </option>
        <option 
          v-for="(city, index) in uf"
          :value="city.nome" 
          :key="index"
         
        >
          {{ city.nome }}
        </option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      states: [
        { value: null, text: "UF" },
        { value: "AC", text: "Acre" },
        { value: "AL", text: "Alagoas" },
        { value: "AP", text: "Amapá" },
        { value: "AM", text: "Amazonas" },
        { value: "BA", text: "Bahia" },
        { value: "CE", text: "Ceará" },
        { value: "DF", text: "Distrito Federal" },
        { value: "ES", text: "Espírito Santo" },
        { value: "GO", text: "Goiás" },
        { value: "MA", text: "Maranhão" },
        { value: "MT", text: "Mato Grosso" },
        { value: "MS", text: "Mato Grosso do Sul" },
        { value: "MG", text: "Minas Gerais" },
        { value: "PA", text: "Pará" },
        { value: "PB", text: "Paraíba" },
        { value: "PR", text: "Paraná" },
        { value: "PE", text: "Pernambuco" },
        { value: "PI", text: "Piauí" },
        { value: "RJ", text: "Rio de Janeiro" },
        { value: "RN", text: "Rio Grande do Norte" },
        { value: "RS", text: "Rio Grande do Sul" },
        { value: "RO", text: "Rondônia" },
        { value: "RR", text: "Roraima" },
        { value: "SC", text: "Santa Catarina" },
        { value: "SP", text: "São Paulo" },
        { value: "SE", text: "Sergipe" },
        { value: "TO", text: "Tocantins" }
      ]
    }
  },
  computed: {
    uf() {
      return this.$store.state.uf
    }
  },
  methods: {
    getInfo(event) {
      if(event.target.id == "estado") {
        this.getCity(event.target.value)
      }
      if(event.target.id == "cidades") {
        this.$store.commit('setCity', event.target.value)
      }
    },
    async getCity(state) {
      let cities = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`).then(res => res.json())
      this.$store.commit('setState', cities)
    }
  },
}
</script>

<style lang="scss" scoped>
.banner-box {
  select {
    background-color: transparent;
    border: 3px solid #000;
    border-radius: 1.5rem;
    padding: 12px;
    font-weight: 500;
  }
}
</style>