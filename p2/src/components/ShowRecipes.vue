<template>
  <div>
    <h1>Rezept</h1>
    <router-link id="add" :to="'/recipe/add'">Add Recipe</router-link>

    <router-link id="favorites-list" :to="'/favorites'">favorites</router-link>

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
export default {
  name: "",
  props: ["recipes"],
  data: function () {
    return {};
  },
};
</script>
