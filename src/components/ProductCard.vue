<template>
  <div class="">
    <br />
    <br /><br /><br /><br />
    <div class="container">
      <div class="row my-2">
        <div class="col-md col">
          <div class="shop">
            <select
              class="btn btn-light text-start"
              required
              v-model="Category"
            >
              <option value="" selected>All categories</option>
              <option value="Faber-Castell">Faber-Castell</option>
              <option value="Erasers & Statioanary">
                Erasers & Corrections
              </option>
              <option value="Correction & Stationary">
                Correction & Stationary
              </option>
              <option value="Office & Stationary">Office & Stationanry</option>
              a
              <option value="Art Set">Art Set</option>
              <option value="Graphite Pencils">Graphite Pencils"</option>
            </select>
            <div class="input-group" style="width: 15%">
              <input
                type="search"
                v-model="searchByName"
                class="form-control rounded"
                placeholder="Search name"
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </div>
            <button
              class="form-control btn btn-transparent border-dark sortBtn text-center m-auto d-flex"
              @click.prevent="SortByPrice"
            >
              Price<i class="bi bi-arrow-down-up ps-4`"></i></button
            ><br />
            <button
              class="form-control btn btn-transparent border-dark sortBtn text-center m-auto d-flex"
              @click.prevent="SortByName"
            >
              Name<i class="bi bi-arrow-down-up ps-4`"></i></button
            ><br />
          </div>
        </div>
      </div>

      <div v-if="spinner">
        <SpinnerComponent />
      </div>
      <div
        v-else
       
        class="p-2 m-5 mx-auto loop"
     
      >
        <div class="container">
          <div class="row">
            <div class="col-4 py-5"    v-for="id in search" :key="id"
        data-aos="zoom-in"
        data-aos-duration="3000">
              <div class="section text-center py-5 py-md-0">
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="pricing-wrap">
                        <img :src="id.imgURL" alt="" class="product">
                        <h4 class="mb-5">{{ id.prodName }}</h4>
                        <!-- <h2 class="mb-2"><sup>$</sup>39 / 4<sup>hrs</sup></h2> -->
                        <h6 class="mb-4">{{ id.prodDescription }}</h6>
                        <p class="mb-1">
                          <i class="uil uil-location-pin-alt size-22"></i>
                        </p>
                        <p class="mb-4">{{ id.Category }}</p>
                        <a href="#0" class="link">Choose Date</a>
                        <div class="img-wrap img-2">
                          <img
                            src="https://assets.codepen.io/1462889/sea.png"
                            alt=""
                          />
                        </div>
                        <div class="img-wrap img-1">
                          <!-- <img
                            src="https://assets.codepen.io/1462889/kayak.png"
                            alt=""
                          /> -->
                          <iframe src="https://my.spline.design/componentcolorpencilscopy-51a27c12c8e014765ccecbff3c3c8872/" frameborder="0"></iframe>
                        </div>
                        <div class="img-wrap img-3">
                          <img
                            src="https://assets.codepen.io/1462889/water.png"
                            alt=""
                          />
                        </div>
                        <div class="img-wrap img-6">
                          <img
                            src="https://assets.codepen.io/1462889/Stone.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import SpinnerComponent from "../components/SpinnerComponent.vue";

export default {
  data() {
    return {
      searchByName: "",
      Category: "",
    };
  },
  components: {
    SpinnerComponent,
  },
  methods: {
    SortByPrice() {
      this.$store.commit("SortProductsByPrice");
    },
    SortByName() {
      this.$store.commit("SortProductsByName");
    },
  },
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    // store.dispatch("performSearch");
    const products = computed(() => store.state.products);
    const spinner = computed(() => store.getters.spinnerStatus);
    // const searchResults =
    //   computed(() => store.getters.getSearchResults);
    // const filteredProducts =
    //   computed(() => store.getters.filteredProducts);

    // const searchByName = (searchByName) => {
    //   store.state.searchByName;
    //   store.commit("setSearchByName", searchByName);
    // };

    //     const setCategory = (category) => {
    //       store.commit('setCategory', category);
    //       store.dispatch('performSearch');
    // };
    return {
      products,
      spinner,
      // searchResults,
      // searchByName,
      // setCategory,
      // filteredProducts
    };
  },
  computed: {
    search() {
      let filteredByCategory = this.products.filter( (item) => item.Category == this.Category || this.Category == "");
      if (this.searchByName.trim().length > 0) {
        return filteredByCategory.filter((input) =>
          input.prodName
            .toLowerCase()
            .includes(this.searchByName.trim().toLowerCase())
        );
      }
      console.log("Filtered data: ", filteredByCategory);
      return filteredByCategory;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");

body {
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-size: 10px;
  line-height: 1.7;
}

.card-3d-wrap {
  width: 340px;
  max-width: calc(100% - 20px);
  height: 510px;

  perspective: 1000px;
}
.card-front {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-shadow: 12px 12px 12px 12px rgba(0, 0, 0, 0.07);
}
.pricing-wrap {
  position: relative;
  padding-top: 160px;
  width: 100%;

}

.img-wrap img {
  width: 100%;
  height: auto;
  display: block;
}
.img-1 {
  position: absolute;
  left: -160px;
  top: -50px;
  z-index: 5;
  width: calc(80% + 160px);
  opacity: 1;
}

.img-2 {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.img-3 {
  position: absolute;
  right: -20px;
  top: -40px;
  z-index: 5;
  width: calc(60% + 20px);
}

.img-6 {
  position: absolute;
  right: -20px;
  bottom: -55px;
  z-index: 5;
  width: calc(20% + 30px);

}

.product {
  width: 100px;
  height: 100px;
}

iframe {
clip-path: polygon(0 0, 100% 0, 100% 48%, 0 100%);


}

</style>
