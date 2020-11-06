import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import "@/assets/css/styles.css";

import ShowRecipes from '@/components/ShowRecipes.vue';
import ShowRecipe from '@/components/ShowRecipe.vue';
import CreatePage from '@/components/CreatePage.vue';


Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: ShowRecipes },
    { path: '/recipe/:id', component: ShowRecipe, props: true },
    { path: '/add', component: CreatePage, props: true }
  ],
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
