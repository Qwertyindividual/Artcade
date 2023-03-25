<template>
  <div>
    <div class="container-fluid">
  <div class="row">
    <div class="col-6 about text-center">
      
      <h3 data-aos="fade-right" data-aos-offset="300">Learn More About Artcade</h3>
            <p data-aos="fade-left" data-aos-offset="300">We carry products from some of the top brands in the industry, such as Winsor & Newton, Faber-Castell, Derwent, and Prismacolor, as well as many other trusted names.</p>
 </div>
    <div class="col-6">
      <iframe src="https://my.spline.design/componentuicopy-4285c25623894bec7f0e5eb4d8e98514/" frameborder="0"></iframe>
    </div>
  </div>
</div>
<!-- <p class="one">Whether you're a professional artist, a hobbyist, or just starting out, we have something for everyone. Our selection includes products suitable for various mediums, such as watercolor, acrylic, oil, pastel, and charcoal. We also have a variety of tools and accessories to help you perfect your craft, such as easels, palettes, and studio organizers.</p>
<p class="two">Our website is user-friendly and easy to navigate, allowing you to quickly find the products you need. We also offer helpful tips and resources, including instructional videos and blog posts, to inspire and guide you on your artistic journey.</p> -->
<div class="container text-center mt-5 mb-5">
  <div class="row">
    <div class="col-6">
      <p class="one">Whether you're a professional artist, a hobbyist, or just starting out, we have something for everyone. Our selection includes products suitable for various mediums, such as watercolor, acrylic, oil, pastel, and charcoal. We also have a variety of tools and accessories to help you perfect your craft, such as easels, palettes, and studio organizers.</p>
 </div>
    <div class="col-6">
      <p class="two">Our website is user-friendly and easy to navigate, allowing you to quickly find the products you need. We also offer helpful tips and resources, including instructional videos and blog posts, to inspire and guide you on your artistic journey.</p> 

    </div>
  </div>
</div>
  </div>
</template>

<script>
import AOS from 'aos';

  export default {
    mounted() {
    AOS.init();
  }
  }
</script>

<style scoped>
iframe {
  width: 100%;
  height: 90vh;
    clip-path: polygon(0 0, 100% 1%, 100% 87%, 0 88%);

}

.about {
  margin: auto;
}

.container-fluid {
  background: linear-gradient(to right, pink, violet, lightblue);
}

.one, .two {
  font-family: 'Monospace', cursive;
  font-size: large;
}

</style>
