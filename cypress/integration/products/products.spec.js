import selectors from "../../fixtures/selectors"

describe('Simple Product test suite', () => {
    beforeEach(() => {
        cy.visit("/affirm-water-bottle.html")
        cy.wait(2000)
    })

    it('Can see a title and image for the product', () => {
        cy.get(selectors.productTitle)
            .should('contain.text', "Affirm Water Bottle")
            .should('be.visible')
        cy.get(selectors.productImage)
            .should('have.attr', 'src')
            .should('include', 'media/catalog/product')
    })

    it('Can add a product to the cart from the product page', () => {
        cy.get(selectors.addToCartButton).click()
        cy.get(selectors.successMessage)
            .contains(`You added Affirm Water Bottle to your shopping cart.`)
        cy.wait(1000)
        cy.get('.showcart').click()
        cy.wait(2000)
        cy.get(selectors.cartIconProductCount)
            .invoke('text')
            .then(($price) => {
                const price = parseFloat($price.slice(1))
                expect(price).to.be.gte(1)
            })

    })

    it('Can see product review score and the individual reviews', () => {
        cy.get(selectors.productRatingStar)
            .should('have.length', 1)
        cy.get(selectors.customerReviewView)
            .should('exist')
            .should('be.visible')
        cy.get(selectors.productCustomerReviews)
            .should('exist')
            .should('be.visible')
    })

    it('Can see that a product is in stock', () => {
        cy.get(selectors.productStockMessage)
            .should('exist')
            .should('contain.text', 'In stock')
    })

    it('Can increment the product quantity on the pdp', () => {
        cy.get(selectors.productQty)
            .type('{uparrow}')
            .should('have.value', '2')
    })
})