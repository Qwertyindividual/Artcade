import { createStore } from 'vuex'

import axios from 'axios';
import swal from 'sweetalert';
const renderURL = "https://artcade.onrender.com";

export default createStore({
  state: {
    products: null,
    singleProduct: null,
    currentUser: null,
    registerError: null,
    loginError: null,
    totalProductPrice: null,
    singleProductPrice: null,
    currentCart: null,
    spinner: true,
    asc: false,
    loginStatus: false,
    totalInCart: 0 
  },
  getters: {
    spinner(state) {
      return state.spinner
    },
    loginStatus(state) {
      return state.loginStatus
    }
  },
  mutations: {
    spinnerStatus(state, value) {
      state.spinner = value
    },
    loginStatus(state,value) {
      state.loginStatus = value
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, value) {
      state.singleProduct = value
    },
    setUsers(state, values) {
      state.users = values
    }
  },
  actions: {
    async fetchUsers({commit}) {
      commit('spinnerStatus', true)
      const res = await axios.get(`${renderURl}/users`)
      const {results, err} = await res.data;
      if(results) {
        commit('setUsers', results);
        commit('spinnerStatus', false)
      } else {
        commit('spinnerStatus', true)
      }
    },
    async fetchProducts({commit}) {
      commit('spinnerStatus', true)
      const res = await axios.get(`${renderURL}/products`);
      const{results, err} = await res.data;
      if(results) {
        commit('setProducts', results);
        commit('spinnerStatus', false)
      } else {
        commit('spinnerStatus', true)
      }
    },
    async fetchSingleProduct({commit},id) {
      commit('spinnerStatus', true)
      const res = await axios.get(`${renderURL}/products/${id}`);
      const {results, err} = await res.data;
      if(results) {
        commit('setProduct', results[0]);
        commit('spinnerStatus', false )
      } else {
        commit('spinnerStatus', true)
      }
    },
    async fetchAllInCarts({commit}) {
      commit('spinnerStatus', true)
      const res = await axios.get(`${renderURL}/user/${id}/cart`) 
      const{results, err} = await res.data;
      if(results) {
        commit('setProducts', results);
        commit('spinnerStatus', false)
      } else {
        commit('spinnerStatus', true)
      }
    },
    async deleteProduct({commit}, id) {
      try {
        await axios.delete(`${renderURL}/product/${id}`)
        commit('setProducts',[])
      } catch (err) {
        swal('AUM')
      }
    },
    async editProduct({commit}, id) {
      try {
        await axios.put(`${renderURL}/product/${id}`)
        commit('setProducts',[])
        swal.fire({
          title: "Edit Succe
        }

        )
      } catch (err) {
        swal('AUM')
      }
    },
      
  },
  modules: {
  }
})
