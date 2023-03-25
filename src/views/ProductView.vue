<template>
    <div class="main">
      <ProductCard/>
      <FooterComponent/>
    </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue"
import FooterComponent from '@/components/FooterComponent.vue'
    export default {
        components: {
            ProductCard,
            FooterComponent
        }
    }
</script>

<style scoped>
</style>