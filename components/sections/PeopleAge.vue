<template>
  <section class="my-10">
      <header>
        <h2 class="md:text-3xl lg:text-5xl font-medium text-center">
          Idade Vacinados
        </h2>
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
        labels: ["0-20", "21-40", "41-60", "60+"],
        datasets: [
          {
            label: "Numbers",
            backgroundColor: ["#FFD600", "#000000", "#226888", "#398EB6"],
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
      let countJovem = 0
      let countAdulto = 0
      let countMeiaIdade = 0
      let countIdoso = 0
      data.map(item => {
        if(item._source.paciente_idade <= 20) {
          countJovem += 1
        } else if(item._source.paciente_idade > 20 && item._source.paciente_idade <= 40) {
          countAdulto += 1
        } else if(item._source.paciente_idade > 40 && item._source.paciente_idade <= 60) {
          countMeiaIdade += 1
        } else {
          countIdoso += 1
        }
      })
      this.chartData.datasets[0].data.push(countJovem, countAdulto, countMeiaIdade, countIdoso)
      return data
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