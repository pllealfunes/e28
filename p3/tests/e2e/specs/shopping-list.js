describe('Shopping List Page', () => {

    // Test ingrediant
    let recipe = {
        name: 'Minced Radish Salad',
        id: 1
    }

    let ingrediant = 'Radish';

    it('adds and removes from shopping list', () => {

        // Add to cart from product page
        cy.visit('/recipe/' + recipe.id);
        cy.get('[data-test="add-list"]').click(ingrediant);

        // Confirm cart shows product
        cy.visit('/shoppinglist');
        cy.contains('[data-test="list-contents"]', '1 x ' + ingrediant);

        // Remove from list 
        cy.get('[data-test="delete-item"]').click(ingrediant);
        //cy.contains('[data-test="list-count"]', 0);
        cy.contains('No items');
    })
})