import { Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/pages/HomePage";

Then("I should see the logo visible", () => {
    HomePage.logo.should('be.visible');
});

Then("I should see the navigation bar with {string}", (itemsString) => {
    HomePage.navButtons.invoke('text').then((text) => {
        const items = itemsString.split(', ');
        items.forEach(item => {
            expect(text).to.contain(item);
        });
    });
});

Then("I should see the email input field for subscription", () => {
    HomePage.subscriptionEmailInput.should('be.visible');
});
