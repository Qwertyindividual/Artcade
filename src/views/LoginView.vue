<template>
  <div class="main">
    

                      <!-- <form class="form">
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
                      </form> -->

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

form {
  margin: auto;
  margin-top: 10%;
}
</style>