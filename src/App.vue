<template>
  <EmpleadosComponent/>
</template>

<script>
import EmpleadosComponent from './components/EmpleadosComponent.vue'

export default {
  name: 'App',
  components: {
    EmpleadosComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
