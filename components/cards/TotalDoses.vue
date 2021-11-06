<template>
  <main class="total-doses-box container mx-auto">
    <section class="doses-box flex justify-between items-center p-8">
      <div 
        class="dose-box" 
        v-for="(dose, index) in infoTotalDoses"
        :key="index"
      >
        <h4 class="text-3xl font-medium mb-5">{{ dose.title }}</h4>
        <div class="valor-box rounded-xl">
          <p class="text-4xl font-bold">
            {{ dose.valor }}
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      infoTotalDoses: [
        {
          title: 'Doses aplicadas',
          valor: 80000000
        },
        {
          title: '1ª Dose Aplicada',
          valor: 40000000
        },
        {
          title: '2ª Dose e Dose Única',
          valor: 35000000
        },
        {
          title: 'Dose Reforço',
          valor: 5000000
        },
      ]
    }
  },
  computed: {
    getDataGraph() {
      let data = this.$store.state.data
      let countJan = 0
      let countBtt = 0
      let countFio = 0
      let countPfz = 0
      data.map(item => {
        if(item._source.vacina_fabricante_nome == "SINOVAC/BUTANTAN") {
          countBtt += 1
        } else if(item._source.vacina_fabricante_nome == "ASTRAZENECA/FIOCRUZ") {
          countFio += 1
        } else if(item._source.vacina_fabricante_nome == "PFIZER") {
          countPfz += 1
        } else {
          countJan += 1
        }
      })
      let dataCount = { countPfz, countJan, countFio, countBtt }
      this.chartData.datasets[0].data.push(countPfz, countJan, countFio, countBtt)
      return dataCount
    }
  }
}
</script>

<style lang="scss">
.total-doses-box {
  background-color: #EFEFEF;
  border-radius: 50px;
  .doses-box {
    height: 280px;
  }
  .dose-box {
    flex: 1;
    margin: 0 18px;
  }
  .valor-box {
    background-color: #9E34B8;
    color: #EFEFEF;
    height: 123px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>