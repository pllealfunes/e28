describe('Show Recipes', () => {

    // Define a product we can use throughout our tests
    let recipe = {
        name: 'Minced Radish Salad',
        id: 1
    }

    it('shows all the recipes', () => {

        //Go to homepage and confirm the title exists
        cy.visit('/')
        cy.contains('h1', 'Rezept')

        // Confirm there are at least 3 recipes (that's how many recipe seeds exist)
        cy.get('[data-test="test-recipe-link"]').its('length').should('be.gte', 3)

        // Confirm we see a test product
        cy.contains('[data-test="test-recipe-link"]', recipe.name)

        // Confirm we can click on a recipe and go to its individual page
        cy.get('[data-test="test-recipe-link"]').contains(recipe.name).click();

        // Confirm the test recipe page loads
        cy.contains('[data-test="test-recipe-name"]', recipe.name)
        cy.url().should('include', recipe.id)

    })

})