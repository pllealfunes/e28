<template>
  <div>
    <h1>Rezept</h1>
    <router-link
      data-test="test-account-link"
      id="account-link"
      :to="'/account'"
      >Account</router-link
    >

    <router-link data-test="test-add-link" id="add" :to="'/add'"
      >Add Recipe</router-link
    >

    <div id="recipes">
      <router-link
        data-test="test-recipe-link"
        id="recipe-link"
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
  props: [],
  data: function () {
    return {};
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
  },
};
</script>
