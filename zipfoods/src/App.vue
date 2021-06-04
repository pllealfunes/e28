<template>
  <div id="app">
    <nav>
      <ul>
        <li v-for="link in links" :key="link">
          <a href="#" @click="page = link">{{ link }}</a>
        </li>
      </ul>
    </nav>

    <component v-bind:is="linkComponents[page]"></component>
  </div>
</template>

<script>
import CategoriesPage from "./components/pages/CategoriesPage.vue";
import HomePage from "./components/pages/HomePage.vue";
import ProductsPage from "./components/pages/Products.vue";
export default {
  name: "App",
  components: {
    "home-page": HomePage,
    "categories-page": CategoriesPage,
    "products-page": ProductsPage,
  },
  data: function () {
    return {
      page: "home",
      links: ["home", "products", "categories"],
      linkComponents: {
        home: "home-page",
        products: "products-page",
        categories: "categories-page",
      },
    };
  },
};
</script>

<style lang='scss'>
@import "@/assets/scss/zipfoods.scss";
</style>
