<template>
  <div class="">
    <br> <br><br><br><br>
    <div class="container">
      <div class="row my-2">
        <div class="col-md col">
          <div class="shop">
      <select class="btn btn-light text-start" required v-model="Category">
        <option value="" selected>All categories</option>
        <option value="Faber-Castell">Faber-Castell</option>
        <option value="Erasers & Statioanary">Erasers & Corrections</option>
        <option value="Correction & Stationary">Correction & Stationary</option>
        <option value="Office & Stationary">Office & Stationanry</option>a
        <option value="Art Set">Art Set</option>
        <option value="Graphite Pencils">Graphite Pencils"</option>
      </select>
        <div class="input-group" style="width: 15%;">
          <input type="search" v-model="searchByName" class="form-control rounded" placeholder="Search name" aria-label="Search" aria-describedby="search-addon" />
        </div>
               <button class="form-control btn btn-transparent border-dark sortBtn text-center m-auto d-flex "
            @click.prevent="SortByPrice">Price<i class="bi bi-arrow-down-up ps-4`"></i></button><br>
          <button class="form-control btn btn-transparent border-dark sortBtn text-center m-auto d-flex "
            @click.prevent="SortByName">Name<i class="bi bi-arrow-down-up ps-4`"></i></button><br>
   </div>
          <!-- <button class="form-control btn btn-transparent border-dark sortBtn text-center m-auto d-flex "
            @click="SortByPrice">Price<i class="bi bi-arrow-down-up ps-4`"></i></button><br>
          <button class="form-control btn btn-transparent border-dark sortBtn text-center m-auto d-flex "
            @click="SortByName">Name<i class="bi bi-arrow-down-up ps-4`"></i></button><br> -->
       </div>
       </div>

      <div v-if="spinner">
        <SpinnerComponent />
      </div>
      <div v-else v-for="id in search" :key="id" class="p-2 m-5 mx-auto loop" data-aos="zoom-in"
        data-aos-duration="3000">
        <br><br>
        <div class="container text-center">
          <div class="row">
            <div class="col-4">
              <div class="container text-center">
                <div class="row">
                  <div class="col">
                    <div class="card bg-transparent" style="width: 18rem;">
                      <img :src="id.imgURL" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">{{ id.prodName }}</h5>
                        <h5 class="card-title">{{ id.Category }}</h5>
                        <p class="card-text">{{ id.prodDescription }}</p>
                        <router-link :to="{ name: 'product', params: { id: id.id } }"><a class="btn btn-dark">View
                            Product</a></router-link>
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
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import SpinnerComponent from "../components/SpinnerComponent.vue"

export default {

  data() {
    return {
     searchByName: '',
     Category: ''
    }
  },
  components: {
    SpinnerComponent

  },
  methods: {
    SortByPrice() {
      this.$store.commit("SortProductsByPrice");
    },
    SortByName() {
      this.$store.commit("SortProductsByName")
    }
  },
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    // store.dispatch("performSearch");
    const products =
      computed(() => store.state.products);
    const spinner =
      computed(() => store.getters.spinnerStatus);
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
      spinner
      // searchResults,
      // searchByName,
      // setCategory,
      // filteredProducts
    }
  },
  computed: {
    search() {
      let filteredByCategory = this.products.filter(item => item.Category == this.Category || this.Category == '')
      if (this.searchByName.trim().length > 0) {
        return filteredByCategory.filter((input) => input.prodName.toLowerCase().includes(this.searchByName.trim().toLowerCase()))
      }
      console.log("Filtered data: ", filteredByCategory);
      return filteredByCategory
    }
  }


}
</script>

<style scoped>
.loop {
  display: inline-block;
}

input::placeholder {
  color: black;
}

.Submit:hover {
  background: linear-gradient(to bottom right, #E6CCB2, #755539, pink);

}
</style>