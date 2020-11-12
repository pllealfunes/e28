<template>
  <div>
    <div v-if="recipe">
      <h1>{{ recipe.name }}</h1>
      <router-link id="home" :to="'/'">Home Page</router-link>
      <router-link id="add" :to="'/add'">Add Recipe</router-link>
      <router-link id="edit" :to="'/edit/' + recipe.id"
        >Edit Recipe</router-link
      >
      <div class="recipe">
        <p>Is Favorite: {{ recipe.favorite }}</p>
        <ul>
          <li v-for="ingrediant in splitItem" :key="ingrediant">
            {{ ingrediant }}
          </li>
        </ul>
        <p>{{ recipe.instructions }}</p>
        <button id="delete-recipe" @click="deleteRecipe">Delete Recipe</button>
      </div>
    </div>
    <div v-else>
      <router-link id="home" :to="'/'">Home Page</router-link>
      <router-link id="add" :to="'/add'">Add Recipe</router-link>
      <div id="confirmation-message" v-if="showConfirmationMessage">
        Successfully Deleted Recipe
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from "@/app.js";
export default {
  name: "show-recipe",
  props: ["id", "recipes"],
  data: function () {
    return {
      showConfirmationMessage: false,
    };
  },
  methods: {
    deleteRecipe() {
      axios.delete("/recipe/" + this.recipe.id).then((response) => {
        if (response.data.errors) {
          this.errors = response.data.errors;
        } else {
          this.$emit("update-recipes");
          this.showConfirmationMessage = true;
        }
      });
    },
  },
  computed: {
    recipe() {
      return this.recipes.filter((recipe) => {
        return recipe.id == this.id;
      }, this.id)[0];
    },
    splitItem() {
      // take the ingrediants and split them after every comma to create a list
      return this.recipe.ingrediants.split(",");
    },
  },
};
</script>
