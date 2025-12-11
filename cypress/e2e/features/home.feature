Feature: Home Page Functionality
  As a user
  I want to navigate through the home page
  So that I can access different sections of the website

  @home @smoke
  Scenario: Verify Home Page visibility
    Given I navigate to the url "https://automationexercise.com"
    Then I should see the logo visible
    And I should see the navigation bar with "Home, Products, Cart, Signup / Login"
    And the page title should be "Automation Exercise"

  @home
  Scenario: Verify Subscription in Footer
    Given I navigate to the url "https://automationexercise.com"
    When I scroll down to the footer
    Then I should see the text "SUBSCRIPTION"
    And I should see the email input field for subscription

  @home
  Scenario: Verify Contact Us Button
    Given I navigate to the url "https://automationexercise.com"
    When I click "Contact us" button
    Then I should be redirected to the "contact_us" page
    And I should see the text "GET IN TOUCH"

  @home
  Scenario: Verify Test Cases Page navigation
    Given I navigate to the url "https://automationexercise.com"
    When I click "Test Cases" button
    Then I should be redirected to the "test_cases" page
    And I should see the text "TEST CASES"