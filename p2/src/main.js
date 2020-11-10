import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import "@/assets/css/styles.css";

import ShowRecipes from '@/components/ShowRecipes.vue';
import ShowRecipe from '@/components/ShowRecipe.vue';
import CreatePage from '@/components/CreatePage.vue';
import EditPage from '@/components/EditPage.vue';
import FavoritesPage from '@/components/FavoritesPage.vue';


Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: ShowRecipes },
    { path: '/recipe/add', component: CreatePage },
    { path: '/recipe/:id', component: ShowRecipe, props: true },
    { path: '/recipe/edit/:id', component: EditPage, props: true },
    { path: '/favorites', component: FavoritesPage, props: true },

  ],
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
