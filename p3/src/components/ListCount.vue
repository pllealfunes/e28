<template>
  <div id="list-container">
    <router-link id="list-count" :to="'/shoppingList'" data-test="cart-count"
      >Shop {{ cartCount }} Items</router-link
    >
  </div>
</template>

<script>
import { cart } from "@/app.js";
export default {
  name: "",
  props: [],
  components: {},
  data: function () {
    return {
      items: [],
    };
  },
  mounted() {
    this.$store.dispatch("fetchRecipes");
    this.$store.commit("setCartCount", cart.count());
    this.$store.dispatch("authUser");
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
    cartCount() {
      return this.$store.state.cartCount;
    },
  },
};
</script>