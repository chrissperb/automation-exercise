class HomePage {
    // Seletores
    get logo() { return cy.get('.logo img'); }
    get navButtons() { return cy.get('.shop-menu .nav'); }
    get footer() { return cy.get('#footer'); }
    get subscriptionEmailInput() { return cy.get('#susbscribe_email'); }
    get subscribeButton() { return cy.get('#subscribe'); }

    // Ações
    acessar() {
        cy.visit('/');
    }

    clicarNoBotaoHeader(label) {
        cy.get('.shop-menu').contains(label).click();
    }

    rolarAteOFooter() {
        this.footer.scrollIntoView();
    }
}

export default new HomePage();