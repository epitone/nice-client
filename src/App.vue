<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Home msg="Welcome to Your Vue.js App" />
    <Result msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './views/Home.vue';
import Result from './views/Result.vue';

export default {
  name: 'App',
  components: {
    Home,
    Result,
  },
};
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
