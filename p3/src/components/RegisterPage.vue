<template>
  <div id="register-page">
    <router-link id="home" :to="'/'">Home Page</router-link>
    <router-link id="add" :to="'/add'">Add Recipe</router-link>
    <div id="registerForm">
      <h2 id="register-title">Register</h2>
      <div>
        <label
          >Name: <input type="text" v-model="data.name" v-on:blur="validate()"
        /></label>
      </div>
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

      <button @click="registerUser">Register</button>
      <br />
      <ul v-if="errors">
        <li id="register-errors" v-for="(error, index) in errors" :key="index">
          {{ error.toString() }}
        </li>
      </ul>
      <router-link id="login-link" :to="'/account'"
        >Have an Account? Login Now!</router-link
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
        name: null,
        email: null,
        password: null,
      },
      errors: null,
      favorites: [],
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    validate() {
      let validator = new Validator(this.data, {
        name: "required",
        email: "required",
        password: "required",
      });

      this.errors = validator.errors.all();

      return validator.passes();
    },
    registerUser() {
      axios.post("/register", this.data).then((response) => {
        if (response.data.success) {
          this.$store.commit("setUser", response.data.user);
          this.$router.push("/account");
        } else {
          this.errors = response.data.errors;
        }
      });
    },
  },
};
</script>