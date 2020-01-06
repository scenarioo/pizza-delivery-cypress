describe('Look up phone number of "Hot Pizza Delivery"', () => {
    it('Finds phone number on start page', () => {
        cy.visit('https://scenarioo.org/pizza-delivery/');

        cy.get('#hot-pizza-delivery-phone-number').should('exist');
    });
});