<template>
  <div>
     <button class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#addUser">Add User</button>
    <div class="modal" tabindex="-1" aria-labelledby="addUser" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="register">
                <div class="form-outline mb-4">
                    <input type="text" v-model="payload.firstName" placeholder="Name" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <input type="text" v-model="payload.lastName" placeholder="Surname" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <input type="email" v-model="payload.emailAdd" placeholder="Email" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <input type="password" v-model="payload.userPass" placeholder="Password" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <input type="text" v-model="payload.imgURL" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <input type="date" v-model="payload.joinDate" class="form-control" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-outline-dark">Add User</button>
                </div>
            </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
data() {
  return{
    payload:{
      firstName: '',
      lastName: '',
      emailAdd: '',
      userPass: '',
      imgURL: '',
      joinDate: ''
    }
  }
},
 methods: {
            register() {
                console.log('Debug', this.payload);
                this.$store.dispatch('register', this.payload)
            }
        }
}
</script>

<style scoped>

</style>