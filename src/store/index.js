import { createStore } from "vuex";
import router from "@/router";
import axios from "axios";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import swal from "sweetalert";
// import toastr from 'toastr';
const renderURL = "https://artcade.onrender.com";

export default createStore({
  state: {
    products: null,
    singleProduct: null,
    users: null,
    user: null,
    token: null,
    currentUser: null,
    // registerError: null,
    // loginError: null,
    totalProductPrice: null,
    singleProductPrice: null,
    currentCart: null,
    spinner: true,
    asc: true,
    desc: true,
    isAuthenticated: false,
    totalInCart: 0,
    category: '',
    searchByName: ''
  },
  getters: {
    spinner(state) {
      return state.spinner;
    },
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    getSearchResults(state) {
      return state.searchResults;
    },
    filteredProducts: state => {
      return state.products;
    }
  },
  mutations: {
    spinnerStatus(state, value) {
      state.spinner = value;
    },
    isAuthenticated(state, value) {
      state.isAuthenticated = value;
    },
    setProducts(state, values) {
      state.products = values;
    },
    setProduct(state, value) {
      state.singleProduct = value;
    },
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, value) {
      state.user = value;
    },
    setToken(state, token) {
      state.token = token
    },
    clearToken(state) {
      state.token = null
    },
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    SortProductsByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },

    SortProductsByName: (state) => {
      state.products.sort((a, b)=> {
        return a.prodName.localeCompare(b.prodName);
      });
      if(!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
     
    setCategory(state, category) {
      state.category = category
    },

    setSearchByName(state, searchByName) {
      state.searchByName = searchByName
    }

  },
  actions: {
    async fetchUsers({ commit }) {
      commit("spinnerStatus", true);
      const res = await axios.get(`${renderURL}/users`);
      const { results, err } = await res.data;
      if (results) {
        commit("setUsers", results);
        commit("spinnerStatus", false);
      } else {
        commit("setMessage", err);
        commit("spinnerStatus", true);
      }
    },

    async fetchProducts({ commit }) {
      commit("spinnerStatus", true);
      const res = await axios.get(`${renderURL}/products`);
      const { results, err } = await res.data;
      if (results) {
        commit("setProducts", results);
        commit("spinnerStatus", false);
      } else {
        commit("setMessage", err);
        commit("spinnerStatus", true);
      }
    },

    async fetchSingleProduct({ commit }, id) {
      commit("spinnerStatus", true);
      const res = await axios.get(`${renderURL}/product/${id}`);
      const { results, err } = await res.data;
      if (results) {
        commit("setProduct", results[0]);
        commit("spinnerStatus", false);
      } else {
        commit("setMessage", err);
        commit("spinnerStatus", true);
      }
    },

    async fetchAllInCarts({ commit }, id) {
      commit("spinnerStatus", true);
      const res = await axios.get(`${renderURL}/user/${id}/cart`);
      const { results, err } = await res.data;
      if (results) {
        commit("setProducts", results);
        commit("spinnerStatus", false);
      } else {
        commit("setMessage", err);
        commit("spinnerStatus", true);
      }
    },

    async register({ commit }, payload) {
      try {
        const res = await axios.post(`${renderURL}/register`, payload);
        const { result, err } = await res.data;
        if (result) {
          commit("setUser", result);
          swal({
            icon: "success",
            title: "Register Successful",
            timer: 1000,
          });
          router.push({ name: "login" });
        } else {
          commit("setMessage", err);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async login({ commit }, payload) {
      try {
        const res = await axios.post(`${renderURL}/login`, payload);
        const { result, jwToken } = await res.data;
        if (result) {
          commit("setUser", result);
          commit("setToken", jwToken);
          cookies.set("user_cookie_value", jwToken);
          commit("setIsAuthenticated", true);
          router.push({ name: "products" });
          swal({
            icon: "success",
            title: "Login Successful",
            timer: 2000,
          });
        } else {
          swal({
            icon: "error",
            title: "Login unsuccessful",
            timer: 1000,
          });
        }
      } catch (error) {
        console.error(error);
      }
    },

    async logout({ commit }) {
      commit("setToken", null);
      commit("setIsAuthenticated", false);
      commit("setUser", null);
      router.push({name: "home"})
    },

    async deleteUser({ dispatch }, id) {
      try {
        await axios.delete(`${renderURL}/user/${id}`);
        swal({
          icon: "success",
          title: "Deleted Successfully",
          timer: 1000,
        });
        dispatch("fetchUsers");
      } catch (err) {
        swal({
          icon: "error",
          title: "Delete Unsucessful",
          timer: 1000,
        });
      }
    },

    async deleteProduct({ dispatch }, id) {
      try {
        await axios.delete(`${renderURL}/product/${id}`);
        swal({
          icon: "success",
          title: "Deleted Successfully",
          timer: 1000,
        });
        dispatch("fetchProducts");
      } catch (err) {
        swal({
          icon: "error",
          title: "Delete Unsucessful",
          timer: 1000,
        });
      }
    },

    async AddProduct({ commit }, payload) {
      try {
        const res = await axios.post(`${renderURL}/product`, payload);
        console.log("Response:", res);
        let { result } = await res.data;
        if (result) {
          commit("setProduct", result);
          swal({
            icon: "success",
            title: "Product Added",
            timer: 1000,
          });
        }
      } catch (err) {
        swal({
          icon: "error",
          title: "Unable to add product",
          timer: 1000,
        });
      }
    },

    async AddUser({ commit }, payload) {
      try {
        const res = await axios.post(`${renderURL}/users`, payload);
        console.log("Response:", res);
        let { result } = await res.data;
        if (result) {
          commit("setUser", result);
          swal({
            icon: "success",
            title: "User Added",
            timer: 1000,
          });
        }
      } catch (err) {
        swal({
          icon: "error",
          title: "Unable to add User",
          timer: 1000,
        });
      }
    },

    async updateUser({ commit }, id, payload) {
      try {
        const res = await axios.put(`${renderURL}user/${id}`, payload);
        let { msg, err } = await res.data;
        if (msg) {
          commit("setUser", msg);
        } else {
          commit("setMessage", err);
        }
      } catch (error) {
        console.error(error);
      }
    },

    // performSearch({commit, state}) {

    // const searchResults = data.filter(item => {
    //   return item.propertyToSearch.toLowercase().includes(searchText.toLowerCase());
    // });

    //   commit('updateSearchResults', results);
    // }

    performSearch({ commit, state }) {

      
      let filteredByCategory = state.products.filter(item => item.category == state.category || state.category == '');
      if (state.searchByName.trim().length > 0) {
        let searchResults = filteredByCategory.filter((input) => input.prodName.toLowerCase().includes(state.searchByName.trim().toLowerCase()));
        commit('setProducts', searchResults);
      } else {
        commit('setProducts', filteredByCategory);
      }
    }

  },
  modules: {},
});