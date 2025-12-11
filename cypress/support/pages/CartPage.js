class CartPage {
    // Seletores
    get cartTable() { return cy.get('#cart_info_table'); }
    get proceedToCheckoutButton() { return cy.get('.check_out'); }
    get emptyCartMessage() { return cy.get('#empty_cart'); } // O seletor pode variar (validar visualmente)

    // Ações
    removerProduto(indice = 0) {
        cy.get('.cart_quantity_delete').eq(indice).click();
    }

    validarQuantidadeProduto(indice, qtdEsperada) {
        cy.get('tr').eq(indice + 1) // +1 porque a primeira tr é o header
          .find('.cart_quantity button')
          .should('have.text', qtdEsperada);
    }

    irParaCheckout() {
        this.proceedToCheckoutButton.click();
    }
}

export default new CartPage();