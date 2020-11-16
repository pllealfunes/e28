<template>
  <div>
    <h1>Shopping List</h1>
    <router-link id="home" :to="'/'">Home Page</router-link>
    <router-link id="add" :to="'/add'">Add Recipe</router-link>
    <div>
      <ul id="recipe-list">
        <li id="recipe-item" v-for="item in buyItems" :key="item.id">
          <div id="recipe-title">Buy for {{ item.name }}</div>
          <div id="item">{{ item.buy }}</div>
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
      items: [],
    };
  },
  computed: {
    buyItems: function () {
      //filter through recipes to see which ones have items under buy category
      return this.recipes.filter((recipe) => recipe.buy);
    },
  },
};
</script>