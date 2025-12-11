import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CheckoutPage from "../../support/pages/CheckoutPage";
import PaymentPage from "../../support/pages/PaymentPage";
import RegistrationPage from "../../support/pages/RegistrationPage";
import SignupLoginPage from "../../support/pages/SignupLoginPage";
import CartPage from "../../support/pages/CartPage";

When("I add products to cart", () => {
    cy.get('.features_items .add-to-cart').first().click({force: true});
    cy.get('.modal-footer button').click(); // Continue Shopping
});

When("I complete the registration process", () => {
    SignupLoginPage.submeterCadastroInicial();
    RegistrationPage.preencherDetalhesConta("password123");
    RegistrationPage.preencherEndereco(
        "QA", "Tester", "Rua Automacao", "Estado Teste", "Cidade Teste", "00000", "999999999"
    );
    RegistrationPage.clicarCriarConta();
});

When("I proceed to checkout and payment", () => {
    cy.contains('a', 'Cart').click();
    CartPage.irParaCheckout();
    CheckoutPage.preencherComentario("Payment for Invoice Test");
    CheckoutPage.clicarPlaceOrder();
    PaymentPage.preencherPagamento("QA Invoice", "411111111111", "333", "01", "2030");
    PaymentPage.submeterPagamento();
});

When("I enter description in comment {string} and click {string}", (comment, btnText) => {
    CheckoutPage.preencherComentario(comment);
    if(btnText === "Place Order") {
        CheckoutPage.clicarPlaceOrder();
    }
});

When("I enter payment details: Name {string}, Card {string}, CVC {string}, Expiration {string} {string}", (name, card, cvc, month, year) => {
    PaymentPage.preencherPagamento(name, card, cvc, month, year);
});

When("I process the payment", () => {
    PaymentPage.preencherPagamento("QA Tester", "411111111111", "123", "01", "2030");
    PaymentPage.submeterPagamento();
});

Then("I should see Address Details and Review Your Order", () => {
    CheckoutPage.addressDetails.should('be.visible');
    CheckoutPage.reviewOrderTable.should('be.visible');
});

Then("the invoice file should be downloaded", () => {
    const fileName = "invoice.txt"; 
    cy.readFile(`cypress/downloads/${fileName}`).should('exist');
});