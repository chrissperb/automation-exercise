import './commands';

window.global = window;

// Ignora erros não tratados da aplicação (famoso "uncaught exceptions")
// Isso evita que o teste falhe por causa de bugs no site Automation Exercise (scripts de ads, etc)
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});