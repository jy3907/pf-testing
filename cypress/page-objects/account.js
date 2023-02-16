import selectors from '../fixtures/selectors'

export class Account {
    static login(user, pw) {
        cy.visit("/customer/account/login");
        cy.get(selectors.loginEmailInputSelector).type(user)
        cy.get(selectors.loginPasswordInputSelector).type(`${pw}{enter}`)
    }
    
    static logout() {
        cy.visit("/customer/account/index");
        cy.get('.base').then(($text) => {
            if ($text.text().indexOf('My Account') >= 0) {
                cy.get('.page-header .customer-welcome > .customer-name > .action').click()
                cy.contains('Sign Out').click({force: true})
            }
        })
    }

    static checkAllProfileSpecs() {
        cy.get(selectors.accountFirstnameInputSelector).should('be.visible')
        cy.get(selectors.accountLastnameInputSelector).should('be.visible')
        cy.contains('Change Email').should('be.visible').and('not.be.checked')
        cy.contains('Change Password').should('be.visible').and('not.be.checked')
    }

    static createAddress(customerInfo) {
        cy.visit("/customer/address/new");
        cy.get(selectors.addAddressFormSelector).then(($form) => {
            if ($form.find('#primary_billing').length) {
                cy.get('#primary_billing').check()
                cy.get('#primary_shipping').check()
            }
            cy.get('#street_1').type(customerInfo.streetAddress)
            cy.get('#city').type(customerInfo.city)
            cy.get('#telephone').type(customerInfo.phone)
            cy.get('#zip').type(customerInfo.zip)
            cy.get('#country').select(customerInfo.country)
            cy.get('#region_id').select(customerInfo.state)
            cy.contains('Save Address').click()
        })
    }
}