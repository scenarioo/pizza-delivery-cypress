describe('Order a pizza and drinks from "Hot Pizza Delivery"', () => {
    it('Typical order process for a customer with a known phone number', () => {

        cy.visit('https://scenarioo.org/pizza-delivery/');

        cy.get('#phoneNumber').type('0791111111');
        cy.get('#step-enterPhoneNumber .next').click();

        cy.get('#step-confirmAddress').should('exist');
        cy.get('#step-confirmAddress .yes').click();

        cy.get('#step-selectPizza').should('exist');
        cy.get('#step-selectPizza #v').click();
        cy.get('#step-selectPizza .next').click();

        cy.get('#step-selectDrinks').should('exist');
        cy.get('#step-selectDrinks #dv').click();
        cy.get('#step-selectDrinks .next').click();

        cy.get('#summary_pizza').should('exist').contains('Pizza Verdura');
        cy.get('#summary_drinks').should('exist').contains('Vino Rosso');
        cy.get('#step-summary').should('exist');
        cy.get('#step-summary .next').click();

        cy.get('#step-confirmation').should('exist');
    });
});