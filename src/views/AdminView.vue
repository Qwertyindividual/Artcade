<template>
    <div class="main">
        <div class="main_div">
            <br> <br> <br><br><br><br>
            <div class="container">
                <div class="row my-2">
                    <div class="col-md">
                        <router-link to="/register">
                            <button class="btn bg-transparent border-dark text-dark fw-bold">Add New User</button>
                        </router-link>
                    </div>
                    <div class="col-md">

                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>

                <h2 class="title">User</h2>
                <div class="row table-responsive-md">
                    <SpinnerComponent v-if="spinner" />
                    <table v-else class="table table-hover">
                        <thead class="bg-gradient">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Firstname</th>
                                <th scope="col">Lastname</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Join-Date</th>
                                <th scope="col">Number</th>
                                <th scope="col">User role</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr v-for="userID in users" :key="userID">
                                <td data-title="ID" class="text-dark">{{ userID.userID }}</td>
                                <td data-title="Firstname" class="text-dark">{{ userID.firstName }}</td>
                                <td data-title="Lastname" class="text-dark">{{ userID.lastName }}</td>
                                <td data-title="Gender" class="text-dark">{{ userID.gender }}</td>
                                <td data-title="Join-Date" class="text-dark">{{ userID.joinDate }}</td>
                                <td data-title="CellPhone Number" class="text-dark">{{ userID.cellPhoneNumber }}</td>
                                <td data-title="User Role" class="text-dark">{{ userID.userRole }}</td>
                                <td data-title="Email" class="text-dark">{{ userID.emailAdd }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2 class="title">Product</h2>
                <div class="row table-responsive-md">
                    <table class="table table-hover">
                        <thead class="bg-gradient">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr v-for="id in products" :key="id">
                                <td data-title="id" class="text-dark">{{ id.id }}</td>
                                <td data-title="Name" class="text-dark">{{ id.prodName }}</td>
                                <td data-title="Image" class="text-dark">
                                    <img class="" :src="id.imgURL" />
                                </td>
                                <td data-title="Quantity" class="text-dark">{{ id.Quantity }}</td>
                                <td data-title="Price" class="text-dark">R {{ id.Price }}</td>
                            </tr>
                        </tbody>
                    </table>
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
      components: {
        SpinnerComponent
      },
        setup(){
    const store = useStore();
      store.dispatch("fetchUsers");
      store.dispatch("fetchProducts");
      const users =
      computed( () => store.state.users);
      const products = 
      computed( () => store.state.products)
      const spinner = 
      computed( () => store.getters.spinnerStatus)
      return{
        users,
        products,
        spinner
      }
  }
    }
</script>


<style scoped>
.main {
    width: 100%;
    height: 100vh;
}

img {
    width: 100px;
    height: 100px;
}

</style>