import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../page-objects/homePage";
import shopBySection from "../page-objects/section/shopBySection";
import shoppingOptionsSection from "../page-objects/section/shoppingOptionsSection";
import nowShoppingBySection from "../page-objects/section/nowShoppingBySection";
import productListingPage from "../page-objects/productListingPage";
import productPage from "../page-objects/productPage";
import cartSection from "../page-objects/section/cartSection";
import checkoutPage from "../page-objects/checkoutPage";
import paymentPage from "../page-objects/paymentPage";
import successPage from "../page-objects/successPage";

Given("I am on the homepage", () => {
  cy.fixture("urls.json").then((url) => {
    cy.visit(url.baseurl.magento);
  });
});

When(/I click "(.*)" section from the header navigation menu/, (menuOption) => {
  homePage.getNavigationMenuItems(menuOption).click();
});

When(/I select "(.*)" from the shop by section/, (itemOption) => {
  shopBySection.getShopByItemOption(itemOption).click();
});

When(
  /I click "(.*)" collapsible filter and select "(.*)"/,
  (collapsibleFilter, collapsibleFilterOption) => {
    shoppingOptionsSection.getCollapsibleFilter(collapsibleFilter).click();
    shoppingOptionsSection
      .getColorOption(collapsibleFilterOption)
      .scrollIntoView()
      .should("be.visible");
    shoppingOptionsSection.getColorOption(collapsibleFilterOption).click();
  }
);

Then(
  /the "(.*)" "(.*)" should be displayed under current filter/,
  (filterLabel, filterValue) => {
    nowShoppingBySection.currentFilterLabel.should(
      "have.text",
      `${filterLabel}`
    );
    nowShoppingBySection.currentFilterValue.should(
      "have.text",
      `${filterValue}`
    );
  }
);

When(/I click on a product item on product listing page/, () => {
  cy.get(productListingPage.productItemLink)
    .clickRandomAndStoreText(productListingPage.productItemLink)
    .then((text) => {
      productListingPage.setProductName(text);
    });
});

Then(/I should be navigated to the product page/, () => {
  productPage.pageTitle.should("be.visible");
  cy.title().should("eq", productListingPage.getProductName());
});

When(/I select "(.*)" and "(.*)" on the product page/, (size, color) => {
  productPage.productPrice.invoke("text").then((price) => {
    productPage.setProductPrice(price);
  });
  productPage.thumbnail.scrollIntoView().should("be.visible");
  productPage.getSize(size).scrollIntoView().should("be.visible");
  productPage.getSize(size).click();
  productPage.getColor(color).scrollIntoView();
  productPage.getColor(color).should("be.visible");
  productPage.getColor(color).click();
});

When(/I click on add to cart button/, () => {
  productPage.addToCartBtn.click();
  cy.wait(2000);
});

When(/I click on the cart icon/, () => {
  productPage.cartIcon.scrollIntoView().should("be.visible");
  productPage.cartIcon.click();
});

When(/I click on see details toggle on the cart/, () => {
  cartSection.seeDetailsToggle.click();
});

When(
  /the cart should be displayed with the product "(.*)" and "(.*)"/,
  (color, size) => {
    cartSection.productOptionsList.should("contain.text", `${color}`);
    cartSection.productOptionsList.should("contain.text", `${size}`);
  }
);

When(/I click on proceed to checkout button/, () => {
  cartSection.proceedToCheckoutBtn.click();
});

Then(/I should be navigated to the checkout page/, () => {
  cy.title().should("eq", "Checkout");
});

When(/I fill in the required details for shipping/, (datatable) => {
  checkoutPage.nextBtn.should("be.visible").should("be.enabled");
  datatable.hashes().forEach((row) => {
    checkoutPage.country.scrollIntoView().should("be.visible");
    checkoutPage.selectCountry(row.country);
    checkoutPage.emailAddress.scrollIntoView().should("be.visible");
    checkoutPage.emailAddress.type(row.EmailAddress);
    checkoutPage.firstName.type(row.FirstName);
    checkoutPage.lastName.type(row.LastName);
    checkoutPage.streetAddress.should("be.visible").type(row.StreetAddress);
    checkoutPage.city.should("be.visible").type(row.City);
    checkoutPage.zipPostalCode.should("be.visible").type(row.ZipPostalCode);
    checkoutPage.phoneNumber.should("be.visible").type(row.PhoneNumber);
  });
});

Then(/the shipping method option is selected by default/, () => {
  checkoutPage.verifyShippingMethodIsSelected();
  productPage.shippingPrice.invoke("text").then((price) => {
    productPage.setShippingPrice(price);
  });
});

When(/I click next button/, () => {
  checkoutPage.nextBtn.click();
});

Then(/I should be navigated to the payment page/, () => {
  paymentPage.billingAddressDetails.should("be.visible");
});

Then(/The subtotal in order summary should equal product price/, () => {
  productPage.getProductPrice().then((price) => {
    paymentPage.cartSubtotal.should("have.text", price);
  });
});

When(/I click on place order button/, () => {
  paymentPage.placeOrderBtn.click();
});

Then(/I should be navigated to the success page/, () => {
  successPage.heading.should("be.visible");
});
