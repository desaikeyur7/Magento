Feature: Buy Product

  Background: 
    Given I am on the homepage

  @regression
  Scenario Outline: Purchase a Product
    When I click "Women" section from the header navigation menu
    And I select "Hoodies & Sweatshirts" from the shop by section
    And I click "Color" collapsible filter and select "Purple"
    Then the "Color" "Purple" should be displayed under current filter
    When I click on a product item on product listing page
    Then I should be navigated to the product page
    When I select "<size>" and "<color>" on the product page
    And I click on add to cart button
    And I click on the cart icon
    And I click on see details toggle on the cart
    Then the cart should be displayed with the product "<size>" and "<color>"
    And I click on proceed to checkout button
    Then I should be navigated to the checkout page
    When I fill in the required details for shipping
      | EmailAddress                 | FirstName | LastName | StreetAddress | City   | ZipPostalCode | country | PhoneNumber |
      | desaikeyur43234554@gmail.com | Keyur     | Desai    | This Street   | London | N1 9BU        | GB      | 07000000000 |
    Then the shipping method option is selected by default
    When I click next button
    Then I should be navigated to the payment page
    And The subtotal in order summary should equal product price
    When I click on place order button
    Then I should be navigated to the success page

    Examples: 
      | menu_option | item_option           | collapsible_filter_option | collapsible_filter | size | color  | shipping_method |
      | Women       | Hoodies & Sweatshirts | Purple                    | Color              | M    | Purple | flatrate        |
