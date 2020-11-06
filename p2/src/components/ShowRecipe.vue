<template>
  <div>
    <h1>{{ recipe.name }}</h1>
    <router-link id="back" :to="'/'">Home Page</router-link>
    <router-link id="add" :to="'/add'">Add Recipe</router-link>
    <div class="recipe">
      <p>{{ recipe.description }}</p>
      <p>${{ recipe.price }}</p>
    </div>
  </div>
</template>

<script>
import { recipes } from "@/recipes.js";
export default {
  name: "show-recipe",
  props: ["id"],
  data: function () {
    return {
      recipe: null,
      recipes: recipes,
    };
  },
  mounted() {
    this.recipe = this.recipes.filter((recipe) => {
      return recipe.id == this.id;
    }, this.id)[0];
  },
};
</script>
