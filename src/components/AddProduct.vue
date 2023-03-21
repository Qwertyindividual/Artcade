<template>
  <div>
    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#addProductModal">
    Add Product
  </button>

    <!--Modal-->
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add Product</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <form @submit.prevent="addProduct">
            <div class="form-row">
              <input class="form-control my-3" v-model="payload.prodName" type="text" placeholder="Product Name">
            </div>
            <div class="form-row">
              <input class="form-control my-3" v-model="payload.prodDescription" type="text" placeholder="Product Description">
            </div>
            <div class="form-row">
              <input class="form-control my-3" v-model="payload.Category" type="text" placeholder="Category">
            </div>
            <div class="form-row">
              <input class="form-control my-3" v-model="payload.Price" type="number" placeholder="Price">
            </div>
            <div class="form-row">
              <input class="form-control my-3" v-model="payload.Quantity" type="number" placeholder="Quantity">
            </div>
            <div class="form-row">
              <input class="form-control my-3" v-model="payload.imgURL" type="text" placeholder="IMG URL">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn">Add Product</button>
            </div>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn">Save changes</button>
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
      payload: {
        prodName: '',
        prodDescription: '',
        Category: '',
        Price: '',
        Quantity: '',
        imgURL: ''
      }
    }
   },
    methods: {
    addProduct() {
      console.log('Debug', this.payload);
      this.$store.dispatch('AddProduct', this.payload)
    }
  }
}
</script>

<style scoped>

</style>