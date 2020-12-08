import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import store from '@/common/store';
import "@/assets/css/styles.css";

/*import ShowRecipes from '@/components/ShowRecipes.vue';
import RecipePage from '@/components/RecipePage.vue';
import CreatePage from '@/components/CreatePage.vue';
import EditPage from '@/components/EditPage.vue';
import FavoritesPage from '@/components/FavoritesPage.vue';
import ShoppingListPage from '@/components/ShoppingList.vue';
import AccountPage from '@/components/AccountPage.vue';*/
import router from '@/common/router.js'

Vue.use(VueRouter);
Vue.config.productionTip = false

/*const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: ShowRecipes },
    { path: '/add', component: CreatePage },
    { path: '/account', component: AccountPage },
    { path: '/favorites', component: FavoritesPage, props: true },
    { path: '/shoppingList', component: ShoppingListPage, props: true },
    { path: '/edit/:id', component: EditPage, props: true },
    { path: '/recipe/:id', component: RecipePage, props: true },

  ],
})*/

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
