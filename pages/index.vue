<template>
  <div>
    <MenuHeader/>
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
            "Quem não se vacina não coloca apenas a própria
            saúde em risco, mas também a de seus familiares
            e outras pessoas com quem tem contato, além de
            contribuir para aumentar a circulação de doenças."
          </p>
          <div class="text-right">
            <small class="text-sm">
              <i>Pfzier</i>
            </small>
          </div>
        </div>
      </div>

      <SectionsSexo />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios }) {
    const session_url2 = "https://imunizacao-es.saude.gov.br/_count";
    const user1 = 'imunizacao_public';
    const pass = 'qlto5t&7r_@+#Tlstigi';
    const UF = 'SP';
    for(let i = 1; i <= 3; i++) {
      const response = await $axios.$post(session_url2,{
         "query": {
          "bool": {
            "must": [
              { "match": { "paciente_endereco_uf": { "query": `${UF}`, "operator": "and" }},},
              { "match": { "vacina_descricao_dose": { "query": `${i}ª Dose`, "operator": "and" }},}
            ]
          }
        }
      }, { 
        auth: { 
          username: user1, 
          password: pass 
        }
        })
        i == 1 
        ? store.commit('setPrimeiraDose', response.count) 
        : i == 2 
        ? store.commit('setSegundaDose', response.count) 
        : i== 3 
        ? store.commit('setTerceiraDose', response.count) 
        : '';
    }
    for(let i = 1; i <= 2; i++) {
    const response = await $axios.$post(session_url2,{
        "query": {
        "bool": {
          "must": [
            { "match": { "paciente_endereco_uf": { "query": `${UF}`, "operator": "and" }},},
            { "match": { "paciente_enumSexoBiologico": { "query": `${i == 1 ? 'F' : 'M'}`, "operator": "and" }},}
          ]
        }
      }
    }, { 
      auth: { 
        username: user1, 
        password: pass 
      }
      })
      i == 1 
      ? store.commit('setSexoFeminino', response.count) 
      : i == 2 
      ? store.commit('setSexoMasculino', response.count) 
      : '';
    }
    for(let i = 1; i <= 4; i++) {
    const response = await $axios.$post(session_url2,{
        "query": {
        "bool": {
          "must": [
            { "match": { "paciente_endereco_uf": { "query": `${UF}`, "operator": "and" }},},
            { "match": { "vacina_fabricante_nome": 
                { "query": i == 1 ? 'SINOVAC/BUTANTAN' 
                : i == 2 ? 'ASTRAZENECA/FIOCRUZ'
                : i == 3 ? 'PFIZER'
                : i == 4 ? 'JANSSEN'
                : '', 
                "operator": "and" }
              },
            }
          ]
        }
      }
    }, { 
      auth: { 
        username: user1, 
        password: pass 
      }
      })
      i == 1 
      ? store.commit('setFabBUTANTAN', response.count) 
      : i == 2 
      ? store.commit('setFabFIOCRUZ', response.count) 
      : i == 3
      ? store.commit('setFabPFIZER', response.count) 
      : i == 4
      ? store.commit('setFabJANSSEN', response.count)       
      : '';
    }
    for(let i = 1; i <= 7; i++) {
            
      const response = await $axios.$post(session_url2,{
      "query": {
        "bool": {
          "must": [
            { "match": { "paciente_endereco_uf": { "query": `${UF}`, "operator": "and" }},},
            { "range": 
              { "paciente_idade": i == 1 ? {"gte": 8, "lte": 15}            
                : i == 2 ? {"gte": 16, "lte": 25}
                : i == 3 ? {"gte": 26, "lte": 35}  
                : i == 4 ? {"gte": 36, "lte": 45}  
                : i == 5 ? {"gte": 46, "lte": 55}  
                : i == 6 ? {"gte": 56, "lte": 65}  
                : i == 7 ? {"gte": 66}
                : {}
              },}
          ]
        }
      }
    }, { 
      auth: { 
        username: user1, 
        password: pass 
      }
      })
      i == 1 
      ? store.commit('setKids', response.count) 
      : i == 2 
      ? store.commit('setJovem', response.count) 
      : i == 3
      ? store.commit('setJovemAdulto', response.count) 
      : i == 4
      ? store.commit('setAdulto', response.count)  
      : i == 5 
      ? store.commit('setMeiaIdade', response.count) 
      : i == 6
      ? store.commit('setAdultoIdoso', response.count) 
      : i == 7
      ? store.commit('setIdoso', response.count)       
      : '';
    }
      
  },
}
</script>
