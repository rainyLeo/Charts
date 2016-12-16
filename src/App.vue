<template>
<div id="app">
  <div id="route">
    <router-link to="/water-fall">WaterFall</router-link>
    <router-link to="/stacked-bar">StackedBar</router-link>
    <router-link to="/stacked-bar2">StackedBar2</router-link>
    <router-link to="/scatter-plot">ScatterPlot</router-link>
    <router-link to="/time-series">TimeSeries</router-link>
    <router-link to="/3d-scatter">3D-Scatter</router-link>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
// import WaterFall from './components/WaterFall'
// import StackedBar from './components/StackedBar'
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 30px;
}

#app a {
  display: inline-block;
  text-decoration: none;
  margin-right: 10px;
}

#route {
  margin-bottom: 20px;
}
</style>
