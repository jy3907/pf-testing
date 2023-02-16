import selectors from '../fixtures/selectors'

export class Cart {
    static addProductToCart(url) {
        cy.visit(url)
        cy.wait(5000)
        cy.get(selectors.addToCartButton).click()
        cy.wait(5000)
    }
}
