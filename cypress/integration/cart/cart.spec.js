import { Cart } from '../../page-objects/cart';
import selectors from '../../fixtures/selectors';

describe('Isolated test for adding a product to the cart', () => {
    it('Can add a product to the cart', () => {
        Cart.addProductToCart("/affirm-water-bottle.html");
        cy.get(selectors.messageToast)
            .should(
                'include.text',
                '\n\nYou added Affirm Water Bottle  to your shopping cart.\n'
            )
            .should('be.visible');
    });
});

describe('Cart tests', () => {
    beforeEach(() => {
        Cart.addProductToCart("/affirm-water-bottle.html");
        cy.visit("/checkout/cart/");
        cy.wait(3000);
    });

    it('Can change the quantity in the cart', () => {
        cy.get(selectors.qtyInputField)
            .type('{backspace}2{enter}')
            .should('have.value', '2');
    });

    it('Can remove a product from the cart', () => {
        cy.get(selectors.deleteProductButton).click();
        cy.get(selectors.emptyCartTextField)
            .should('include.text', 'You have no items in your shopping cart.')
            .should('be.visible');
    });
});