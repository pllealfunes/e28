# Project 2
+ By: Paula Leal Funes
+ Production URL: http://e28p2.lefthandedcat.me

## Pages summary
* ShowRecipes - Show all recipes/the home page
* RecipePage - Show a single recipe
* ShoppingList Page - shows shopping list (click shopping list circle on left corner)
* FavoritesPage - Shows list of favorite recipes
* CreatePage - Create a new recipe
* EditRecipe - Edit a recipe

## SFC summary
ListCount.vue is the only SFC
  
## Server interaction
All four CRUD operations are used in the application.
* Create - CreatePage
* Read - ShowRecipes, Recipe page, and Shopping List
* Update - Edit Page
* Delete - Recipe Page

## Outside resources
* Used this information to add an Ingrediant to the Shopping List: https://stackoverflow.com/questions/49530453/vue-js-javascript-create-new-object-onclick-with-one-value-being-the-value-of-t
* Used this information to help format my error messages on my Create Page: https://stackoverflow.com/questions/46970642/how-to-display-error-message-in-front-end-using-vue-js

## Notes for instructor
Error messages will not display on the Edit Page if a field is left blank but will still update the recipe even with a blank space. There isn't a way to delete an item from the shopping list.
