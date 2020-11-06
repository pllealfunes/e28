<template>
  <div id="create-page">
    <router-link id="back" :to="'/'">Home Page</router-link>
    <form>
      <label for="entry">New Recipe: </label>
      <input id="entry" type="text" />

      <label for="ingrediants">Ingrediants: </label>
      <textarea id="ingrediants" />

      <label for="istructions">Steps: </label>
      <textarea id="instructions" />

      <button>Delicious!</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "create-page",
  data() {
    return {};
  },
};
</script>