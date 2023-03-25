<template>
  <div>
  <div class="master">
    <div class="container text-center">
      <div class="row">
        <div class="col description">
          <h1 data-aos="fade-right" data-aos-offset="300">Welcome to Artcade</h1>
          <p class="mb-4" data-aos="fade-left" data-aos-offset="300">Welcome to our online art supplies store, where you'll find everything you need to unleash your creativity and bring your artistic vision to life. We are dedicated to providing high-quality art materials at affordable prices, so you can focus on creating without breaking the bank.</p>
          <button class="btn btn-outline"><router-link to="/about" class="text-decoration-none">Learn More...</router-link></button>
        </div>
        <div class="col">
          <iframe src="https://my.spline.design/miniroomartcopy-3f586c0ca49f1a3020ba08dc46313e40/" frameborder="0"
            width="500px" height="500px"></iframe>
        </div>
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

<style scoped>
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

.description {
  margin: auto;
}

button {
  background: transparent;
  padding: 10px 15px;
  box-shadow: 18px 18px 18px 18px #888888;
}
</style>