<template>
  <div>
    <NavBar/>
    <router-view></router-view>
    <FooterComponent/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterComponent from "./components/FooterComponent.vue";

// import { Application } from '@splinetool/runtime';

// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/iHYyKZ4yGxXRHVDV/scene.splinecode');


  export default {
    components: {
     NavBar,
     FooterComponent

    }
  }
</script>

<style scoped>

</style>
