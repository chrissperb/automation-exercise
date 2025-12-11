import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductsPage from "../../support/pages/ProductsPage";
import ProductDetailsPage from "../../support/pages/ProductDetailsPage";

When("I enter product name {string} in search input and click search button", (productName) => {
    ProductsPage.buscarProduto(productName);
});

When("I click on {string} category", (category) => {
    cy.wrap(category).as('selectedCategory');
    cy.contains('.panel-title a', category).click();
});

When("I click on {string} sub-category", (subcategory) => {
    cy.contains('#accordian a', subcategory).should('be.visible').click();
});

When("I enter name {string}, email {string} and review {string}", (name, email, review) => {
    ProductDetailsPage.escreverReview(name, email, review);
});

Then("the products list should be visible", () => {
    ProductsPage.productsList.should('be.visible');
});

Then("all visible products should contain {string} in the name", (productName) => {
    ProductsPage.productsList.each(($el) => {
        cy.wrap($el).should('contain.text', productName);
    });
});

Then("I should see the categories sidebar", () => {
    ProductsPage.categorySidebar.should('be.visible');
});

Then("I should see the text {string} is not visible", (text) => {
    cy.get('body').should('not.contain', text);});

Then("I should see product name, category, price, availability, condition, brand", () => {
    cy.get('.product-information').should('be.visible');
    cy.get('.product-information h2').should('not.be.empty'); 
    cy.get('.product-information p').should('have.length.at.least', 4); 
});