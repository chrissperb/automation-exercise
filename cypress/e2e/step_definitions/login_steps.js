import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import SignupLoginPage from "../../support/pages/SignupLoginPage.js";

Given("I am logged in with valid credentials", () => {
    cy.visit('/login');
    
    const email = "alunoQAunyleya@gmail.com"; 
    const senha = "password123";

    SignupLoginPage.preencherLogin(email, senha);
    SignupLoginPage.submeterLogin();

    cy.contains("Logged in as").should('be.visible');
});

When("I enter valid email {string} and password {string}", (email, password) => {
    SignupLoginPage.preencherLogin(email, password);
});

When("I enter invalid email {string} and password {string}", (email, password) => {
    SignupLoginPage.preencherLogin(email, password);
});

When("I leave email and password fields empty", () => {
    SignupLoginPage.loginEmailInput.clear();
    SignupLoginPage.loginPasswordInput.clear();
});

Then("I should not see the login form", () => {
    SignupLoginPage.loginEmailInput.should('not.exist');
});

Then("I should see the error message {string}", (msg) => {
    SignupLoginPage.loginErrorMessage.should('contain.text', msg);
});

Then("I should remain on the login page", () => {
    cy.url().should('include', '/login');
});