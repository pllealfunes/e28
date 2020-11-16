<template>
  <div id="list-container">
    <router-link id="list-count" :to="'/shoppingList'"
      >Shop for: {{ lastItem.length }} Recipes</router-link
    >
  </div>
</template>

<script>
export default {
  name: "",
  props: ["recipes"],
  components: {},
  data: function () {
    return {};
  },
  computed: {
    lastItem: function () {
      //filter throught the recipes to see which recipes have items to buy and find the length of the array
      return this.recipes.filter((recipe) => recipe.buy);
    },
  },
};
</script>