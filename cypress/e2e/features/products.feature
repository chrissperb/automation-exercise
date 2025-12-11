Feature: Product Interactions
  As a user
  I want to browse, search and review products
  So that I can choose the best items

  Background:
    Given I navigate to the url "https://automationexercise.com/products"

  @products @smoke
  Scenario: Verify All Products and Product Detail Page
    Then I should see the text "ALL PRODUCTS"
    And the products list should be visible
    When I click on "View Product" of the first item
    Then I should be redirected to the "product_details" page
    And I should see product name, category, price, availability, condition, brand

  @products @search
  Scenario: Search Product
    Then I should see the text "ALL PRODUCTS"
    When I enter product name "Tshirt" in search input and click search button
    Then I should see the text "SEARCHED PRODUCTS"
    And all visible products should contain "Tshirt" in the name

  @products @review
  Scenario: Add Review on Product
    When I click on "View Product" of the first item
    Then I should see the text "Write Your Review"
    When I enter name "QA Reviewer", email "qa@review.com" and review "Great product quality!"
    And I click "Submit" button
    Then I should see the text "Thank you for your review."

  @products @category
  Scenario: View Category Products
    Then I should see the categories sidebar
    When I click on "Women" category
    And I click on "Dress" sub-category
    Then I should see the text "WOMEN - DRESS PRODUCTS"
    And I should see the text "ALL PRODUCTS" is not visible