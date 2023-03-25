<template>
    <div class="main">
      <ProductCard/>
    </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue"
    export default {
        components: {
            ProductCard
        }
    }
</script>

<style scoped>
.main {
    width: 100%;
    height: 460vh;
}
</style>