describe('Shopping List Page', () => {

    // Test ingrediant
    let recipe = {
        name: 'Minced Radish Salad',
        id: 1
    }

    //let ingrediant = 'Radish';

    it('adds and removes from shopping list', () => {

        // Add to cart from product page
        cy.visit('/recipe/' + recipe.id);
        cy.get('[data-test="test-add-list"]').first().click();

        // Confirm cart shows product
        cy.visit('/shoppinglist');
        cy.contains('[data-test="test-list-contents"]', '1 x ' + 'Radish');

        // Remove from list 
        cy.get('[data-test="test-delete-item"]').first().click();
        cy.contains('[data-test="cart-count"]', 0);
        cy.contains('Nothing To Buy Here');
    })
})