<template>
  <div v-if="recipe">
    <h1>{{ recipe.name }}</h1>
    <router-link id="home" :to="'/'">Home Page</router-link>
    <router-link id="add" :to="'/recipe/add'">Add Recipe</router-link>
    <router-link id="edit" :to="'/recipe/edit/' + recipe.id"
      >Edit Recipe</router-link
    >
    <div class="recipe">
      <ul>
        <li v-for="recipe in favoriteRecipe" :key="recipe.id">
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
      recipe: "",
    };
  },
  computed: {
    favoriteRecipe: function () {
      return this.recipes.filter((recipe) => recipe.favorite == true);
    },
  },
};
</script>
