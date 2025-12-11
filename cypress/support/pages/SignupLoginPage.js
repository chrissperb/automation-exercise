class SignupLoginPage {
    // Seletores - Login
    get loginEmailInput() { return cy.get('[data-qa="login-email"]'); }
    get loginPasswordInput() { return cy.get('[data-qa="login-password"]'); }
    get loginButton() { return cy.get('[data-qa="login-button"]'); }
    get loginErrorMessage() { return cy.get('.login-form p'); }

    // Seletores - Início Cadastro
    get signupNameInput() { return cy.get('[data-qa="signup-name"]'); }
    get signupEmailInput() { return cy.get('[data-qa="signup-email"]'); }
    get signupButton() { return cy.get('[data-qa="signup-button"]'); }
    get signupErrorMessage() { return cy.get('.signup-form p'); }

    // Ações
    preencherLogin(email, senha) {
        this.loginEmailInput.type(email);
        this.loginPasswordInput.type(senha);
    }

    submeterLogin() {
        this.loginButton.click();
    }

    preencherCadastroInicial(nome, email) {
        this.signupNameInput.type(nome);
        this.signupEmailInput.type(email);
    }

    submeterCadastroInicial() {
        this.signupButton.click();
    }
}

export default new SignupLoginPage();