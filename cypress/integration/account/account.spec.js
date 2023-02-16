import {Account} from '../../page-objects/account'
import account from '../../fixtures/account'

describe('Account activities', () => {
    beforeEach(() => {
        cy.wait(2500)
    })

    before(() => {
        cy.wait(2500)
        Account.login(account.customer.customer.email, account.customer.password)
        Account.createAddress(account.customerInfo)
        cy.wait(2500)
    })

    it('Can check your profile', () => {
        cy.visit("/customer/account/edit")
        Account.checkAllProfileSpecs()
    })
});