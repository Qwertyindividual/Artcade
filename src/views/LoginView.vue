<template>
<div>
  <div class="main">
  <form class="p-4 w-50">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required v-model="payload.emailAdd">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" required v-model="payload.userPass">
  </div>
  <button type="submit" class="btn btn-primary" @click.prevent="login">Login</button>
</form>
  </div>
  <FooterComponent/>
</div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  data() {
    return {
      payload: {
        userPass: '',
        emailAdd: ''
      }
    }
  },
  methods: {
    login() {
      console.log('Debug:', this.payload);
      this.$store.dispatch('login', this.payload)
    }
  },
  components: {
    FooterComponent
  }

}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
}

form {
  margin: auto;
  margin-top: 10%;
}
button:hover {
background: linear-gradient(to right, violet, pink, lightblue);
}
</style>