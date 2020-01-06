export const EnterPhoneNumberPage = {

    navigateToPage: () => {
        cy.visit('https://scenarioo.org/pizza-delivery/');
    },

    assertPhoneNumberOfHotPizzaDeliveryIsDisplayed: () => {
        cy.get('#hot-pizza-delivery-phone-number').should('exist');
    },
};