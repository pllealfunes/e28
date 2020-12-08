<template>
  <div>
    <div v-if="recipe">
      <h1>{{ recipe.name }}</h1>
      <router-link id="home" :to="'/'">Home Page</router-link>
      <router-link id="account-link" :to="'/account'">Sign In</router-link>
      <router-link id="add" :to="'/add'">Add Recipe</router-link>
      <router-link id="edit" :to="'/edit/' + recipe.id"
        >Edit Recipe</router-link
      >
      <div id="confirmation-message" v-if="showConfirmationMessage">
        Added Ingrediant to Shopping List
      </div>
      <div class="recipe">
        <button @click="addFavorite">Add to Favorite</button>
        <div v-if="recipe.favorite == true">~ This is a Favorite ~</div>
        <h2 id="ingrediants-title">Ingrediants</h2>
        <ul id="ingrediant-list">
          <li v-for="ingrediant in splitItem" :key="ingrediant">
            {{ ingrediant }}
            <button id="add-shoppinglist" @click="addShoppingList(ingrediant)">
              Buy
            </button>
          </li>
        </ul>
        <h2 id="instructions-title">Instructions</h2>
        <ul id="ingrediant-list">
          <li v-for="instruction in splitInstructions" :key="instruction">
            {{ instruction }}
          </li>
        </ul>
        <button id="delete-recipe" @click="deleteRecipe">Delete Recipe</button>
      </div>
    </div>
    <div v-if="recipeNotFound">
      <router-link id="home" :to="'/'">Home Page</router-link>
      <router-link id="add" :to="'/add'">Add Recipe</router-link>
      <p id="unknown-recipe">Recipe {{ id }} Not Found.</p>
    </div>
  </div>
</template>

<script>
import { axios, cart } from "@/app.js";

export default {
  components: {},
  name: "",
  props: ["id"],
  data: function () {
    return {
      showConfirmationMessage: false,
      items: [],
      newIngrediant: null,
    };
  },
  methods: {
    deleteRecipe() {
      axios.delete("/recipe/" + this.recipe.id).then((response) => {
        if (response.data.errors) {
          this.errors = response.data.errors;
        } else {
          this.$store.dispatch("fetchRecipes");
          this.$router.push({ path: "/" });
        }
      });
    },
    addShoppingList(ingrediant) {
      cart.add(ingrediant, 1);
      this.$store.commit("setCartCount", cart.count());
      this.showConfirmationMessage = true;
      setTimeout(() => (this.showConfirmationMessage = false), 2000);
    },
    addFavorite() {
      //update the shopping list with the new item to buy
      axios
        .post(
          "/favorite/" +
            this.$store.getters.getRecipeById(this.recipe.recipe_id),
          this.user
        )
        .then((response) => {
          if (response.data.errors) {
            this.errors = response.data.errors;
          } else {
            this.$store.dispatch("fetchRecipes");
          }
        });
    },
  },
  computed: {
    recipe() {
      return this.$store.getters.getRecipeById(this.id);
    },
    recipes() {
      return this.$store.state.recipes;
    },
    recipeNotFound() {
      //if a recipe isn't found show message
      return this.recipe == null;
    },
    user() {
      return this.$store.state.user;
    },
    splitItem() {
      // take the ingrediants and split them after every comma to create an unordered list
      return this.recipe.ingrediants.split(",");
    },
    splitInstructions() {
      // take the instructions and split them after every comma to create a list
      return this.recipe.instructions.split(",");
    },
  },
};
</script>
