<template>
  <div class="main">
 <div class="around">
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img :src="product?.imgURL" alt="">
          </div>
          <div class="col">
            <div class="data">
              <h3 class=" text-dark fw-bold name">{{ product?.prodName }}</h3>
              <h5 class="text-dark price">{{ product?.Price }}</h5>
              <br><br>
              <h5 class="text-dark fw-bold description">{{ product?.prodDescription }}</h5>
              <hr>
              <h5 class="text-dark">{{ product?.Category }}</h5>
              <hr>
            </div>
            <div class="img-wrap img-6">
<iframe src="https://my.spline.design/componentcolorpencilscopy-79f5ee8ff6935e84f8820af49467c8d2/" frameborder="0"></iframe>            </div>
          </div>
        </div>
      </div>
      <router-link to="/products"><a class="btn btn-transparent text-light border-dark mt-5 text-dark fw-bold back">Go
          Back</a></router-link>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
// import SpinnerComponent from "../components/SpinnerComponent.vue"

export default {
  // components: {
  //   SpinnerComponent
  // },

  setup() {
    const store = useStore();
    const product =
      computed(() => store.state.singleProduct);
    // const spinner =
    //   computed(() => store.getters.spinnerStatus);
    return {
      product
      // spinner
    }
  },
  mounted() {
    this.$store.dispatch("fetchSingleProduct", this.$route.params.id);
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
}

.name {
  font-family: 'Brush Script MT', cursive;
  color: aqua;
}

.price {
  font-family: 'Monospace', cursive;

}

.description {
  font-family: 'Fantasy', cursive;
}

.container {
  position: relative;
  /* width: 400px;
  height: 200px; */
  border-radius: 20px;
  padding: 100px;
  margin-top: 80px;
  box-shadow: 18px 18px 18px 18px #888888;
} 

.back {
  margin-left: 100px;
}

iframe {
  position: absolute;
  top: 0px;
  right: 0;
  width: 1319px;
  height: 600px;
  /* border: 3px solid #73AD21; */
  z-index: -1;
}

img {
  background: transparent;
}

hr {
  border-top: 4px dotted black;
}

.data {
  border: 3px dotted black;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 10px 10px 10px 10px rgb(162, 162, 162);
}

.back:hover {
  background: linear-gradient(to right, purple, violet);
  border: none;
}
</style>