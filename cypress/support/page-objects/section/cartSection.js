class CartSection {
    get seeDetailsToggle() {
        return cy.get('.toggle')
    }

    get productOptionsList() {
        return cy.get('.product.options.list')
    }

    get proceedToCheckoutBtn() {
        return cy.get('#top-cart-btn-checkout')
    }
}

export default new CartSection()