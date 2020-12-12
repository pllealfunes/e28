<template>
  <div id="create-page">
    <h1>Edit Recipe</h1>
    <router-link data-test="test-home-link" id="home" :to="'/'"
      >Home Page</router-link
    >
    <router-link id="account-link" :to="'/account'">Account</router-link>
    <router-link
      data-test="test-previous-link"
      id="previous"
      v-if="recipe"
      :to="'/recipe/' + recipe.id"
      >Back to Recipe</router-link
    >
    <div
      data-test="test-recipe-edited-confirmation"
      id="confirmation-message"
      v-if="showConfirmationMessage"
    >
      Successfully Edited Recipe
    </div>
    <div v-if="recipe" id="addRecipe">
      <ul id="create-errors" v-if="errors">
        <li class="error" v-for="(error, index) in errors" :key="index">
          {{ error.toString() }}
        </li>
      </ul>

      <label for="name"></label>
      <input
        id="name"
        data-test="test-edit-name-input"
        type="text"
        placeholder="New Recipe"
        v-model="recipe.name"
        v-on:blur="validate()"
      />

      <label for="ingrediants"></label>
      <textarea
        id="ingrediants"
        data-test="test-edit-ingrediants-input"
        placeholder="ex: Ingrediant, Ingrediant"
        v-model="recipe.ingrediants"
        v-on:blur="validate()"
      />

      <label for="instructions"></label>
      <textarea
        id="instructions"
        data-test="test-edit-instructions-input"
        placeholder="ex: 1. Instrcution, 2. Instruction"
        v-model="recipe.instructions"
        v-on:blur="validate()"
      />
      <button data-test="test-edit-button" id="edit-recipe" @click="editRecipe">
        Edit Recipe
      </button>
    </div>
  </div>
</template>

<script>
import { axios } from "@/app.js";
import Validator from "validatorjs";

export default {
  props: ["id"],
  data: function () {
    return {
      errors: null,
      name: null,
      ingrediants: null,
      instructions: null,
      favorite: false,
      showConfirmationMessage: false,
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
    editRecipe() {
      axios.put("/recipe/" + this.recipe.id, this.recipe).then((response) => {
        if (response.data.errors) {
          //this.name = response.data.errors.name;
          //this.ingrediants = response.data.errors.ingrediants;
          //this.instructions = response.data.errors.instructions;
          this.errors = response.data.errors;
          this.$store.dispatch("fetchRecipes");
        } else {
          this.$store.dispatch("fetchRecipes");
          //this.name = null;
          //this.ingrediants = null;
          //this.instructions = null;
          //this.errors = response.data.errors;
          this.showConfirmationMessage = true;
          setTimeout(() => (this.showConfirmationMessage = false), 2000);
        }
      });
    },
  },
  computed: {
    recipe() {
      return this.$store.getters.getRecipeById(this.id);
    },
    recipes() {
      return this.$store.state.recipes;
    },
  },
};
</script>
