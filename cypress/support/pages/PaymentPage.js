class PaymentPage {
    // Seletores usando data-qa (Melhores seletores possíveis!)
    get nameOnCard() { return cy.get('[data-qa="name-on-card"]'); }
    get cardNumber() { return cy.get('[data-qa="card-number"]'); }
    get cvc() { return cy.get('[data-qa="cvc"]'); }
    get expiryMonth() { return cy.get('[data-qa="expiry-month"]'); }
    get expiryYear() { return cy.get('[data-qa="expiry-year"]'); }
    get payButton() { return cy.get('[data-qa="pay-button"]'); }
    get successMessage() { return cy.get('[data-qa="order-placed"]'); }
    
    // Seletores extras
    get downloadInvoiceButton() { return cy.get('.check_out'); }
    get continueButton() { return cy.get('[data-qa="continue-button"]'); }

    // Ações
    preencherPagamento(nome, cartao, cvc, mes, ano) {
        this.nameOnCard.type(nome);
        this.cardNumber.type(cartao);
        this.cvc.type(cvc);
        this.expiryMonth.type(mes);
        this.expiryYear.type(ano);
    }

    submeterPagamento() {
        this.payButton.click();
    }
}

export default new PaymentPage();