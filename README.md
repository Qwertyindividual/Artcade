# frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Product Card html

	<div class="section over-hide">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section text-center py-5 py-md-0">
			
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="pricing-wrap">
										<h4 class="mb-5">Kayaking</h4>
										<h2 class="mb-2"><sup>$</sup>39 / 4<sup>hrs</sup></h2>
										<p class="mb-4">per person</p>
										<p class="mb-1"><i class="uil uil-location-pin-alt size-22"></i></p>
										<p class="mb-4">Drina, Serbia</p>
										<a href="#0" class="link">Choose Date</a>
										<div class="img-wrap img-2">
											<img src="https://assets.codepen.io/1462889/sea.png" alt="">
										</div>
										<div class="img-wrap img-1">
											<img src="https://assets.codepen.io/1462889/kayak.png" alt="">
										</div>
										<div class="img-wrap img-3">
											<img src="https://assets.codepen.io/1462889/water.png" alt="">
										</div>
										<div class="img-wrap img-6">
											<img src="https://assets.codepen.io/1462889/Stone.png" alt="">
										</div>
			      					</div>
			      				</div>
							
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>


    Product card css

    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');

body{
	font-family: 'Poppins', sans-serif;
	font-weight: 500;
	font-size: 15px;
	line-height: 1.7;
	color: #102770;
	background-color: #ffeba7;
	overflow-x: hidden;
}
a {
	cursor: pointer;
  transition: all 200ms linear;
}




.card-3d-wrap {
  position: relative;
  width: 340px;
  max-width: calc(100% - 20px);
  height: 510px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 1000px;
  margin-top: 90px;
}
.card-front{
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  border-radius: 6px;
  left: 0;
  top: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: 0 12px 35px 0 rgba(16, 39, 112,.07);
}
.pricing-wrap{
  position: relative;
  padding-top: 160px;
  width: 100%;
  display: block;
  z-index: 1;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
.pricing-wrap h4{
  position: relative;
  width: 100%;
  display: block;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 22px;
  line-height: 1.7;
  color: #102770;
  transform: translate3d(0, 0, 35px) perspective(100px);
}
.pricing-wrap h4:before{
  position: absolute;
  content: '';
  z-index: -1;
  background: linear-gradient(217deg, #448ad5, #b8eaf9);
  width: 70px;
  height: 70px;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 6px 20px 0 rgba(16, 39, 112,.3);
  animation: border-transform 6s linear infinite;
}
@keyframes border-transform{
    0%,100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; } 
  14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; } 
  28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; } 
  42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; } 
  56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; } 
  70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; } 
  84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; } 
}
.pricing-wrap h2{
  position: relative;
  width: 100%;
  display: block;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 36px;
  line-height: 1.1;
  color: #102770;
  transform: translate3d(0, 0, 30px) perspective(100px);
}
.pricing-wrap h2 sup{
  font-size: 20px;
}
.img-wrap img{
  width: 100%;
  height: auto;
  display: block;
}
.img-1{
  position: absolute;
  display: block;
  left: -160px;
  top: -50px;
  z-index: 5;
  width: calc(80% + 160px);
  transform: translate3d(0, 0, 45px) perspective(100px);
  opacity: 1;
  pointer-events: auto;
  transition: transform 400ms 1200ms ease, opacity 400ms 1200ms ease;
}

.img-2 {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  z-index: 1;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  overflow: hidden;
  width: 100%;
  transform: translate3d(0, 0, 15px) perspective(100px);
}
.img-3{
  position: absolute;
  display: block;
  right: -20px;
  top: -40px;
  z-index: 5;
  width: calc(60% + 20px);
  transform: translate3d(0, 0, 55px) perspective(100px) scale(1);
  opacity: 1;
  pointer-events: auto;
  transition: transform 300ms 1300ms ease, opacity 200ms 1300ms ease;
}

.img-6{
  position: absolute;
  display: block;
  right: -20px;
  bottom: -55px;
  z-index: 5;
  width: calc(20% + 30px);
  transform: translate3d(0, 0, 25px) perspective(100px) scale(1);
  opacity: 1;
  pointer-events: auto;
  transition: transform 300ms 1300ms ease, opacity 200ms 1300ms ease;
}


