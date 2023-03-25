<template>
    <div class="div">
      <h3 class="text-center mt-3" data-aos="zoom-in" data-aos-offset="300">Connect with us</h3>
        <div class="container main text-center">
  <div class="row">
    <div class="col-6">
      
     <div>
      <form action="https://formspree.io/f/mdovlyqn">
       
        <div class="row mb-4 container">
    <div class="col-12">
      <div class="form-outline-dark text-start mb-4">
        <label class="form-label mb-2">First name</label>
        <input type="text" class="form-control bg-transparent" placeholder="FirstName" required/>
        
      </div>
    </div>
    <div class="col-12">
      <div class="form-outline-dark text-start mb-4">
        <label class="form-label">Last name</label>

        <input type="text" class="form-control bg-transparent" placeholder="LastName" required/>
      </div>
    </div>

    <div class="col-12 text-start mb-4">
     <label for="number" class="form-label">Cellphone number:</label>
               <input type="text" name="name" class="form-control bg-transparent" placeholder="Cellphone number" aria-label="Cellphone number" required>
    </div>
    <div class="col-12">
      <div class="form-outline-dark text-start mb-4">
       <label for="email" class="form-label">Email address:</label>
               <input type="email" name="email" class="form-control bg-transparent"  placeholder="name@example.com" required>
      </div>
    <div class="col-12">
      <div class="form-outline-dark text-start">
       <label for="email" class="form-label text-start">Message:</label>
               <input type="text" name="message" class="form-control bg-transparent text-start" placeholder="Message" required>
      </div>
  
 
    <div class="col-12">
    <button type="submit" class="btn btn-light submit bg-transparent">Submit</button>
   
      </div> 

    
     </div>
    </div>
  </div>

      </form>
     </div>


      
    </div>
    <div class="col-6">
      <iframe src="https://my.spline.design/roomrelaxingcopy-e8e4afc415ac87b98765033bd93fbaed/" frameborder="0" class="mt-4"></iframe>
    </div>
  </div>
</div>
<FooterComponent/>
    </div>
</template>

<script>
import AOS from 'aos';
import FooterComponent from "../components/FooterComponent.vue"
export default {
  mounted() {
    AOS.init();
  },
  components: {
    FooterComponent
  }
}
</script>

<style scoped>
.div {
    width: 100%;
    height: 140vh;
}

iframe {
    width: 100%;
    height: 90vh;
  clip-path: polygon(0 0, 100% 1%, 100% 87%, 0 88%);

}

h3 {
  font-family: 'Fantasy', cursive;
}

.main {
  margin-top: 80px;
  background: linear-gradient(to right, pink, lightblue, violet);
  box-shadow: 10px 10px 10px 10px rgb(162, 162, 162);
}

form {
  margin: 120px 0 0 70px;
  padding-bottom: 20px;
}

.form-label {
  font-family: 'Brush Script MT', cursive;
}

.form-control {
  font-family: 'Monospace', cursive;
}

button {
  margin-top: 40px;
}

</style>