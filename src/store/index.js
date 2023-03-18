import { createStore } from "vuex";
import router from '@/router';
import axios from "axios";
import Cookies from 'vue3-cookies'
import swal from 'sweetalert';
const renderURL = "https://artcade.onrender.com";

export default createStore({
  state: {
    products: null,
    singleProduct: null,
    users: null,
    user:null,
    token: null,
    currentUser: null,
    registerError: null,
    loginError: null,
    totalProductPrice: null,
    singleProductPrice: null,
    currentCart: null,
    spinner: true,
    asc: false,
    loginStatus: false,
    totalInCart: 0,
  },
  getters: {
    spinner(state) {
      return state.spinner;
    },
    loginStatus(state) {
      return state.loginStatus;
    },
  },
  mutations: {
    spinnerStatus(state, value) {
      state.spinner = value;
    },
    loginStatus(state, value) {
      state.loginStatus = value;
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
    setToken(state, value) {
      state.token = value
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

    async register({commit}, payload) {
      try {
        const res = await axios.post(`${renderURL}/register`, payload);
        const {result, msg, err} = await res.data;
        if (result) {
          commit('setUser', result);
          router.push({name: 'login'});
          commit('spinnerStatus', false);
          commit('setMessage', msg);
        }else {
          commit('setMessage', err)
        }
      } catch (error) {
        console.error(error)
      }
    },
    async login({commit}, payload) {
      try {
        const res = await axios.post(`${renderURL}/login`, payload); 
          const { result, jwToken,  msg, err} = await res.data
          if(result) {
            commit('setUser', result);
            commit('setToken', jwToken);
            Cookies.set('user_cookie_value', jwToken)
            router.push({name: 'home'})
            commit('setMessage', msg);
          }else {
            commit('setMessage', err);
          }
        }catch (error) {
          console.error(error)
        }
      },
      async deleteUser({dispatch}, id) {
        try {
          await axios.delete(`${renderURL}/user/${id}`);
          swal({
            icon: 'success',
            title: 'Deleted Successfully',
            timer: 1000
          },
          );
          dispatch('fetchUsers');
        } catch(err) {
          swal({
            icon:'error',
            title: 'Delete Unsucessful',
            timer: 1000
          })

        }
      },
      
      async deleteProduct({dispatch}, id) {
        try {
          await axios.delete(`${renderURL}/product/${id}`);
          swal({
            icon: 'success',
            title: 'Deleted Successfully',
            timer: 1000
          },
          );
          dispatch('fetchProducts');
        } catch(err) {
          swal({
            icon:'error',
            title: 'Delete Unsucessful',
            timer: 1000
          })

        }
      },

      




  },
  modules: {},
});
