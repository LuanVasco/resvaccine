<template>
  <section>
      <header>
        <h2 class="md:text-3xl lg:text-5xl font-medium text-center">Fabricantes</h2>
      </header>
      <div class="chart">
        <DoughnutChart v-if="getDataGraph" :chartData="chartData" :options="chartOptions" class="line-chart" />
      </div>
  </section>
</template>

<script>
import DoughnutChart from '../DoughnutChart.vue'
export default {
  components: { DoughnutChart },
  data() {
    return {
      chartData: {
        labels: ["PFIZER", "JANSSEN", "ASTRAZENECA/FIOCRUZ", "SINOVAC/BUTANTAN"],
        datasets: [
          {
            label: "Numbers",
            backgroundColor: ["#FFD600", "#FFF301", "#226888", "#398EB6"],
            fill: false,
            data: []
          }
        ]
      },
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
          backgroundColor: "#303030",
          titleFontColor: "#ffffff",
          bodyFontColor: "#ffffff",
          position: "nearest",
          mode: "nearest",
          intersect: 0,
          bodySpacing: 4,
          xPadding: 10,
          yPadding: 10,
        }
      },
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

<style>
.line-chart {
  width: 60vw;
  height: 50vh;
  margin: 2rem auto 0 auto;
}
</style>