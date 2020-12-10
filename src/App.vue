<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="handleClick">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import speechInstance from './speech'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    handleClick() {
      console.log('点击了logo')
      this.$textToSpeech.initSpeech('测试文字')
    }
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
