class NowShoppingBySection {
  get currentFilter() {
    return cy.get('[class="filter-current"]');
  }

  get currentFilterLabel() {
    return cy.get(".filter-label");
  }

  get currentFilterValue() {
    return cy.get(".filter-value");
  }
}

export default new NowShoppingBySection();
