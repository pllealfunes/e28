describe('Recipe Create Page', () => {

    //User to login as
    let user = {
        name: 'Jill Harvard',
        email: 'jill@harvard.edu',
        password: 'asdfasdf'
    }

    // Test a new recipe
    let recipe = {
        name: 'My New Recipe',
        ingrediants: 'First Ingrediant, Second Ingrediant, Third Ingrediant',
        instructions: '1. First Step, 2. Second Step, 3. Third Step',
    }

    it('adds a new recipe', () => {

        cy.visit('/account');
        cy.get('[data-test=test-email-input]').clear().type(user.email);
        cy.get('[data-test=test-password-input]').clear().type(user.password);
        cy.get('[data-test=test-login-button]').click();
        cy.contains('[data-test="test-welcome-message"]', user.name);


        cy.get('[data-test=test-add-recipe-link]').click();
        cy.get('[data-test=test-recipe-name-input]').clear().type(recipe.name);
        cy.get('[data-test=test-recipe-ingrediants-input]').clear().type(recipe.ingrediants);
        cy.get('[data-test=test-recipe-instructions-input]').clear().type(recipe.instructions);
        cy.get('[data-test=test-add-recipe-button]').click();
        cy.get('[data-test="test-recipe-added-confirmation"]').should('exist');

        // Go to the products page and confirm our new product is visible there
        cy.get('[data-test=test-home-link]').click();
        cy.contains(recipe.name);
    });

    it('shows error messages if new recipe data is submitted blank', () => {

        cy.visit('/account');
        cy.get('[data-test=test-email-input]').clear().type(user.email);
        cy.get('[data-test=test-password-input]').clear().type(user.password);
        cy.get('[data-test=test-login-button]').click();
        cy.contains('[data-test="test-welcome-message"]', user.name);

        cy.get('[data-test="test-add-recipe-link"]').click();

        //Check error messaged after blank submission
        cy.get('[data-test=test-add-recipe-button]').click();
        cy.contains("The name field is required.");
        cy.contains("The ingrediants field is required.");
        cy.contains("The instructions field is required.");
    });

    it('deletes a recipe', () => {
        cy.visit('/account');
        cy.get('[data-test=test-email-input]').clear().type(user.email);
        cy.get('[data-test=test-password-input]').clear().type(user.password);
        cy.get('[data-test=test-login-button]').click();
        cy.contains('[data-test="test-welcome-message"]', user.name);

        cy.get('[data-test=test-home-link]').click();
        cy.contains(recipe.name);
        cy.get('[data-test="test-recipe-link"]').contains(recipe.name).click();
        cy.get('[data-test=test-delete-button]').click();
        cy.location('pathname').should('eq', '/');
    });


})