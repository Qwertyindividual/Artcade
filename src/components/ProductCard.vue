<template>
  <div class="main">
    <br />
    <br /><br /><br /><br />
    <div class="container">
      <div class="row my-2">
        <div class="col-md col">
          <div class="shop col-6">
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
          </div>
          <div class="input-group col-6" style="width: 15%">
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

      <div v-if="spinner">
        <SpinnerComponent />
      </div>

      <div class="container">
        <div class="row">
          <div
            class="col-4 py-5"
            v-for="id in Reduce"
            :key="id"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div class="section text-center py-5 py-md-0">
              <div class="card-3d-wrap mx-auto mb-5 me-2">
                <div class="">
                  <div class="">
                    <div class="pricing-wrap">
                      <img :src="id.imgURL" alt="" class="product" />
                      <h5 class="mb-2">{{ id.prodName }}</h5>
                      <p class="mb-4">{{ id.Category }}</p>
                      <!-- <h2 class="mb-2"><sup>$</sup>39 / 4<sup>hrs</sup></h2> -->
                      <h6>{{ id.Price }}</h6>
                      <!-- <h6 class="mb-4">{{ id.prodDescription }}</h6> -->
                      <p class="mb-1">
                        <i class="uil uil-location-pin-alt size-22"></i>
                      </p>
                      <router-link
                        :to="{ name: 'product', params: { id: id.id } }"
                        ><a class="btn btn-dark">View Product</a></router-link
                      >
                      <div class="img-wrap img-2">
                        <img
                          src="https://i.postimg.cc/9QHqpktz/coloured-pencils-removebg-preview.png"
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
    const products = computed(() => store.state.products);
    const spinner = computed(() => store.getters.spinner);
    return {
      products,
      spinner,
    };
  },
  computed: {
    Reduce() {
      let filteredByCategory = this.products?.filter(
        (item) => item.Category == this.Category || this.Category == ""
      );
      if (this.searchByName.length > 0) {
        return filteredByCategory?.filter((input) =>
          input.prodName
            .toLowerCase()
            .includes(this.searchByName.toLowerCase())
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

.background {
  width: 100%;
  height: 100vh;
}
</style>
