<template>
  <div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-gradient">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <img src="../assets/Images/artcade-low-resolution-logo-black-on-white-background-removebg-preview.png"
              height="15" alt="MDB Logo" loading="lazy" />
          </a>
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
           
            <li> <router-link class="text-decoration-none" to="/"><a
                  class="text-dark me-3 fw-bold me-4 text-decoration-none home">Home</a></router-link>
            </li>
            <li> <router-link class="text-decoration-none" to="/about"><a
                  class="text-dark me-3 fw-bold ms-5 text-decoration-none about">About</a></router-link>
            </li>
             <li><router-link class="text-decoration-none" to="/contact"><a
                  class="text-dark fw-bold me-4 ms-5 text-decoration-none contact">Contact</a></router-link>
            </li>
            <li><router-link class="text-decoration-none" to="/products"><a
                  class="text-dark text-center fw-bold me-4 ms-5 text-decoration-none products">Products</a></router-link>
            </li>
           
            <li><router-link class="text-decoration-none" to="/admin"><a
                  class="text-dark me-4 ms-5 fw-bold text-decoration-none admin">Admin</a></router-link>
            </li>
          
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->

        <!-- Right elements -->
        <div class="d-flex align-items-center">
          <!-- Icon -->
          <a class="text-reset me-3" href="#">
            <i class="fas fa-shopping-cart"></i>
          </a>

          <!-- Avatar -->
          <div class="dropdown">
            <a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar"
              role="button" data-mdb-toggle="dropdown" aria-expanded="false">
              <img src="../assets/Images/free-user-icon-3296-thumb.png" class="rounded-circle" height="25"
                alt="Black and White Portrait of a Man" loading="lazy" />
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
              <div v-if="user">
                <li>
                <a class="dropdown-item" href="#">Profile</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Settings</a>
              </li>
              <li>
                <router-link :to="{name: 'logout'}" class="text-decoration-none"><button class="btn dropdown-item">Logout</button></router-link>
              </li>
              </div>

              <div v-else>
                <li class=""><router-link class="text-decoration-none dropdown-item" to="/register"><a
                  class="text-dark text-decoration-none">Register</a></router-link>
            </li>
            <li>
              <a class="dropdown-item" href="/login">Login</a>
            </li>
              </div>
          
            </ul>
          </div>
        </div>
        <!-- Right elements -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->

  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {

  setup() {
    const store = useStore();
    const user =
      computed(() => store.state.user);
    const Authenticated =
      computed(() => store.state.isAuthenticated);

    return {
      user,
      Authenticated
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
img {
  width: 60px;
  height: 60px;

}
</style>