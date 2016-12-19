<template>
<div>
  <div id="container"
    style="min-width: 310px; max-width: 600px; height: 400px; margin: 0 auto">
  </div>
  <div id="input"
    v-for="(value, index) in filtedData">
    <div>
      <label :for="value.name">{{ value.name }}</label>
      <input type="number"
        :id="value.name"
        v-model="value.y"
        @change="handleData($event)">
    </div>
  </div>
  <button id="button"
    @click="handleClick">确定</button>
</div>
</template>

<script>
import Highcharts from 'highcharts/highcharts'
import HighchartsMore from 'highcharts/highcharts-more'
HighchartsMore(Highcharts)

export default {
  name: 'WaterFall',
  data() {
    return {
      riskData: [{
        name: '债券',
        y: 1,
      }, {
        name: '股票',
        y: 7.3,
      }, {
        name: '私募股权',
        y: 10.9,
      }, {
        name: '对冲基金',
        y: 1.8,
      }, {
        name: '地产',
        y: 9.1,
      }, {
        name: '风险分散效应',
        y: -10.9,
      }, {
        name: '资产组合风险',
        isSum: true,
        color: Highcharts.getOptions()
          .colors[1]
      }],
      checked: false
    }
  },
  computed: {
    filtedData: function() {
      return this.riskData.slice(0, this.riskData.length - 1)
    }
  },
  methods: {
    handleData(event) {
      let value = +event.target.value
      if (!value || value > 20 || value < -20) {
        window.alert('请输入-20 ~ 20之间的数字')
        event.target.value = ''
        this.checked = false
        return
      } else {
        this.checked = true
      }
    },
    handleClick() {
      if (this.checked) {
        this.renderChart()
      } else {
        window.alert('请正确填写所有输入框')
      }
    },
    renderChart() {
      let data = this.riskData
      Highcharts.chart('container', {
        chart: {
          type: 'waterfall'
        },

        title: {
          text: '投资风险分析'
        },

        xAxis: {
          type: 'category'
        },

        yAxis: {
          title: {
            text: '风险'
          },
          labels: {
            formatter: function() {
              return this.value + ' %'
            }
          }
        },

        legend: {
          enabled: false
        },

        tooltip: {
          pointFormat: '<b>{point.y:,.2f}%</b> '
        },

        series: [{
          upColor: Highcharts.getOptions()
            .colors[2],
          color: Highcharts.getOptions()
            .colors[3],
          data: data,
          dataLabels: {
            enabled: true,
            formatter: function() {
              return Highcharts.numberFormat(this.y, 1, '.') + '%'
            },
            style: {
              fontWeight: 'bold'
            }
          },
          pointPadding: 0
        }]
      })
    }
  },
  mounted() {
    this.renderChart()
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

div#input {
  margin: 0 auto;
  width: 60%;
}

div#input div {
  /*overflow: hidden;*/
  text-align: right;
  padding-right: 35%;
}

div#input label {
  /*float: left;*/
  text-align: right;
  margin-right: 20px;
}

button {
  display: block;
  margin: 20px auto;
}
</style>
