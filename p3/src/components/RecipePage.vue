<template>
  <div>
    <div v-if="recipe">
      <h1 data-test="test-recipe-name">{{ recipe.name }}</h1>
      <router-link id="home" :to="'/'">Home Page</router-link>
      <router-link id="account-link" :to="'/account'">Account</router-link>
      <router-link id="add" :to="'/add'">Add Recipe</router-link>
      <router-link
        data-test="test-edit-link"
        id="edit"
        :to="'/edit/' + recipe.id"
        >Edit Recipe</router-link
      >
      <div
        id="confirmation-message"
        data-test="test-add-confirmation"
        v-if="showConfirmationMessage"
      >
        Added Ingrediant to Shopping List
      </div>
      <div class="recipe">
        <div v-if="user">
          <button
            data-test="test-add-favorite"
            id="add-favorite"
            v-if="isFavorite"
            @click="deleteFavorite()"
          >
            Remove from Favorites
          </button>
          <button
            data-test="test-remove-favorite"
            id="remove-favorite"
            v-else
            @click="addFavorite()"
          >
            Add to Favorites
          </button>
        </div>
        <h2 id="ingrediants-title">Ingrediants</h2>
        <ul id="ingrediant-list">
          <li v-for="ingrediant in splitItem" :key="ingrediant">
            {{ ingrediant }}
            <button
              data-test="test-add-list"
              id="add-shoppinglist"
              @click="addShoppingList(ingrediant)"
            >
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
        <button
          v-if="user"
          data-test="test-delete-button"
          id="delete-recipe"
          @click="deleteRecipe"
        >
          Delete Recipe
        </button>
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
      isFavorite: false,
      favoriteId: null,
    };
  },
  methods: {
    deleteRecipe() {
      axios.delete("/recipe/" + this.id).then((response) => {
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
    getFavoriteDetails() {
      axios.get("/favorite/query?recipe_id=" + this.id).then((response) => {
        if (response.data.results.length > 0) {
          // There should only ever be one unique match between a given user id and a given product id
          // so we narrow the results down to [0]
          this.favoriteId = response.data.results[0].id;
          this.isFavorite = true;
        }
      });
    },
    addFavorite() {
      //update the shopping list with the new item to buy
      axios
        .post("/favorite", {
          recipe_id: this.id,
        })
        .then((response) => {
          if (response.data.success) {
            this.isFavorite = true;
            this.favoriteId = response.data.favorite.id;
            this.errors = response.data.errors;
          }
        });
    },
    deleteFavorite() {
      //update the shopping list with the new item to buy
      axios.delete("/favorite/" + this.favoriteId).then((response) => {
        if (response.data.success) {
          this.isFavorite = false;
          this.favoriteId = null;
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
  watch: {
    user(userValue) {
      if (userValue) {
        this.getFavoriteDetails();
      }
    },
  },
  mounted() {
    // If we navigate to this route from another route, the user info will already be available
    // so we can go ahead and load favorites
    if (this.user) {
      this.getFavoriteDetails();
    }
  },
};
</script>
