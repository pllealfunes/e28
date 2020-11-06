<template>
  <div>
    <h1>Recipes</h1>
    <router-link id="add-recipe" :to="'/add'">Add Recipe</router-link>
    <div id="recipes">
      <router-link
        id="link"
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
        :to="'/recipe/' + recipe.id"
        >{{ recipe.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { recipes } from "@/recipes.js";

export default {
  name: "",
  components: {},
  data: function () {
    return {
      recipes: recipes,
    };
  },
};
</script>
