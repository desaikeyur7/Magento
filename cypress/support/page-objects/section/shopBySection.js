class ShopBySection {
    getShopByItemOption(item) {
        return cy.get('[class="item"]').filter(`:contains("${item}")`)
    }
}

export default new ShopBySection()