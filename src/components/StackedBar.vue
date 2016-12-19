<template>
<div id="wrap">
	<div id="container"
			style="min-width: 310px; max-width: 800px; height: 400px; margin: 0 auto">
	</div>
	<div id="input">
		<table>
			<thead>
				<tr>
					<th>
					</th>
					<th>Net Inflow in 2015</th>
					<th>No Change in 2015</th>
					<th>Net Outflow in 2015</th>
				</tr>
			</thead>
			<tbody v-for="(item, index) in categories">
				<tr>
					<td>{{ item }}</td>
					<td>
						<input type="number"
								v-model="inflowData[index]"
								@change="handleData($event)">
					</td>
					<td>
						<input type="number"
								v-model="noChangeData[index]"
								@change="handleData($event)">
					</td>
					<td>
						<input type="number"
								v-model="outflowData[index]"
								@change="handleData($event)">
					</td>
				</tr>
			</tbody>
		</table>
		<button id="button"
				@click="handleClick">确定</button>
	</div>
</div>
</template>

<script>
import Highcharts from 'highcharts/highcharts'

export default {
	name: 'StackedBar',
	data() {
		return {
			outflowData: [43, 38, 42, 53],
			noChangeData: [2, 2, 4, 6],
			inflowData: [55, 60, 54, 41],
			categories: ['Over $1bn', '$500-999mn', '$100-499mn', 'Less than $100mn'],
			checked: false
		}
	},
	computed: {},
	methods: {
		handleData(event) {
			let value = +event.target.value
			if (!value || value > 100 || value < 0) {
				window.alert('请输入0 ~ 100之间的数字')
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
			Highcharts.chart('container', {
				chart: {
					type: 'bar'
				},
				title: {
					text: 'Assets Flows over 2015 by Fund Size'
				},
				xAxis: {
					categories: ['Over $1bn', '$500-999mn', '$100-499mn', 'Less than $100mn'],
				},
				yAxis: {
					min: 0,
					max: 100,
					title: {
						text: 'Proportion of Funds'
					},
					labels: {
						formatter: function() {
							return this.value + ' %'
						}
					}
				},
				legend: {
					reversed: true,
					symbolRadius: 0,
					symbolHeight: 7,
					symbolWidth: 7
				},
				tooltip: {
					pointFormat: '<b>{point.y:,.0f}%</b>'
				},
				plotOptions: {
					series: {
						stacking: 'normal'
					},
					bar: {
						dataLabels: {
							enabled: true,
							formatter: function() {
								return Highcharts.numberFormat(this.y, 0, '.') + '%'
							},
							color: 'black',
							borderColor: 'black',
							textOutline: 'none'
						}
					}
				},
				series: [{
					name: 'Net Outflow in 2015',
					data: this.outflowData,
					color: '#ca4c35',
				}, {
					name: 'No Change in 2015',
					data: this.noChangeData,
				}, {
					name: 'Net Inflow in 2015',
					data: this.inflowData,
					color: '#40A900',
				}]
			})
		}
	},
	mounted() {
		this.renderChart()
	}
}
</script>

<style>
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

#input {
	width: 80%;
	margin-top: 15px;
	margin-left: 25%;
}

table,
thead,
tbody,
tr,
th,
td {
	border: 1px solid #888
}

table {
	border-collapse: collapse;
	text-align: center;
	vertical-align: middle;
}

td {
	width: 150px
}

button {
	display: block;
	margin: 20px auto;
}
</style>
