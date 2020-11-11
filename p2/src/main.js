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
    { path: '/add', component: CreatePage },
    { path: '/favorites', component: FavoritesPage, props: true },
    { path: '/edit/:id', component: EditPage, props: true },
    { path: '/recipe/:id', component: ShowRecipe, props: true },

  ],
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
