class ProductDetailsPage {
    // Seletores
    get quantityInput() { return cy.get('#quantity'); }
    get addToCartButton() { return cy.get('button.cart'); }
    
    // Seletores de Review
    get reviewNameInput() { return cy.get('#name'); }
    get reviewEmailInput() { return cy.get('#email'); }
    get reviewTextArea() { return cy.get('#review'); }
    get submitReviewButton() { return cy.get('#button-review'); }
    get reviewSuccessMessage() { return cy.get('.alert-success-alert'); }

    // Ações
    aumentarQuantidade(qtd) {
        this.quantityInput.clear().type(qtd);
    }

    adicionarAoCarrinho() {
        this.addToCartButton.click();
    }

    escreverReview(nome, email, texto) {
        this.reviewNameInput.type(nome);
        this.reviewEmailInput.type(email);
        this.reviewTextArea.type(texto);
        this.submitReviewButton.click();
    }
}

export default new ProductDetailsPage();