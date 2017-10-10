<template>
  <div id="app">
    {{ message }}
  </div>
</template>

<script>

export default {
  name: 'app',
  data: {
    message: 'hello vue.'
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 300px;
  margin:0 auto;
  box-sizing: border-box;
}

</style>
