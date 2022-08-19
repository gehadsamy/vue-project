<template>
  <div id="app">
    <!-- <login /> -->
     <DashBoard />

 </div>
</template>



<script>

import login from './components/login/login.vue';
import DashBoard from './components/dashboard/DashBoard.vue';
export default {
  name: 'App',
  components: {
    login,
    DashBoard
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
