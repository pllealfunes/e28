import VueRouter from 'vue-router';
import store from '@/common/store';

// Define all the routes of our application
const routes = [
    {
        path: '/',
        // Rather than having to have separate import statements at the top of this page for each component
        // Here's a simple way we can directly make our components available
        component: () => import('@/components/ShowRecipes.vue'),
    },
    {
        path: '/add',
        component: () => import('@/components/CreatePage.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/account',
        component: () => import('@/components/AccountPage.vue'),
    },
    {
        path: '/register',
        component: () => import('@/components/RegisterPage.vue'),
    },
    {
        path: '/shoppingList',
        component: () => import('@/components/ShoppingList.vue'),
    },
    {
        path: '/edit/:id',
        component: () => import('@/components/EditPage.vue'),
        // Note the addition of this meta attribute:
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/recipe/:id',
        component: () => import('@/components/RecipePage.vue'),
        props: true,
    },
    {
        // This is a route we can direct the user to if they try to access a part of the site they don't have privileges for
        path: '/denied',
        component: () => import('@/components/AccessDeniedPage.vue'),
    },

];

// Initialize our router
const router = new VueRouter({
    routes,
    mode: 'history'
})

// beforeEach provides a way to execute some code before a route is resolved
// Ref: https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach(async (to, from, next) => {

    // Exact the meta information from our routes
    // Ref: https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    const decide = () => {
        if (requiresAuth && !store.state.user) {
            next('/denied');
        }
        else {
            next();
        }
    }

    // If we don't have the user yet, dispatch our Vuex authUser action
    if (store.state.user === null) {
        store.dispatch('authUser').then(() => {
            decide();
        });
    } else {
        decide();
    }

});

export default router;