# Project 3
+ By: Paula Leal Funes
+ Production URL: http://e28p3.lefthandedcat.me

## Pages summary
* ShowRecipes - Show all recipes/the home page
* RecipePage - Show a single recipe (only authenticated users can delete a recipe) to delete a recipe
* ShoppingList Page - Shows list of items to buy (click shopping list circle on left corner to view)
* CreatePage - Create a new recipe (only accessible to authenticated users)
* EditRecipe - Edit a recipe (only accessible to authenticated users)
* Account - Where a user can login. Also has to link to registration page if user would like to create an account

## SFC summary
ListCount.vue is the only SFC - it shows the amount of items in the user's shopping list (accessible with or without authentication)
  
## Server interaction
All four CRUD operations are used in the application
* Create - CreatePage to create a recipe
* Read - ShowRecipes to see all recipes and Recipe page to see a single recipe
* Update - Edit Page to edit a recipe
* Delete - Recipe Page to delete a recipe

## Reuirements
* State management w/Vuex - recipes
* Authentication - Ability to register and login. The EditeRecipe, CreateRecipe, and the ability to Delete on the Recipe page are restricted.
* Form Validation - AccountPage, RegisterPage, CreateRecipe, and EditRecipe.
* Passing E2E Tests

## Other 
Local storage is used to add and delete items from the Shopping List.
