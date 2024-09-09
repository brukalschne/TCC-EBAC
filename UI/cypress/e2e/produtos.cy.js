/// <reference types="cypress" />
import produtosPage from "../support/page-objects/produtos.page";

describe('Funcionalidade Carrinho de Compras', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos')
    })

    it('Adicionar produtos ao carrinho', () =>{
        
        produtosPage.addProdutos2('Abominable Hoodie', 'S', 'Blue', 1)
        cy.get('.woocommerce-message').should('contain', 'Abominable Hoodie')
        produtosPage.addProdutos2('Aero Daily Fitness Tee', 'M', 'Yellow', 2)
        cy.get('.woocommerce-message').should('contain', 'Aero Daily Fitness Tee')
        produtosPage.addProdutos2('Ajax Full-Zip Sweatshirt', 'M', 'Green', 3)
        cy.get('.woocommerce-message').should('contain', 'Ajax Full-Zip Sweatshirt')
        
    });

})