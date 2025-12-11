class RegistrationPage {
    // Seletores 
    get passwordInput() { return cy.get('#password'); }
    get firstNameInput() { return cy.get('#first_name'); }
    get lastNameInput() { return cy.get('#last_name'); }
    get addressInput() { return cy.get('#address1'); }
    get stateInput() { return cy.get('#state'); }
    get cityInput() { return cy.get('#city'); }
    get zipcodeInput() { return cy.get('#zipcode'); }
    get mobileInput() { return cy.get('#mobile_number'); }
    get createAccountButton() { return cy.get('[data-qa="create-account"]'); }
    get successMessage() { return cy.get('[data-qa="account-created"]'); }
    get continueButton() { return cy.get('[data-qa="continue-button"]'); }

    // Ações
    preencherDetalhesConta(pass) {
        this.passwordInput.type(pass);
    }

    preencherEndereco(fName, lName, addr, state, city, zip, mobile) {
        this.firstNameInput.type(fName);
        this.lastNameInput.type(lName);
        this.addressInput.type(addr);
        this.stateInput.type(state);
        this.cityInput.type(city);
        this.zipcodeInput.type(zip);
        this.mobileInput.type(mobile);
    }

    clicarCriarConta() {
        this.createAccountButton.click();
    }
}

export default new RegistrationPage();