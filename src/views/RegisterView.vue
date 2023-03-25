<template>
    <div class="main">
        <div class="main_div">
            <br><br><br><br><br><br><br>
            <div class="container bg-transparent border p-5">
                <div class="row">
                    <fieldset>
                        <form class="form container" method="POST" @submit.prevent="signUp">
                            <div class="row">
                                <input class="form-control bg-transparent fw-bold" v-model="payload.firstName" type="text"
                                    placeholder="Enter your firstname" required />
                            </div>
                            <div class="row my-3">
                                <input class="form-control bg-transparent fw-bold" v-model="payload.lastName" type="text"
                                    placeholder="Enter your surname" required />
                            </div>
                            <div class="row">
                                <label class="form-label bg-gradient fw-bold opacity-75">Gender: </label>
                                <div>
                                    <span class="fw-bold opacity-75">Male</span>
                                    <input type="radio" name="gender" v-model="payload.gender" value="Male" />
                                    <span class="fw-bold opacity-75">Female </span>
                                    <input type="radio" name="gender" v-model="payload.gender" value="Female" />
                                </div>
                            </div>
                            <br><br>
                            <div class="row">
                                <input class="form-control bg-transparent fw-bold" v-model="payload.cellPhoneNumber"
                                    placeholder="Enter your cell number" />
                            </div>
                            <div class="row my-3">
                                <input class="form-control bg-transparent fw-bold" v-model="payload.userRole" type="text"
                                    placeholder="Enter your role" />
                            </div>
                            <div class="row my-3">
                                <input class="form-control bg-transparent fw-bold" v-model="payload.emailAdd" type="email"
                                    placeholder="Enter your email" />
                            </div>
                            <div class="row my-3">
                                <input class="form-control bg-transparent fw-bold" v-model="payload.userProfile" type="text"
                                    placeholder="url" />
                            </div>
                            <div class="row my-3">
                                <input class="form-control bg-transparent fw-bold" v-model="payload.joinDate"
                                    placeholder="YYYY-MM-DD" />
                            </div>
                            <div class="row">
                                <input class="form-control bg-transparent fw-bold" v-model="payload.userPass" type="password"
                                    placeholder="Enter your password" required />
                            </div>
                            <div class="row my-3">
                                <button class="btn btn-transparent border fw-bold" @click.prevent="signUp">Register</button>
                            </div>
                        </form>
                    </fieldset>
                    <p>Have An Account?</p>
                    <p>Please proceed to the Login Page.</p>
                </div>
            </div>
        </div>
        <FooterComponent/>
    </div>
</template>

<script>
import FooterComponent from "../components/FooterComponent.vue"
export default {
    data() {
        return {
            payload: {
                firstName: '',
                lastName: '',
                gender: '',
                emailAdd: '',
                userRole: '',
                userPass: '',
                cellPhoneNumber: '',
                joinDate: '',
                userProfile: 'https://i.postimg.cc/RFGFXwxQ/icon.png'
            }
        }
    },
    methods: {
        signUp() {
            this.$store.dispatch('register', this.payload)
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
    height: 160vh;
}
</style>