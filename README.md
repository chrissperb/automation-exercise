# 🛒 Automation Exercise E2E Framework

Projeto de automação de testes End-to-End (E2E) para o site [Automation Exercise](https://automationexercise.com), desenvolvido com **Cypress** e **Cucumber (BDD)**, utilizando **Page Objects** e relatórios em nuvem via **Testomat.io**.

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Cucumber](https://img.shields.io/badge/-cucumber-%2343B02A?style=for-the-badge&logo=cucumber&logoColor=white)
![JavaScript](https://img.shields.io/badge/-javascript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Webpack](https://img.shields.io/badge/-webpack-%238DD6F9?style=for-the-badge&logo=webpack&logoColor=black)

## 🏗️ Arquitetura do Projeto

O projeto segue padrões de arquitetura robustos para garantir escalabilidade e manutenção:

* **BDD (Behavior Driven Development):** Testes escritos em Gherkin (`.feature`) para documentação viva.
* **Page Object Model (POM):** Separação clara entre a lógica de teste e a interação com a página (seletores e ações).
* **Webpack Preprocessor Customizado:** Configuração avançada para injetar Polyfills de Node.js (`crypto`, `stream`, `process`) no navegador, resolvendo incompatibilidades de bibliotecas em ambientes modernos.
* **Massa de Dados Dinâmica:** Geração automática de e-mails únicos para testes de cadastro, garantindo independência de execução.
* **Cloud Reporting:** Integração nativa com Testomat.io para dashboards analíticos.

## 🧪 Cobertura de Testes (7 Suítes)

Foram automatizados **28 cenários** cobrindo os fluxos críticos do E-commerce:

1.  **🏠 Home:** Validação de elementos visuais, navegação e links externos.
2.  **🔐 Login:** Fluxos de sucesso, falha, logout e validação de sessão.
3.  **📝 Cadastro (Signup):** Criação de usuário com dados dinâmicos, validação de campos obrigatórios (HTML5) e e-mail existente.
4.  **👕 Produtos:** Busca, filtros por categoria, visualização de detalhes e review.
5.  **🛒 Carrinho:** Adição/remoção de itens, cálculo de quantidade e itens recomendados.
6.  **💳 Checkout:** Fluxo E2E completo (Cadastro durante a compra, Pagamento e Download de Nota Fiscal).
7.  **📞 Fale Conosco:** Envio de formulário com **Upload de Arquivo** (JSON) e tratamento de alertas nativos (`window:confirm`).

## ⚙️ Pré-requisitos

* Node.js (v18 ou superior)
* NPM

## 🚀 Guia de Execução

Siga os passos abaixo para instalar as dependências e executar os testes em diferentes modos.

### 1. Instalação
Devido a conflitos de versões entre o Webpack e plugins do Cypress, utilize a flag de compatibilidade para garantir uma instalação limpa:

```bash
npm install --legacy-peer-deps
```

### 2. Executando os Testes
Opção A: Modo Interativo (Interface Visual) Ideal para desenvolvimento e depuração passo a passo. Abre o Cypress App.

```Bash
npx cypress open
```

Opção B: Modo Headless (Terminal) Executa todos os testes em segundo plano e exibe o resultado no console. Ideal para CI/CD.

```Bash
npx cypress run
```
Opção C: Executar com Relatório (Testomat.io) Executa os testes e envia os resultados para o dashboard na nuvem. (Substitua SUA_CHAVE_API pela chave fornecida pelo Testomat)

```Bash
TESTOMATIO=SUA_CHAVE_API TESTOMATIO_CREATE=1 npx cypress run
```
