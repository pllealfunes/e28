<template>
  <div id="products">
    <h2>Products</h2>
    <show-product
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></show-product>
  </div>
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";
import { products } from "@/products.js";
export default {
  name: "",
  components: {
    "show-product": ShowProduct,
  },
  data: function () {
    return {
      products: products,
    };
  },
};
</script>