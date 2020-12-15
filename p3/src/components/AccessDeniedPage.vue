<template>
  <div>
    <router-link id="home" :to="'/'">Home</router-link>
    <router-link id="account-link" :to="'/account'">Account</router-link>
    <div id="accessed-denied">
      <p>Sign In to access this page and continue on your food journey!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [],
  components: {},
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