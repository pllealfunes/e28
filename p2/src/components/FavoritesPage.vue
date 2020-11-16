<template>
  <div>
    <h1>Favorites</h1>
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
    return {};
  },
  computed: {
    favoriteRecipe: function () {
      //filter through the recipes and find which have been marked as a favorite and show as list on page
      return this.recipes.filter((recipe) => recipe.favorite == true);
    },
  },
};
</script>
