<template>
  <div>
    <h1>Shopping List</h1>
    <router-link id="home" :to="'/'">Home Page</router-link>
    <router-link id="account-link" :to="'/account'">Sign In</router-link>
    <router-link id="add" :to="'/add'">Add Recipe</router-link>
    <div id="empty-cart" v-if="items.length == 0">Nothing To Buy Here</div>
    <div>
      <ul id="recipe-list" v-if="buyItems">
        <li v-for="item in items" :key="item.id">
          {{ item.quantity }} x {{ item.ingrediant }}
          <button @click="deleteItem(item.ingrediant)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { cart } from "@/app.js";

export default {
  name: "show-recipe",
  props: [],
  data: function () {
    return {
      items: [],
    };
  },
  mounted() {
    this.items = cart.getItems();
  },
  computed: {
    buyItems() {
      return this.recipes.length > 0;
    },
    recipes() {
      return this.$store.state.recipes;
    },
  },
  methods: {
    getRecipeDetails(id) {
      return this.recipes.filter((recipe) => {
        return recipe.id == id;
      }, id)[0];
    },
    deleteItem(item) {
      cart.remove(item);
      this.$store.commit("setCartCount", cart.count());
    },
  },
};
</script>