<template>
  <div id="account-page">
    <router-link id="home" :to="'/'">Home Page</router-link>
    <router-link id="add" :to="'/add'">Add Recipe</router-link>
    <div id="user-account" v-if="user">
      <h2 id="account-name">Hi, {{ user.name }}!</h2>
      <div id="favorites">
        <strong id="your-favorites">Your Favorites</strong>
        <p id="no-favorites" v-if="favorites && favorites.length == 0">
          No favorites yet.
        </p>
        <li
          id="favorites"
          v-for="(favorite, key) in favorites"
          v-bind:key="key"
        >
          {{ favorite.name }}
        </li>
      </div>

      <button id="logout-button" @click="logout">Logout</button>
    </div>

    <div v-else id="loginForm">
      <h2 id="login-title">Login</h2>
      <div>
        <label
          >Email:
          <input type="text" v-model="data.email" v-on:blur="validate()"
        /></label>
      </div>
      <div>
        <label
          >Password:
          <input type="password" v-model="data.password" v-on:blur="validate()"
        /></label>
      </div>

      <button @click="login">Login</button>
      <br />
      <ul id="account-errors" v-if="errors">
        <li class="error" v-for="(error, index) in errors" :key="index">
          {{ error.toString() }}
        </li>
      </ul>
      <router-link id="register-link" :to="'/register'"
        >No Account? Register Now!</router-link
      >
    </div>
  </div>
</template>

<script>
import { axios } from "@/app.js";
import Validator from "validatorjs";

export default {
  data() {
    return {
      // Form is prefilled for demonstration purposes; remove in final application
      data: {
        email: "jill@harvard.edu",
        password: "asdfasdf",
      },
      errors: null,
      favorites: [],
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    recipes() {
      return this.$store.state.recipes;
    },
  },
  methods: {
    validate() {
      let validator = new Validator(this.data, {
        email: "required",
        password: "required",
      });

      this.errors = validator.errors.all();

      return validator.passes();
    },
    loadFavorites() {
      if (this.user) {
        // Because favorite is a auth-protected resource, this will
        // only return favorites belonging to the authenticated user
        axios.get("favorite").then((response) => {
          this.favorites = response.data.favorite.map((favorite) => {
            return this.$store.getters.getRecipeById(favorite.recipe_id);
          });
        });
      }
    },
    login() {
      axios.post("login", this.data).then((response) => {
        if (response.data.authenticated) {
          this.$store.commit("setUser", response.data.user);
        } else {
          this.errors = response.data.errors;
        }
      });
    },
    logout() {
      axios.post("logout").then((response) => {
        if (response.data.success) {
          this.$store.commit("setUser", null);
        }
      });
    },
  },
  watch: {
    // When user changes, update favorites
    user() {
      this.loadFavorites();
    },
  },
  mounted() {
    this.loadFavorites();
  },
};
</script>