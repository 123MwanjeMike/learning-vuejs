<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DemoComponent1 />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/DemoComponent1.vue'
import DemoComponent1 from './components/DemoComponent1.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    DemoComponent1,
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
