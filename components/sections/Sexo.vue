<template>
  <section class="my-20">
      <header>
        <h2 class="md:text-3xl lg:text-5xl font-medium text-center">
          Sexo
        </h2>
      </header>
      <div class="chart">
        <PieChart 
          v-if="getDataGraph" 
          :chartData="chartData" 
          :options="chartOptions" 
          class="line-chart" 
        />
      </div>
  </section>
</template>

<script>
import PieChart from '../PieChart.vue'
export default {
  components: { PieChart },
  data() {
    return {
      chartData: {
        labels: ["Feminino", "Masculino", "Não Informado"],
        datasets: [
          {
            label: "Numbers",
            backgroundColor: ["#3367D6", "#7BAAF7", "#C6DAFC"],
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
      let countFeminino = 0
      let countMasculino = 0
      let countNInf = 0
      data.map(item => {
        if(item._source.paciente_enumSexoBiologico == "F") {
          countFeminino += 1
        } else if(item._source.paciente_enumSexoBiologico == "M") {
          countMasculino += 1
        } else {
          countNInf += 1
        }
      })
      this.chartData.datasets[0].data.push(countFeminino, countMasculino, countNInf)
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