# 🚀 DummyJSON API Automation

Framework de automação de testes de API REST desenvolvido para validar endpoints do [DummyJSON](https://dummyjson.com). O projeto utiliza **Postman** para estruturação dos cenários e **Newman** para execução em pipeline (CI/CD) com relatórios HTML avançados.

<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&amp;logo=postman&amp;logoColor=white" alt="Postman">

<img src="https://img.shields.io/badge/Newman-Validation-green?style=for-the-badge" alt="Newman">

<img src="https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&amp;logo=javascript&amp;logoColor=white" alt="JavaScript">

## 📋 Arquitetura e Funcionalidades

O projeto foi desenhado para simular fluxos reais de um Backend, cobrindo autenticação, manipulação de dados e validação de contratos.

### Destaques Técnicos:

- **🔐 Autenticação Dinâmica (JWT):** O token gerado no login é capturado automaticamente e injetado em todos os requests subsequentes via Variáveis de Ambiente.
    
- **🔄 Fluxos CRUD Inteligentes:**
    
    - **Criação:** Captura o ID gerado pela API.
        
    - **Persistência Simulada:** Tratamento lógico para lidar com o Mock do DummyJSON (uso de IDs estáticos para Update/Delete garantirem sucesso).
        
    - **Validação Cruzada:** O endpoint `/auth/me` valida se o token gerado pertence realmente ao usuário logado.
        
- **📜 Contract Testing:** Validação de **JSON Schema** em todos os endpoints para garantir a integridade dos tipos de dados.
    
- **⚡ Performance:** Monitoramento global de SLA (tempo de resposta < 2000ms) em toda a coleção.
    

## 🧪 Cobertura de Testes

A coleção está organizada em pastas lógicas:

1. **Auth**
    
    - Login (POST)
        
    - Validação de Token/Sessão (GET /auth/me)
        
2. **Products (CRUD)**
    
    - Adicionar Produto (POST)
        
    - Atualizar Produto (PUT)
        
    - Remover Produto (DELETE)
        
3. **Users (CRUD)**
    
    - Adicionar Usuário (POST)
        
    - Atualizar Usuário (PUT)
        
    - Remover Usuário (DELETE)
        

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
    
- Newman (CLI do Postman)
    
- Newman Reporter HTML Extra
    

## 🚀 Instalação e Execução

### 1\. Instalar Dependências

No terminal, instale o Newman e o gerador de relatórios globalmente:

``` bash
npm install -g newman newman-reporter-htmlextra

 ```

### 2\. Exportar Arquivos

Exporte sua Collection e seu Environment do Postman e salve na pasta do projeto:

- `DummyJSON Automation.postman_collection.json`
    
- `DummyJSON - QA.postman_environment.json`
    

### 3\. Executar os Testes

Rode o comando abaixo para executar a suíte completa e gerar o dashboard:

``` bash
newman run "DummyJSON Automation.postman_collection.json" \
  -e "DummyJSON - QA.postman_environment.json" \
  -r htmlextra

 ```

## 📊 Relatórios

Após a execução, um relatório detalhado será gerado na pasta `/newman`.  
Abra o arquivo `.html` no seu navegador para visualizar:

- Dashboard com gráficos de Pass/Fail.
    
- Detalhamento de Request/Response Headers e Body.
    
- Logs de testes ignorados ou falhos.
    

---

**Author:** Christian Sperb
