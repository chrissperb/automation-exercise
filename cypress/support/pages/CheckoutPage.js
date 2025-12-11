class CheckoutPage {
    // Seletores
    get addressDetails() { return cy.get('#address_delivery'); }
    get reviewOrderTable() { return cy.get('#cart_info'); }
    get commentTextArea() { return cy.get('textarea[name="message"]'); }
    get placeOrderButton() { return cy.get('a[href="/payment"]'); }

    // Ações
    preencherComentario(texto) {
        this.commentTextArea.type(texto);
    }

    clicarPlaceOrder() {
        this.placeOrderButton.click({ force: true });
    }
}

export default new CheckoutPage();