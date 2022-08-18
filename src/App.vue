<template>
  <div id="app">
    <login />
  </div>
</template>



<script>

import login from './components/login/login.vue';
export default {
  name: 'App',
  components: {
    login,  
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}

</style>
