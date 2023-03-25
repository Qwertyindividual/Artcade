<template>
  <div class="master">
    <div class="container text-center">
      <div class="row">
        <div class="col" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h1>Welcome to Artcade</h1>
          <p>Artcade is a website that focuses on afforable but high-end quality art supplies.</p>
        </div>
        <div class="col">
          <iframe src="https://my.spline.design/miniroomartcopy-3f586c0ca49f1a3020ba08dc46313e40/" frameborder="0"
            width="500px" height="500px"></iframe>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
export default {
  mounted() {
    AOS.init();
  }
}
</script>

<style  scoped>
iframe {
  clip-path: polygon(0 0, 100% 1%, 100% 87%, 0 88%);
}

.master {
  background: linear-gradient(to right, lightblue, pink);
  width: 100%;
}

h1 {
  font-family: 'Fantasy', cursive;
}

p {
  font-family: 'Brush Script MT', cursive;
}

.container {
  margin: auto;
}
</style>