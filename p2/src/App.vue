<template>
  <div id="app">
    <list-count :recipes="recipes"></list-count>
    <router-view
      v-bind:recipes="recipes"
      v-on:update-recipes="updateRecipes"
    ></router-view>
  </div>
</template>

<script>
import ListCount from "@/components/ListCount.vue";
import { axios } from "@/app.js";
export default {
  name: "App",
  components: {
    "list-count": ListCount,
  },
  data() {
    return {
      recipes: [],
    };
  },
  methods: {
    updateRecipes() {
      axios.get("recipe").then((response) => {
        response.data.recipe.forEach((recipe) => {
          recipe.favorite = Boolean(Number(recipe.favorite));
        });
        this.recipes = response.data.recipe;
      });
    },
  },
  mounted() {
    this.updateRecipes();
  },
};
</script>


