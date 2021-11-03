<template>
  <div>
    <h1>Chart</h1>
    <div class="chart-div">
      <LineChart :chartData="chartData" :options="chartOptions" class="line-chart" />
    </div>
  </div>
</template>

<script>
import LineChart from '../components/LineChart.vue'
export default {
  components: { LineChart },
  data() {
    return {
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [
          {
            label: "Numbers",
            borderColor: "#4bcc96",
            borderWidth: 4,
            pointBackgroundColor: "#000",
            pointRadius: 5,
            fill: false,
            data: [100, 150, 300, 200]
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
      }
    }
  }
}
</script>

<style>
.line-chart {
  width: 60vw;
  height: 50vh;
}
</style>