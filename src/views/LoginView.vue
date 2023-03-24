<template>
  <div class="main">
    

                      <form class="form">
                        <div class="row">
                          <input class="form-control mb-2" name="email" id="email" v-model="payload.emailAdd" type="email"
                            placeholder="Enter your email" required />
                        </div>
                        <div class="row">
                          <input class="form-control mb-4" name="userpassword" id="userpassword"
                            v-model="payload.userPass" type="password" placeholder="Enter your password" required />
                        </div>
                        <div class="row">
                          <div class="btn btn-transparent border-dark login" @click.prevent="login">Login</div>
                        </div>
                      </form>
  </div>
</template>

<script>
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
  }

}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
}
</style>