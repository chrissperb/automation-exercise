class ProductsPage {
    // Seletores
    get searchInput() { return cy.get('#search_product'); }
    get searchButton() { return cy.get('#submit_search'); }
    get productsList() { return cy.get('.features_items'); }
    get allProductsTitle() { return cy.get('.title.text-center'); } 
    get categorySidebar() { return cy.get('#accordian'); }

    // Seletores Modais (Aparecem ao adicionar ao carrinho)
    get viewCartModalButton() { return cy.get('.modal-body a[href="/view_cart"]'); }
    get continueShoppingButton() { return cy.get('.modal-footer button'); }

    // Ações
    buscarProduto(nomeProduto) {
        this.searchInput.clear().type(nomeProduto);
        this.searchButton.click();
    }

    adicionarProdutoAoCarrinho(indice = 0) {
        cy.get('.product-overlay .add-to-cart').eq(indice).click({ force: true });
    }

    clicarVerProduto(indice = 0) {
        cy.get('.choose a').eq(indice).click();
    }

    filtrarPorCategoria(categoria, subcategoria) {
        this.categorySidebar.contains(categoria).click();
        this.categorySidebar.contains(subcategoria).should('be.visible').click();
    }
}

export default new ProductsPage();