describe('Edit Recipe Page', () => {

    //User to login as
    let user = {
        name: 'Jill Harvard',
        email: 'jill@harvard.edu',
        password: 'asdfasdf'
    }

    // Test a new recipe
    let recipe = {
        name: 'Eggs with Ham',
        id: 3
    }

    let editRecipe = {
        instructions: '1. Put oil in a pan, 2. Fry for 2 minutes chopped up onion tomatoe and garlic, 3. Add beat eggs and chopped up ham, 4. Cook until eggs are ready and enjoy'
    }

    it('edits a recipe', () => {

        // First we have to login, because only auth'd users can add products
        // Login is a custom command defined in /tests/e2e/support/commands.js
        // Ref: https://docs.cypress.io/api/cypress-api/custom-commands.html
        //cy.login();
        cy.visit('/account');
        cy.get('[data-test="test-email-input"]').clear().type(user.email);
        cy.get('[data-test="test-password-input"]').clear().type(user.password);
        cy.get('[data-test="test-login-button"]').click();
        cy.contains('[data-test="test-welcome-message"]', user.name);

        cy.get('[data-test="test-home-link"]').click();
        cy.get('[data-test="test-recipe-link"]').contains(recipe.name).click();
        cy.get('[data-test="test-edit-link"]').click();
        cy.contains('h1', 'Edit Recipe');


        cy.get('[data-test="test-edit-instructions-input"]').clear().type(editRecipe.instructions);
        cy.get('[data-test="test-edit-button"]').click();
        cy.get('[data-test="test-recipe-edited-confirmation"]').should('exist');

        // Go bakc to the recipe page and confirm our edit to the instructions is visible
        cy.get('[data-test="test-previous-link"]').click();
        cy.contains('4. Cook until eggs are ready and enjoy');
    });

    it('shows error messages if form is blank and submitted blank', () => {

        cy.visit('/account');
        cy.get('[data-test="test-email-input"]').clear().type(user.email);
        cy.get('[data-test="test-password-input"]').clear().type(user.password);
        cy.get('[data-test="test-login-button"]').click();
        cy.contains('[data-test="test-welcome-message"]', user.name);

        cy.get('[data-test="test-home-link"]').click();
        cy.get('[data-test="test-recipe-link"]').contains(recipe.name).click();
        cy.get('[data-test="test-edit-link"]').click();
        cy.contains('h1', 'Edit Recipe');

        cy.get('[data-test="test-edit-name-input"]').clear().should('have.value', '');
        cy.get('[data-test="test-edit-ingrediants-input"]').clear().should('have.value', '');
        cy.get('[data-test="test-edit-instructions-input"]').clear().should('have.value', '');
        cy.get('[data-test="test-edit-button"]').click();
        cy.contains("The name field is required.");
        cy.contains("The ingrediants field is required.");
        cy.contains("The instructions field is required.");
    });
})