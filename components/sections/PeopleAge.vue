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
            label: "Idades vacinados com todas as doses",
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
      let countKids = this.$store.state.kids
      let countJovem = this.$store.state.jovem
      let countJovemAdulto = this.$store.state.jovemAdulto
      let countAdulto = this.$store.state.adulto
      let countMeiaIdade = this.$store.state.meiaIdade
      let countAdultoIdoso = this.$store.state.adultoIdoso
      let countIdoso = this.$store.state.idoso
      let dataCount = { countKids, countJovem, countJovemAdulto, countAdulto, countMeiaIdade, countAdultoIdoso, countIdoso }
      this.chartData.datasets[0].data.push(countKids, countJovem, countJovemAdulto, countAdulto, countMeiaIdade, countAdultoIdoso, countIdoso)
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