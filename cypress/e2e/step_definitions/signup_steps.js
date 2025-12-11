import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignupLoginPage from "../../support/pages/SignupLoginPage";
import RegistrationPage from "../../support/pages/RegistrationPage";

When("I enter name {string} and email address {string} in the signup form", (name, email) => {
    let emailFinal = email;

    if (email === 'DYNAMIC_EMAIL') {
        const timeStamp = Date.now();
        emailFinal = `qa_auto_${timeStamp}@test.com`;        
    }

    SignupLoginPage.preencherCadastroInicial(name, emailFinal);
});

When("I fill all required details: Password, Date of Birth", () => {
    RegistrationPage.preencherDetalhesConta("password123");
});

When("I fill all address details: First Name, Last Name, Address, State, City, Zipcode, Mobile Number", () => {
    RegistrationPage.preencherEndereco(
        "QA", "Tester", "Rua Automacao 123", "Santa Catarina", "Imbituba", "88780000", "4899999999"
    );
});

Then("I should remain on the registration page", () => {
    cy.url().should('include', '/signup');
    cy.get('.login-form').should('be.visible');
});

Then("I should see validation errors on mandatory fields", () => {
    RegistrationPage.passwordInput.should('match', ':invalid');
    RegistrationPage.firstNameInput.should('match', ':invalid');
    RegistrationPage.lastNameInput.should('match', ':invalid');
    RegistrationPage.addressInput.should('match', ':invalid');
});

Then("the browser should validate the email field structure", () => {
    SignupLoginPage.signupEmailInput.should('match', ':invalid');
    SignupLoginPage.signupEmailInput.invoke('prop', 'validationMessage')
        .should('not.be.empty');
});