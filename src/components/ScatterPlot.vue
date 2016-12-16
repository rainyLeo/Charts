<template>
<div id="warp">
	<div id="container"
			style="min-width: 310px; height: 400px; margin: 0 auto">
	</div>
	<div id="input">
		<table>
			<thead>
				<tr>
					<th></th>
					<th>X</th>
					<th>Y</th>
				</tr>
			</thead>
			<tbody v-for="(item, index) in data">
				<tr>
					<td>{{ item.name }}</td>
					<td>
						<input type="number"
								v-model="item.x"
								@change="handleData($event)">
					</td>
					<td>
						<input type="number"
								v-model="item.y"
								@change="handleData($event)">
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
</template>

<script>
import Highcharts from 'highcharts/highcharts'
import data from '../assets/scatterPlotData'
export default {
	name: 'ScatterPlot',
	data() {
		return {
			data: data
		}
	},
	computed: {},
	methods: {
		handleData(event) {
			let value = +event.target.value
			if (!value || value > 100 || value < -100) {
				window.alert('请输入 -100 ~ 100 之间的数字')
				event.target.value = ''
				return
			} else {
				this.renderChart()
			}
		},
		renderChart() {
			Highcharts.chart('container', {
				chart: {
					plotBorderWidth: 1
				},
				xAxis: {
					// min: 0,
					// step: 2,
					// max: 12,
					title: {
						text: 'Three-Year Volarity'
					},
					// lineColor: '#606060',
					gridLineColor: '#888',
					labels: {
						formatter: function() {
							return this.value + ' %'
						}
					}
				},
				yAxis: {
					// min: -4,
					// step: 2,
					// max: 12,
					title: {
						text: 'Three-year Annualized Return'
					},
					// lineColor: '#606060',
					gridLineColor: '#999',
					tickAmount: 8,
					labels: {
						step: 1,
						formatter: function() {
							return this.value + ' %'
						},
					}
				},
				title: {
					text: 'Risk/Return Profile of Hedge Funds with a Regional Focus'
				},
				legend: {
					enabled: false
				},
				series: [{
					type: 'scatter',
					enableName: false,
					data: data,
					marker: {
						radius: 3
					},
					dataLabels: {
						enabled: true,
						format: '{point.name}',
						style: {
							fontWeight: 'bold'
						}
					}
				}]
			})
		}
	},
	mounted() {
		this.renderChart()
	}
}
</script>


