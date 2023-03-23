<template>
  <div class="main">
    <NavBar/>
    <router-view></router-view>
    <FooterComponent/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterComponent from "./components/FooterComponent.vue";


  export default {
    components: {
     NavBar,
     FooterComponent

    }
  }
</script>

<style scoped>

</style>
