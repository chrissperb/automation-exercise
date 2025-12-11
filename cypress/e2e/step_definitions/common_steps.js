import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/pages/HomePage";
import SignupLoginPage from "../../support/pages/SignupLoginPage";
import RegistrationPage from "../../support/pages/RegistrationPage";
import ProductsPage from "../../support/pages/ProductsPage";
import ContactUsPage from "../../support/pages/ContactUsPage";

// Navegação Genérica
Given("I navigate to the url {string}", (url) => {
    if (url.startsWith('http')) {
        cy.visit(url);
    } else {
        cy.visit(url);
    }
});

When("I click {string} button", (btnText) => {
    const btn = btnText.toLowerCase();

    switch (btn) {
        case 'signup':
            SignupLoginPage.submeterCadastroInicial();
            break;
        case 'login':
            SignupLoginPage.submeterLogin();
            break;
        case 'create account':
            RegistrationPage.clicarCriarConta();
            break;
        case 'continue':
            RegistrationPage.continueButton.click(); 
            break;
        case 'contact us':
            HomePage.clicarNoBotaoHeader('Contact us');
            break;
        case 'test cases':
            HomePage.clicarNoBotaoHeader('Test Cases');
            break;
        case 'logout':
            cy.get('.shop-menu ul.nav a[href="/logout"]')
              .should('be.visible')
              .click();
            break;
        case 'pay and confirm order':
            cy.get('[data-qa="pay-button"]').click();
            break;
        case 'proceed to checkout':
            cy.get('.check_out').click();
            break;
        case 'register / login':
            cy.get('.modal-body a[href="/login"]').click();
            break;
        case 'download invoice':
            cy.contains('Download Invoice').click();
            break;
        case 'delete account':
            cy.contains('a', 'Delete Account').click();
            break;
        case 'home':
            ContactUsPage.clicarHomeAposEnvio();
        default:
            cy.contains('button, a', btnText).click();
            break;
    }
});

When("I scroll down to the footer", () => {
    HomePage.rolarAteOFooter();
});

When("I click on {string} of the first item", (action) => {
    if (action === "View Product") {
        ProductsPage.clicarVerProduto(0);
    }
});

Then("I should see the text {string}", (text) => {
    cy.contains(text, { matchCase: false }).should('be.visible');
});

Then("I should be redirected to the {string} page", (pageName) => {
    const routes = {
        'login': '/login',
        'contact_us': '/contact_us',
        'test_cases': '/test_cases',
        'dashboard': '/' 
    };
    cy.url().should('include', routes[pageName] || pageName);
});

Then("the page title should be {string}", (title) => {
    cy.title().should('eq', title);
});