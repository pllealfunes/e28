describe('Recipe Page', () => {

    // Test recipe
    let recipe = {
        name: 'Minced Radish Salad',
        id: 1
    }

    // Go to individual recipe page and see if it contains test recipe name
    it('shows a recipe', () => {
        cy.visit('/recipe/' + recipe.id);
        cy.contains('[data-test="recipe-name"]', recipe.name);
    })

    // Go to individual test recipe page and click on ingrediant to add to shopping list
    // When added check for confirmation
    it('adds to shopping list', () => {
        cy.visit('/recipe/' + recipe.id);

        cy.get('[data-test="add-list"]').click({ multiple: true });

        cy.get('[data-test="add-confirmation"]').should('exist');
        //cy.contains('[data-test="cart-count"]', 1);
    })
})