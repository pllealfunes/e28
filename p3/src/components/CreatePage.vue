<template>
  <div id="create-page">
    <h1>Add New Recipe</h1>
    <router-link id="home" :to="'/'">Home Page</router-link>
    <router-link id="account-link" :to="'/account'">Sign In</router-link>
    <div id="confirmation-message" v-if="showConfirmationMessage">
      Successfully Added Recipe
    </div>

    <ul id="create-errors" v-if="errors">
      <li class="error" v-for="(error, index) in errors" :key="index">
        {{ error.toString() }}
      </li>
    </ul>

    <div id="addRecipe">
      <label for="name"></label>
      <input
        id="name"
        type="text"
        placeholder="New Recipe"
        v-model="recipe.name"
        v-on:blur="validate()"
      />

      <label for="ingrediants"></label>
      <textarea
        id="ingrediants"
        placeholder="ex: Ingrediant, Ingrediant"
        v-model="recipe.ingrediants"
        v-on:blur="validate()"
      />

      <label for="instructions"></label>
      <textarea
        id="instructions"
        placeholder="ex: 1. Instrcution, 2. Instruction"
        v-model="recipe.instructions"
        v-on:blur="validate()"
      />

      <button id="added-recipe" @click="addRecipe">Delicious!</button>
    </div>
  </div>
</template>

<script>
import { axios } from "@/app.js";
import Validator from "validatorjs";
export default {
  name: "create-page",
  data() {
    return {
      errors: null,
      showConfirmationMessage: false,
      recipe: {
        name: "",
        ingrediants: "",
        instructions: "",
      },
    };
  },
  methods: {
    validate() {
      let validator = new Validator(this.recipe, {
        name: "required",
        ingrediants: "required",
        instructions: "required",
      });

      this.errors = validator.errors.all();

      return validator.passes();
    },
    addRecipe() {
      //if (this.errors.length == 0) {
      axios.post("/recipe/", this.recipe).then((response) => {
        if (response.data.errors) {
          //this.name = response.data.errors.name;
          //this.ingrediants = response.data.errors.ingrediants;
          //this.instructions = response.data.errors.instructions;
          this.errors = response.data.errors;
        } else {
          this.$store.dispatch("fetchRecipes");
          //this.name = null;
          //this.ingrediants = null;
          //this.instructions = null;
          this.showConfirmationMessage = true;
          this.recipe = "";
          setTimeout(() => (this.showConfirmationMessage = false), 2000);
        }
      });
    },
    //},
  },
};
</script>