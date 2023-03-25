<template>
   <!-- Footer -->
<footer class="text-center text-lg-start bg-white text-muted">
  <!-- Section: Social media -->
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <!-- Left -->
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <!-- Left -->

    <!-- Right -->
    <div>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-github"></i>
      </a>
    </div>
    <!-- Right -->
  </section>
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3 text-secondary"></i>Artcade
          </h6>
          <p>
            Our website is user-friendly and easy to navigate, allowing you to quickly find the products you need. We also offer helpful tips and resources, including instructional videos and blog posts, to inspire and guide you on your artistic journey.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Categories
          </h6>
          <p>
            Graphite Pencils
          </p>
          <p>
            Faber-Castell
          </p>
          <p>
           Correction & Stationary
          </p>
          <p>
           Office & Stationary
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <router-link class="text-decoration-none" to="/"><a
                  class="text-dark text-decoration-none home">Home</a></router-link>
          </p>
          <p>
            <router-link class="text-decoration-none" to="/about"><a
                  class="text-dark text-decoration-none home">About</a></router-link>
          </p>
          <p>
            <router-link class="text-decoration-none" to="/products"><a
                  class="text-dark text-center text-decoration-none products">Products</a></router-link>
          </p>
          <p>
            <router-link class="text-decoration-none" to="/contact"><a
                  class="text-dark text-decoration-none contact">Contact</a></router-link>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3 text-secondary"></i> Imam Haron Road, 374</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            artcade@gmail.com
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i> + 65 379 0754</p>
          <p><i class="fas fa-print me-3 text-secondary"></i> + 56 939 3728</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025);">
    © 2023 Copyright | Artcade
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
footer {
	padding: 60px 0; 
    box-shadow: 0px 0 19px rgba(4, 4, 4, 0.9);

}
.single-content {
	text-align: center;
	padding: 115px 0;
}
.single-box p {
	color: #fff;
	line-height: 1.9;
}
.single-box h3 {
	font-size: 16px;
	font-weight: 700;
	color: #fff;
}
.single-box .card-area i {
	color: #ffffff;
	font-size: 20px;
	margin-right: 10px;
}
.single-box ul {
	list-style: none;
	padding: 0;
}
.single-box ul li a {
	text-decoration: none;
	color: #fff;
	line-height: 2.5;
	font-weight: 100;
}
.single-box h2 {
	color: #fff;
	font-size: 20px;
	font-weight: 700;
}
/* #basic-addon2 {
	background: #fe1e4f;
	color: #fff;
} */
.socials i {
	font-size: 18px;
	margin-right: 15px;
}
@media (max-width: 767px) {
	.single-box {
		margin-bottom: 50px;
	}
}
@media (min-width: 768px) and (max-width: 991px) {
	.single-box {
		margin-bottom: 50px;
	}
}

img {
    width: 100px;
    height: 100px;
}

button {
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.9);
}

button:hover{
    background: linear-gradient(to right, #80ED99, #57CC99, #38A3A5);
}


</style>