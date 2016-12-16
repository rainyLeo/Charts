<template>
<div id="container"
		style="height: 400px">
</div>
</template>

<script>
import Highcharts from 'highcharts/highcharts'
import Highcharts3D from 'highcharts/highcharts-3d'
import $ from 'jquery'

Highcharts3D(Highcharts)

export default {
	name: 'hello',
	data() {
		return {
			msg: ''
		}
	},
	created() {

	},
	mounted() {
		var chart = new Highcharts.Chart({
			chart: {
				renderTo: 'container',
				margin: 100,
				type: 'scatter',
				options3d: {
					enabled: true,
					alpha: 10,
					beta: 30,
					depth: 250,
					viewDistance: 5,
					fitToPlot: false,
					frame: {
						bottom: {
							size: 1,
							color: 'rgba(0,0,0,0.02)'
						},
						back: {
							size: 1,
							color: 'rgba(0,0,0,0.04)'
						},
						side: {
							size: 1,
							color: 'rgba(0,0,0,0.06)'
						}
					}
				}
			},
			title: {
				text: 'Draggable box'
			},
			subtitle: {
				text: 'Click and drag the plot area to rotate in space'
			},
			plotOptions: {
				scatter: {
					width: 10,
					height: 10,
					depth: 10
				}
			},
			yAxis: {
				min: 0,
				max: 10,
				title: null
			},
			xAxis: {
				min: 0,
				max: 10,
				gridLineWidth: 1
			},
			zAxis: {
				min: 0,
				max: 10,
				showFirstLabel: false
			},
			legend: {
				enabled: false
			},
			series: [{
				name: 'Reading',
				colorByPoint: true,
				data: [
					[1, 6, 5],
					[8, 7, 9],
					[1, 3, 4],
					[4, 6, 8],
					[5, 7, 7],
					[6, 9, 6],
				]
			}]
		})

		$(chart.container)
			.on('mousedown.hc touchstart.hc', function(eStart) {
				eStart = chart.pointer.normalize(eStart)

				var posX = eStart.pageX,
					posY = eStart.pageY,
					alpha = chart.options.chart.options3d.alpha,
					beta = chart.options.chart.options3d.beta,
					newAlpha,
					newBeta,
					sensitivity = 5

				$(document)
					.on({
						'mousemove.hc touchdrag.hc': function(e) {
							// Run beta
							newBeta = beta + (posX - e.pageX) / sensitivity
							chart.options.chart.options3d.beta = newBeta

							newAlpha = alpha + (e.pageY - posY) / sensitivity
							chart.options.chart.options3d.alpha = newAlpha

							chart.redraw(false)
						},
						'mouseup touchend': function() {
							$(document)
								.off('.hc')
						}
					})
			})
	}

}
</script>

<style>
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
</style>
