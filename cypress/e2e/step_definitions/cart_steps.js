import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductsPage from "../../support/pages/ProductsPage";
import ProductDetailsPage from "../../support/pages/ProductDetailsPage";
import CartPage from "../../support/pages/CartPage";

Given("I have a product in my cart", () => {
    cy.visit('/')
    ProductsPage.adicionarProdutoAoCarrinho(0);
    ProductsPage.continueShoppingButton.click();
});

When("I hover over the first product and click 'Add to cart'", () => {
    ProductsPage.adicionarProdutoAoCarrinho(0);
});

When("I hover over the second product and click 'Add to cart'", () => {
    ProductsPage.adicionarProdutoAoCarrinho(1);
});

When("I click {string} button in the modal", (btnText) => {
    if (btnText === "View Cart") {
        ProductsPage.viewCartModalButton.click();
    } else if (btnText === "Continue Shopping") {
        ProductsPage.continueShoppingButton.click();
    }
});

When("I increase the quantity to {string}", (qtd) => {
    ProductDetailsPage.aumentarQuantidade(qtd);
});

Then("I should see {int} product(s) in the cart table", (qtd) => {
    CartPage.cartTable.find('tbody tr').should('have.length', qtd);
});

Then("I should see the product in the cart with quantity {string}", (qtd) => {
    CartPage.validarQuantidadeProduto(0, qtd);
});

When("I click the {string} button to remove the product", (btnName) => {
    CartPage.removerProduto(0);
});

When("I click {string} on a recommended item", (btnText) => {
    cy.get('.recommended_items .add-to-cart').first().click({force: true});
});

Then("I should see the recommended product in the cart", () => {
    CartPage.cartTable.find('tbody tr').should('have.length', 1);
});