class ProductPage {
  get pageTitle() {
    return cy.get('[class="page-title"] [data-ui-id="page-title-wrapper"]');
  }

  get thumbnail() {
    return cy.get(
      '[class="fotorama__nav__frame fotorama__nav__frame--thumb fotorama__active"]'
    );
  }

  getSize(size) {
    return cy.get(".swatch-option.text").filter(`:contains("${size}")`);
  }

  getColor(color) {
    return cy.get(`[class="swatch-option color"][option-label="${color}"]`);
  }

  get productPrice() {
    return cy.get("[class='product-info-price'] [id*='product-price-'] span");
  }

  get addToCartBtn() {
    return cy.get("#product-addtocart-button span");
  }

  get cartIcon() {
    return cy.get(".action.showcart");
  }

  get shippingPrice() {
    return cy.get('[data-bind="click: element.selectShippingMethod"] [data-bind="text: getFormattedPrice(method.price_excl_tax)"]')
  }

  setProductPrice(price) {
    cy.wrap(price).as("productPrice");
  }

  getProductPrice() {
    return cy.get('@productPrice')
  }

  setShippingPrice(price) {
    cy.wrap(price).as("shippingPrice");
  }

  getShippingPrice() {
    return cy.get('@shippingPrice')
  }
}
export default new ProductPage();
