import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactUsPage from "../../support/pages/ContactUsPage";

When("I enter name {string}, email {string}, subject {string} and message {string}", (name, email, subject, message) => {
    ContactUsPage.preencherFormulario(name, email, subject, message);
});

When("I upload the file {string}", (fileName) => {
    ContactUsPage.fazerUpload(fileName);
});

When("I click {string} button on contact form", (btnName) => {
    if (btnName === "Submit") {
        ContactUsPage.clicarEnviar();
                cy.on('window:confirm', (text) => {
            expect(text).to.contains('Press OK to proceed!');
            return true; 
        });
    }
});

Then("the browser should validate the mandatory fields", () => {
    ContactUsPage.emailInput.should('match', ':invalid');
});