Feature: Cart Management
  As a shopper
  I want to manage items in my cart
  So that I can prepare for purchase

  Background:
    Given I navigate to the url "https://automationexercise.com"

  @cart @smoke
  Scenario: Add Products to Cart
    When I hover over the first product and click 'Add to cart'
    And I click "Continue Shopping" button
    And I hover over the second product and click 'Add to cart'
    And I click "View Cart" button in the modal
    Then I should be redirected to the "cart" page
    And I should see 2 products in the cart table

  @cart @quantity
  Scenario: Verify Product Quantity in Cart
    When I click on "View Product" of the first item
    And I increase the quantity to "4"
    And I click "Add to cart" button
    And I click "View Cart" button in the modal
    Then I should see the product in the cart with quantity "4"

  @cart @remove
  Scenario: Remove Product From Cart
    Given I have a product in my cart
    And I navigate to the url "https://automationexercise.com/view_cart"
    When I click the "X" button to remove the product
    Then I should see the text "Cart is empty!"
    # Ou validação visual de que a linha sumiu

  @cart @recommended
  Scenario: Add Recommended Items to Cart
    When I scroll down to the footer
    Then I should see the text "FEATURES ITEMS"
    When I click "Add to cart" on a recommended item
    And I click "View Cart" button in the modal
    Then I should see the recommended product in the cart