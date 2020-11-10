<template>
  <div v-if="recipe">
    <h1>{{ recipe.name }}</h1>
    <router-link id="home" :to="'/'">Home Page</router-link>
    <router-link id="add" :to="'/recipe/add'">Add Recipe</router-link>
    <router-link id="edit" :to="'/recipe/edit/' + recipe.id"
      >Edit Recipe</router-link
    >
    <div id="confirmation-message" v-if="showConfirmationMessage">
      Successfully Deleted Recipe
    </div>
    <div class="recipe">
      <p v-if="recipe.favorite">Is Favorite: {{ recipe.favorite }}</p>
      <p>{{ recipe.ingrediants }}</p>
      <p>{{ recipe.instructions }}</p>
      <button id="delete-recipe" @click="deleteRecipe">Delete Recipe</button>
    </div>
  </div>
</template>

<script>
import { axios } from "@/app.js";
export default {
  name: "show-recipe",
  props: ["id", "recipes"],
  data: function () {
    return {
      recipe: null,
      showConfirmationMessage: false,
    };
  },
  methods: {
    deleteRecipe() {
      axios.delete("/recipe/" + this.recipe.id).then((response) => {
        if (response.data.errors) {
          this.errors = response.data.errors;
        } else {
          this.$emit("update-recipes");
          this.showConfirmationMessage = true;
          setTimeout(() => (this.showConfirmationMessage = false), 2000);
        }
      });
    },
  },
  mounted() {
    this.recipe = this.recipes.filter((recipe) => {
      return recipe.id == this.id;
    }, this.id)[0];
  },
};
</script>
