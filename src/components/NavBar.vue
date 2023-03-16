<template>
    <div>
        
            <div class="row mt-2 fixed-top one">
                <div class="col-10">
                     <h6 class="fst-italic">ONE STOP ONLY</h6>
                </div>
                <div class="col-1">
                    <router-link class="text-decoration-none" to="/register"><a
                            class="text-dark me-4 ms-3 fw-bold">Register</a></router-link>
                </div>
                <div class="col-1">
                    <router-link class="text-decoration-none" to="/login"><a
                            class="text-dark me-4 ms-4 fw-bold text-center">Login</a></router-link>
                </div>
            </div>


            <div class="row">
                <div class="col">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient fixed-top nav mt-3">

                        <div class="container">
                            <a class="navbar-brand text-dark fw-bold" href="#"><img src="../assets/Images/artcade-low-resolution-logo-black-on-white-background-removebg-preview.png" alt=""></a> <button
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                                class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse"
                                type="button"><span class="navbar-toggler-icon"></span></button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav m-auto mb-lg-0">
                                    <router-link class="text-decoration-none" to="/"><a
                                            class="Home text-dark me-3 fw-bold me-4">Home</a></router-link>
                                    <router-link class="text-decoration-none" to="/products"><a
                                            class="About text-dark text-center fw-bold me-4 ms-5">Products</a></router-link>
                                    <router-link class="text-decoration-none" to="/admin"><a
                                            class="Register text-dark me-4 ms-5 fw-bold">Admin</a></router-link>
                                    <router-link class="text-decoration-none" to="/contact"><a
                                            class="Contact text-dark fw-bold me-4 ms-5">Contact</a></router-link>
                                </ul>
                            </div>
                        </div>

                        <router-link class="text-decoration-none" to="/contact"> <a><i class="fa-solid fa-message text-dark ms-5 me-3"></i></a></router-link>
                        <a href=""><i class="fa-brands fa-facebook-f text-dark me-3"></i></a>
                        <a href="" target="_blank"><i class="fa-brands fa-square-instagram text-dark me-3"></i></a>



                    </nav>
                </div>

            </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>img {
    width: 60px;
    height: 60px;

}

.one {
    
}
</style>