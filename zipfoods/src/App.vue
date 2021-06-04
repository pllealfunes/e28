<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
            exact
            >{{ link }}</router-link
          >
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      links: ["home", "products", "categories"],
      paths: {
        home: "/",
        products: "/products",
        categories: "/categories",
      },
    };
  },
};
</script>

<style lang='scss'>
@import "@/assets/scss/zipfoods.scss";
</style>
