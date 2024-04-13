class PaymentPage {
  get billingAddressDetails() {
    return cy.get(".billing-address-details");
  }

  get cartSubtotal() {
    return cy.get('[data-th="Cart Subtotal"]');
  }

  get orderTotal() {
    return cy.get('.grand.totals [data-bind="text: getValue()"]');
  }

  get placeOrderBtn() {
    return cy.get('[class="action primary checkout"]');
  }
}

export default new PaymentPage();
