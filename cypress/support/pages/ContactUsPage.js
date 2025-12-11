class ContactUsPage {
    // Seletores
    get nameInput() { return cy.get('[data-qa="name"]'); }
    get emailInput() { return cy.get('[data-qa="email"]'); }
    get subjectInput() { return cy.get('[data-qa="subject"]'); }
    get messageInput() { return cy.get('[data-qa="message"]'); }
    get uploadInput() { return cy.get('input[name="upload_file"]'); }
    get submitButton() { return cy.get('[data-qa="submit-button"]'); }
    get successMessage() { return cy.get('.status'); } 
    get homeButton() { return cy.get('#form-section .btn-success'); } 

    // Ações
    preencherFormulario(nome, email, assunto, mensagem) {
        this.nameInput.type(nome);
        this.emailInput.type(email);
        this.subjectInput.type(assunto);
        this.messageInput.type(mensagem);
    }

    fazerUpload(nomeArquivo) {
        cy.fixture(nomeArquivo).as('arquivo');
        this.uploadInput.selectFile('@arquivo');
    }

    clicarEnviar() {
        this.submitButton.click();
    }
    
    clicarHomeAposEnvio() {
        this.homeButton.click();
    }
}

export default new ContactUsPage();