<template>
  <div>
    <div v-if="recipe">
      <h1>{{ recipe.name }}</h1>
      <router-link id="home" :to="'/'">Home Page</router-link>
      <router-link id="add" :to="'/add'">Add Recipe</router-link>
      <router-link id="edit" :to="'/edit/' + recipe.id"
        >Edit Recipe</router-link
      >
      <div class="recipe">
        <div v-if="recipe.favorite">~ This is a Favorite ~</div>
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
import { axios } from "@/app.js";

export default {
  components: {},
  name: "",
  props: ["id", "recipes"],
  data: function () {
    return {};
  },
  methods: {
    deleteRecipe() {
      axios.delete("/recipe/" + this.recipe.id).then((response) => {
        if (response.data.errors) {
          this.errors = response.data.errors;
        } else {
          this.$emit("update-recipes");
          this.showConfirmationMessage = true;
        }
      });
    },
    addShoppingList(ingrediant) {
      //add the selected ingrediant as an item to buy for the recipe
      this.recipe.buy = ingrediant + ", ";

      //update the recipe with the new item to buy
      axios.put("/recipe/" + this.recipe.id, this.recipe).then((response) => {
        if (response.data.errors) {
          this.errors = response.data.errors;
        } else {
          this.$emit("update-recipes");
        }
      });
    },
  },
  computed: {
    recipe() {
      return this.recipes.filter((recipe) => {
        return recipe.id == this.id;
      }, this.id)[0];
    },
    recipeNotFound() {
      //if a recipe isn't found show message
      return this.recipe == null;
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
