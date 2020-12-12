describe('Register Page', () => {

    let user = {
        name: 'Bob Belcher',
        email: 'bobbelcher@email.com',
        password: 'burgers1'
    }

    it('shows an error if register is invalid', () => {
        cy.visit('/register');
        cy.get('[data-test=test-register-name]').clear().type(user.name);
        cy.get('[data-test=test-register-email]').clear().type('this-email-should-not-work');
        cy.get('[data-test=test-register-password]').clear().type('example');
        cy.get('[data-test=test-register-button]').click();
        cy.contains('The email must be a valid email address.');
        cy.contains('The password must be at least 8 characters.');
    })

    it('lets a user register and be taken to account page', () => {
        cy.visit('/register');
        cy.get('[data-test=test-register-name]').clear().type(user.name);
        cy.get('[data-test=test-register-email]').clear().type(user.email);
        cy.get('[data-test=test-register-password]').clear().type(user.password);
        cy.get('[data-test=test-register-button]').click();

        // When the register button is clicked, perosn is redirected to account page
        cy.location('pathname').should('eq', '/account');
        // To be sure that they're on the account page they should see the 
        // welcome message with their name
        cy.get('[data-test=test-welcome-message]').should('exist');

    })

})