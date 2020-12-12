<template>
  <div id="app">
    <list-count></list-count>
    <router-view></router-view>
  </div>
</template>

<script>
import ListCount from "@/components/ListCount.vue";

export default {
  name: "App",
  components: {
    "list-count": ListCount,
  },
  data() {
    return {
      //recipes: [],
    };
  },
  methods: {},
  mounted() {
    this.$store.dispatch("fetchRecipes");
    this.$store.dispatch("authUser");
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
  },
};
</script>


