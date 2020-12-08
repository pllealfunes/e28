<template>
  <div id="create-page">
    <h1>Add New Recipe</h1>
    <router-link id="home" :to="'/'">Home Page</router-link>
    <router-link id="account-link" :to="'/account'">Sign In</router-link>
    <div id="confirmation-message" v-if="showConfirmationMessage">
      Successfully Added Recipe
    </div>

    <div id="warning-message">
      <div v-for="(value, index) in name" :key="index">
        {{ value }}
      </div>
    </div>
    <div id="warning-message">
      <div v-for="(ingrediant, item) in instructions" :key="item">
        {{ ingrediant }}
      </div>
    </div>
    <div id="warning-message">
      <div v-for="(instruction, step) in ingrediants" :key="step">
        {{ instruction }}
      </div>
    </div>
    <div id="addRecipe">
      <label for="name"></label>
      <input
        id="name"
        type="text"
        placeholder="New Recipe"
        v-model="recipe.name"
      />

      <label for="ingrediants"></label>
      <textarea
        id="ingrediants"
        placeholder="ex: Ingrediant, Ingrediant"
        v-model="recipe.ingrediants"
      />

      <label for="instructions"></label>
      <textarea
        id="instructions"
        placeholder="ex: 1. Instrcution, 2. Instruction"
        v-model="recipe.instructions"
      />

      <button id="added-recipe" @click="addRecipe">Delicious!</button>
    </div>
  </div>
</template>

<script>
import { axios } from "@/app.js";

export default {
  name: "create-page",
  data() {
    return {
      name: null,
      ingrediants: null,
      instructions: null,
      favorite: false,
      showConfirmationMessage: false,
      recipe: {
        name: "",
        ingrediants: "",
        instructions: "",
      },
    };
  },
  methods: {
    addRecipe() {
      axios.post("/recipe", this.recipe).then((response) => {
        if (response.data.errors) {
          this.name = response.data.errors.name;
          this.ingrediants = response.data.errors.ingrediants;
          this.instructions = response.data.errors.instructions;
        } else {
          this.$store.dispatch("fetchRecipes");
          this.name = null;
          this.ingrediants = null;
          this.instructions = null;
          this.showConfirmationMessage = true;
          this.favorite = false;
          this.recipe = "";
          setTimeout(() => (this.showConfirmationMessage = false), 2000);
        }
      });
    },
  },
};
</script>