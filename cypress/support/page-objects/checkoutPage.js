class CheckoutPage {
  get emailAddress() {
    return cy.get("#customer-email");
  }

  get firstName() {
    return cy.get('[name="firstname"]');
  }

  get lastName() {
    return cy.get('[name="lastname"]');
  }

  get streetAddress() {
    return cy.get('[name="street[0]"]');
  }

  get city() {
    return cy.get('[name="city"]');
  }

  get stateProvince() {
    return cy.get('[name="country_id"]');
  }

  get zipPostalCode() {
    return cy.get('[name="postcode"]');
  }

  get country() {
    return cy.get('select[name="country_id"]');
  }

  get phoneNumber() {
    return cy.get('[name="telephone"]');
  }

  get nextBtn() {
    return cy.get('[data-role="opc-continue"]');
  }

  selectCountry(value) {
    cy.get('select[name="country_id"]').select(`${value}`);
  }

  verifyShippingMethodIsSelected() {
    cy.get('[type="radio"]').should(
      ($radio) => {
        expect($radio).to.have.attr("checked");
      },
      { timeout: 10000 }
    );
  }

  getTextFromElement(selector) {
    return cy
      .get(selector)
      .invoke("text")
      .then((text) => text.trim());
  }
}

export default new CheckoutPage();
