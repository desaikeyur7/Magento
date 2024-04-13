class ShoppingOptionsSection {
    getCollapsibleFilter(filter) {
        return cy.get('.filter-options-title').filter(`:contains("${filter}")`)
    }

    getColorOption(color) {
        return cy.get(`[class="filter-options-content"] [option-label="${color}"]`)
    }
}

export default new ShoppingOptionsSection()