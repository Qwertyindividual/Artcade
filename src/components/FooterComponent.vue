<template>
    <div>
        <footer>
        <div class="container container-fluid">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="single-box">
                        <img src="https://i.postimg.cc/XYSWngYD/artcade-low-resolution-logo-black-on-white-background-removebg-preview.png" alt="">
                        <p><i>One Stop Only</i></p>
                    
                    <h3>We Accept</h3>
                    <div class="card-area">
                            <i class="fa fa-cc-visa"></i>
                            <i class="fa fa-credit-card"></i>
                            <i class="fa fa-cc-mastercard"></i>
                            <i class="fa fa-cc-paypal"></i>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-box">
                        <h2>Hosting</h2>
                    <!-- <ul>
                        <li><a href="#">Web Hosting</a></li>
                        <li><a href="#">Cloud Hosting</a></li>
                        <li><a href="#">CMS Hosting</a></li>
                        <li><a href="#">WordPress Hosting</a></li>
                        <li><a href="#">Email Hosting</a></li>
                        <li><a href="#">VPS Hosting</a></li>
                    </ul> -->
                    </div>                    
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-box">
                        <h2>Domain</h2>
                    <!-- <ul>
                        <li><a href="#">Web Domain</a></li>
                        <li><a href="#">Cloud Domain</a></li>
                        <li><a href="#">CMS Domain</a></li>
                        <li><a href="#">WordPress Domain</a></li>
                        <li><a href="#">Email Domain</a></li>
                        <li><a href="#">VPS Domain</a></li>
                    </ul> -->
                    </div>                    
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-box text-wrap">
                        <h2>About</h2>
                        <p>Welcome to Artcade. We are your one-stop shop for all your artistic needs. We offer a plethora of high-quality art supplies from trusted/local Suppliers, including paints, brushes, canvases, sketchpads, drawing tools and more.</p>
                        <div class="mb-3">
                            <button class="pt-2 pb-2 pe-5 ps-5 bg-transparent border-dark">Learn More...</button>
                        </div>
                        <h2>Follow us on</h2>
                        <p class="socials">
                            <router-link class="text-decoration-none" to="/contact"> <a><i class="fa-solid fa-message text-light"></i></a></router-link>
                            <i class="fa fa-dribbble"></i>
                            <i class="fa fa-pinterest"></i>
                            <i class="fa fa-twitter"></i>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h6 class="text-center text-break text-light">All Rights Reserved By Artcade @2023</h6>
            </div>
        </div>
    </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
footer {
	background: linear-gradient(to bottom right, #D3756B, #F0997D, #FFC3A1, #205295, #2C74B3, #144272);
	padding: 86px 0; 
    box-shadow: 0px 0 19px rgba(1, 0, 0, 0.9);

}
.single-content {
	text-align: center;
	padding: 115px 0;
}
.single-box p {
	color: #fff;
	line-height: 1.9;
}
.single-box h3 {
	font-size: 16px;
	font-weight: 700;
	color: #fff;
}
.single-box .card-area i {
	color: #ffffff;
	font-size: 20px;
	margin-right: 10px;
}
.single-box ul {
	list-style: none;
	padding: 0;
}
.single-box ul li a {
	text-decoration: none;
	color: #fff;
	line-height: 2.5;
	font-weight: 100;
}
.single-box h2 {
	color: #fff;
	font-size: 20px;
	font-weight: 700;
}
/* #basic-addon2 {
	background: #fe1e4f;
	color: #fff;
} */
.socials i {
	font-size: 18px;
	margin-right: 15px;
}
@media (max-width: 767px) {
	.single-box {
		margin-bottom: 50px;
	}
}
@media (min-width: 768px) and (max-width: 991px) {
	.single-box {
		margin-bottom: 50px;
	}
}

img {
    width: 100px;
    height: 100px;
}

button {
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.9);
}

button:hover{
    background: linear-gradient(to right, #80ED99, #57CC99, #38A3A5);
}

</style>