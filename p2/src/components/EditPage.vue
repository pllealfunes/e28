<template>
  <div id="create-page">
    <h1>Edit Recipe</h1>
    <router-link id="home" :to="'/'">Home Page</router-link>
    <router-link id="previous" :to="'/recipe/' + recipe.id"
      >Back to Recipe</router-link
    >
    <div id="confirmation-message" v-if="showConfirmationMessage">
      Successfully Edited Recipe
    </div>
    <div id="addRecipe">
      <label for="favorite" class="form-checkbox-label">
        <input type="checkbox" v-model="recipe.favorite" id="favorite" />
        Favorite
      </label>
      <label for="name"></label>
      <input id="name" type="text" v-model="recipe.name" />

      <label for="ingrediants"></label>
      <textarea id="ingrediants" v-model="recipe.ingrediants" />

      <label for="istructions"></label>
      <textarea id="instructions" v-model="recipe.instructions" />
      <button id="edit-recipe" @click="editRecipe">Edit Recipe</button>
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
      errors: null,
      showConfirmationMessage: false,
      recipe: {
        name: "this.recipe",
        ingrediants: "this.recipe.ingrediants",
        instructions: "this.recipe.instructions",
      },
    };
  },
  methods: {
    editRecipe() {
      axios.put("/recipe/" + this.recipe.id, this.recipe).then((response) => {
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
