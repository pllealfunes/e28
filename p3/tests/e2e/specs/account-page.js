describe('Account Page', () => {

    let user = {
        name: 'Jill Harvard',
        email: 'jill@harvard.edu',
        password: 'asdfasdf'
    }

    it('shows an error if login is invalid', () => {
        cy.visit('/account');
        cy.get('[data-test=test-email-input]').clear().type(user.email);
        cy.get('[data-test=test-password-input]').clear().type('this-password-should-not-work');
        cy.get('[data-test=test-login-button]').click();
        cy.contains('These credentials do not match our records');
    })

    it('lets a user log in and log out', () => {
        cy.visit('/account');
        cy.get('[data-test=test-email-input]').clear().type(user.email);
        cy.get('[data-test=test-password-input]').clear().type(user.password);
        cy.get('[data-test=test-login-button]').click();
        cy.contains('[data-test="test-welcome-message"]', user.name);

        //cy.get('[data-test=test-logout-button]').click({ force: true });

        // We know logout works if we see the login button again
        //cy.get('[data-test=test-login-button]').should('exist');
        //cy.contains('h1', 'Login');
    })

    it('lets a user log out', () => {
        //cy.get('#logout-button').click();
        //cy.url().should('include', '/account')
        // We know logout works if we see the login button again
        cy.get('[data-test=test-logout-button]').click();
        cy.get('[data-test=test-login-button]').should('exist');
        //cy.contains('h1', 'Login');
    })

})