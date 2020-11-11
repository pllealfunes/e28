<template>
  <div v-if="recipe">
    <h1>{{ recipe.name }}</h1>
    <router-link id="home" :to="'/'">Home Page</router-link>
    <router-link id="add" :to="'/add'">Add Recipe</router-link>
    <div class="recipe">
      <ul>
        <li v-for="(recipe, index) in favoriteRecipe" :key="index">
          {{ recipe.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-recipe",
  props: ["recipes"],
  data: function () {
    return {
      recipe: this.recipes,
    };
  },
  computed: {
    favoriteRecipe: function () {
      return this.recipes.filter((recipe) => recipe.favorite == true);
    },
  },
};
</script>
