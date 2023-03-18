<template>
  <div class="main">
    <div class="master">
      <div class="main_container">

        <div class="position-absolute top-50 start-50 translate-middle main">
          <div class="container text-center">
            <div class="row">
              <div class="col left-side">
                <h5 class="text-start mt-5"><i>Used_Goods</i></h5>
                <br>
                <br>
                <br>
                <p>Welcome Back</p>
                <p>Please login to your Account.</p>
                <div>
                  <div class="container text-center">
                    <div class="row">
                      <div class="col">
                        <button class="bg-transparent pt-2 pb-2"><i class="fa-brands fa-google google text-dark"></i> Sign
                          In with Google</button> <br>

                        <h5><i>Or</i></h5>
                      </div>

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
                  </div>
                </div>
              </div>
              <div class="col right-side">
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
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