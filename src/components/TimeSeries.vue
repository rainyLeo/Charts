<template>
<div id="container"
		style="min-width: 310px; height: 400px; margin: 0 auto">
</div>
</template>

<script>
import Highcharts from 'highcharts'
// import Highcharts from 'highcharts/highstock'
import {
	data1,
	data2
} from '../assets/timeData.js'

export default {
	name: 'ScatterPlot',
	data() {
		return {
			msg: ''
		}
	},
	mounted() {
		Highcharts.chart('container', {
			// chart: {
			// 	zoomType: 'x',
			// 	plotBorderWidth: 1
			// },
			// rangeSelector: {
			// 	selected: 4
			// },
			title: {
				text: 'Rolling Volatitity and Shape Ratio of Hedge Funds'
			},
			xAxis: {
				type: 'datetime',
			},
			yAxis: [{
				yAxis: 0,
				min: 0,
				max: 12,
				title: {
					text: 'Three-Year Volatitity'
				},
				// startOnTick: true,
				labels: {
					formatter: function() {
						return this.value + ' %'
					}
				},
				// plotLines: [{
				// 	value: 0,
				// 	width: 2,
				// 	color: 'silver'
				// }]
			}, {
				yAxis: 1,
				title: {
					text: 'Three-Year Ratio(RFR=2)'
				},
				gridLineColor: '#BBB',
				opposite: true
			}, ],
			legend: {
				enabled: true,
				reversed: true,
				symbolRadius: 0,
				symbolHeight: 7,
				symbolWidth: 7
			},
			plotOptions: {
				series: {
					compare: 'normal',
					showInNavigator: true
				},
				// line: {
				// 	stacking: 'normal'
				// },
				// area: {
				// 	stacking: 'normal'
				// }
			},
			tooltip: {
				// pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
				valueDecimals: 2,
				split: true
			},

			series: [{
				yAxis: 0,
				type: 'line',
				name: 'Volarity',
				data: data1,
				lineWidth: 1,
				color: '#E00223',
				zIndex: 10
			}, {
				yAxis: 1,
				type: 'area',
				name: 'Shape Ratio',
				data: data2,
				lineWidth: 0,
				color: '#1991A1',
				zIndex: 1
			}]
		})
	}
}
</script>