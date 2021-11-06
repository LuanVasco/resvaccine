<template>
  <section class="my-20">
      <header>
        <h2 class="md:text-3xl lg:text-5xl font-medium text-center">
          Idade Vacinados
        </h2>
      </header>
      <div class="chart">
        <BarChart 
          v-if="getDataGraph" 
          :chartData="chartData" 
          :options="chartOptions" 
          class="line-chart" 
        />
      </div>
  </section>
</template>

<script>
import BarChart from '../BarChart.vue'
export default {
  components: { BarChart },
  data() {
    return {
      chartData: {
        labels: ["0-15", "16-25", "26-35", "36-45", "46-55", "56-65", "65+"],
        datasets: [
          {
            label: "Idades vacinados",
            backgroundColor: ["#ff0000", "#FFF301","#398EB6", "#FFD600", "#f2713b", "#1583eb", "#ea0f6d"],
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
      let countKids = 0
      let countJovem = 0
      let countJovemAdulto = 0
      let countAdulto = 0
      let countMeiaIdade = 0
      let countAdultoIdoso = 0
      let countIdoso = 0
      data.map(item => {
        if(item._source.paciente_idade <= 15) {
          countKids += 1
        } else if(item._source.paciente_idade > 16 && item._source.paciente_idade <= 25) {
          countJovem += 1
        } else if(item._source.paciente_idade > 26 && item._source.paciente_idade <= 35) {
          countJovemAdulto += 1
        } else if(item._source.paciente_idade > 36 && item._source.paciente_idade <= 45) {
          countAdulto += 1
        } else if(item._source.paciente_idade > 46 && item._source.paciente_idade <= 55) {
          countMeiaIdade += 1
        } else if(item._source.paciente_idade > 56 && item._source.paciente_idade <= 65) {
          countAdultoIdoso += 1
        } else {
          countIdoso += 1
        }
      })
      this.chartData.datasets[0].data.push(countKids, countJovem, countJovemAdulto, countAdulto, countMeiaIdade, countAdultoIdoso, countIdoso)
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