<template>
  <div id="app">
    <router-view
      v-bind:recipes="recipes"
      v-on:update-recipes="updateRecipes"
    ></router-view>
  </div>
</template>

<script>
import { axios } from "@/app.js";
export default {
  name: "App",
  data() {
    return {
      recipes: [],
    };
  },
  components: {},
  methods: {
    updateRecipes() {
      axios.get("recipe").then((response) => {
        this.recipes = response.data.recipe;
      });
    },
  },
  mounted() {
    this.updateRecipes();
  },
};
</script>


