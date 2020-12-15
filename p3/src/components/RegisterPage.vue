<template>
  <div id="register-page">
    <router-link id="home" :to="'/'">Home Page</router-link>
    <div id="registerForm">
      <h2 id="register-title">Register</h2>
      <div>
        <label
          >Name:
          <input
            data-test="test-register-name"
            type="text"
            placeholder="Tina Belcher"
            v-model="data.name"
            v-on:blur="validate()"
        /></label>
      </div>
      <div>
        <label
          >Email:
          <input
            data-test="test-register-email"
            type="text"
            placeholder="tinabelcher@email.com"
            v-model="data.email"
            v-on:blur="validate()"
        /></label>
      </div>
      <div>
        <label
          >Password:
          <input
            data-test="test-register-password"
            type="password"
            placeholder="Must be 8 characters"
            v-model="data.password"
            v-on:blur="validate()"
        /></label>
      </div>

      <button data-test="test-register-button" @click="registerUser">
        Register
      </button>
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