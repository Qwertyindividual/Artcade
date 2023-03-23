<template>
  <div>
    <!-- <iframe src="https://my.spline.design/3dtextbluecopy-28b6c4010faffbc7f858d3c16d0144f2/" frameborder="0" width="100%" height="100vh"></iframe> -->
    <div class="text-container">
      <h1 class="text"> Welcome to Artcade</h1>
      <!-- <p>Mwahahahaha, i am invincible</p> -->
      

    </div>

    
  </div>
</template>

<script>
import { gsap } from 'gsap';
import {SplitType} from 'split-type'

  export default {
   mounted() {
    const headline = new SplitType('h1')
    const myText2 = new SplitType('p', {charClass: 'char2'})
    var tl = gsap.timeline({defaults: {ease: "Expo.easeInOut"}})

    tl.from(headline.char, {
      y: -100,
      stagger: 0.05,
      delay: 1
    })
    .from(myText2.char2, {
      y: -100,
      stagger: 0.05,
      duration: .6
    }, "-=1.2")
    .to(headline, myText2, {
      y:130,
      delay: .4,
      duration: 1.4

    })
   },


  }
</script>

<style scoped>
div {
  width: 100%;
  height: 100vh;
}

/* h1 {
  font-family: 'PlayFair Display';
  font-size: 4rem;
  margin-top: 3em;
  margin-bottom: 3em;
}

p {
  font-size: 1.6rem;
  font-weight: 300;
  margin: 0;
}

h1, p {
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
} */

</style>
