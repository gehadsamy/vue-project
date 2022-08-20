<template>
  <div id="app">
    <!-- <login /> -->
     <DashBoard />
         <!-- <Posts /> -->
      <!-- <NavBar /> -->

 </div>
</template>



<script>

// import login from './components/login/login.vue';
import DashBoard from './components/dashboard/DashBoard.vue';
// import NavBar from './components/NavBar/NavBar.vue';

import 'babel-polyfill';
// import Posts from './components/posts/posts.vue';
export default {
  name: 'App',
  components: {
    // login,
    DashBoard,
    // Posts
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
