import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/water-fall',
    name: 'water-fall',
    component: require('./components/WaterFall.vue')
  }, {
    path: '/stacked-bar',
    name: 'stacked-bar',
    component: require('./components/StackedBar.vue')
  },
   {
    path: '/stacked-bar2',
    name: 'stacked-bar2',
    component: require('./components/StackedBar2.vue')
  },
  {
    path: '/scatter-plot',
    name: 'scatter-plot',
    component: require('./components/ScatterPlot.vue')
  },
  {
    path: '/time-series',
    name: 'time-series',
    component: require('./components/TimeSeries.vue')
  },
  {
    path: '/3d-scatter',
    name: '3d-scatter',
    component: require('./components/3dScatter.vue')
  }
]

const router = new VueRouter({routes})

export default router
