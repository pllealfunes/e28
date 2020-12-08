import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from "@/app.js";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartCount: 0,
        recipes: [],
        user: null,
    },
    mutations: {
        setCartCount(state, payload) {
            state.cartCount = payload;
        },
        setRecipes(state, payload) {
            state.recipes = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
    },
    actions: {
        fetchRecipes(context) {
            axios.get('recipe').then((response) => {
                context.commit('setRecipes', response.data.recipe);
            });
        },
        authUser(context) {
            return new Promise((resolve) => {
                axios.post('auth').then((response) => {
                    if (response.data.authenticated) {
                        context.commit('setUser', response.data.user);
                    } else {
                        context.commit('setUser', false);
                    }

                    resolve();
                });
            });
        },
    },
    getters: {
        getRecipeById(state) {
            return function (id) {
                return state.recipes.filter((recipe) => {
                    return recipe.id == id;
                }, this.id)[0];
            }
        }
    }

})