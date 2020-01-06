import {EnterPhoneNumberPage} from "../support/page-objects/EnterPhoneNumberPage";

describe('Look up phone number of "Hot Pizza Delivery"', () => {
    it('Finds phone number on start page', () => {
        EnterPhoneNumberPage.navigateToPage();
        EnterPhoneNumberPage.assertPhoneNumberOfHotPizzaDeliveryIsDisplayed();
    });
});