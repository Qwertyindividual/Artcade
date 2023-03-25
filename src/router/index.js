import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter() {
      router.push({name: 'login'})
      localStorage.removeItem('loginToken')
      localStorage.removeItem('userToken')
      window.location.reload()
    }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/SingleProductView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    meta: {
      requiresAuth: true
    },
     beforeEnter: (to, from, next) => {
      const admin = store.getters.user.userRole == 'Admin'
      if(admin) {
        next()
      }else {
       next('/')
      }
     }
    },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  store.dispatch('login')
  if(to.meta.requiresAuth && !store.state.isAuthenticated) {
    next('login')
   } else {
    next()
   }
})

// const checkAgentPermissions = () => {
//   return false
// }

export default router
