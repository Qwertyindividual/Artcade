<template>
  <div class="main">
    <div class="main_div">
      <div v-if="spinner">
        <SpinnerComponent />
      </div>
      <div v-else class="container text-center"> <br> <br> <br> <br> <br>
        <div class="row">
          <div class="col">
            <img :src="product?.imgURL" alt="">
          </div>
          <div class="col pt-5">
            <h2 class="text-dark">{{ product?.prodName }}</h2>
            <h5 class="text-dark">{{ product?.Price }}</h5>
            <br><br>
            <h5 class="text-dark">{{ product?.prodDescription }}</h5>
            ---------------------------------
            <h5 class="text-dark">{{ product?.Category }}</h5>
            ---------------------------------
          </div>

        </div>
      </div>
      <router-link to="/products"><a class="btn btn-transparent text-light border-dark mt-5 text-dark fw-bold">Go
          Back</a></router-link>

    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import SpinnerComponent from "../components/SpinnerComponent.vue"

export default {
  components: {
    SpinnerComponent
  },

  setup() {
    const store = useStore();
    const product =
      computed(() => store.state.singleProduct);
    const spinner =
      computed(() => store.getters.spinnerStatus);
    return {
      product,
      spinner
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
</style>