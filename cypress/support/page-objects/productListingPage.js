class ProductListingPage {
  get productItemLink() {
    return cy.$$(".product-item-link");
  }

  setProductName(name) {
    this.productName = name;
  }

  getProductName() {
    return this.productName;
  }
}

export default new ProductListingPage();
