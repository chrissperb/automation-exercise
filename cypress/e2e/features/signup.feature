Feature: User Registration (Sign Up)
  As a new user
  I want to create an account
  So that I can purchase products

  Background:
    Given I navigate to the url "https://automationexercise.com/login"

  @signup @happy_path
  Scenario: Register User with valid data
    When I enter name "QA User" and email address "DYNAMIC_EMAIL" in the signup form    
    And I click "Signup" button
    And I fill all required details: Password, Date of Birth
    And I fill all address details: First Name, Last Name, Address, State, City, Zipcode, Mobile Number
    And I click "Create Account" button
    Then I should see the text "Account Created!"
    And I click "Continue" button
    And I should see the text "Logged in as QA User"

  @signup @negative
  Scenario: Register User with existing email
    When I enter name "Existing User" and email address "test_existing@test.com" in the signup form
    And I click "Signup" button
    Then I should see the text "Email Address already exist!"

  @signup @negative
  Scenario: Register without filling mandatory fields
    When I enter name "QA User" and email address "DYNAMIC_EMAIL" in the signup form
    And I click "Signup" button
    And I click "Create Account" button
    Then I should remain on the registration page
    And I should see validation errors on mandatory fields

  @signup @edge_case
  Scenario: Signup with invalid email format
    When I enter name "User" and email address "invalid_email_format" in the signup form
    And I click "Signup" button
    Then the browser should validate the email field structure
    # Este passo valida a validação HTML5 do navegador