Feature: Checkout Process
  As a user
  I want to place an order
  So that I can receive my goods

  @checkout @e2e
  Scenario: Place Order: Register while Checkout
    # Fluxo: Visitante -> Carrinho -> Cria Conta no meio -> Checkout
    Given I navigate to the url "https://automationexercise.com"
    And I add products to cart
    And I click "Cart" button
    And I click "Proceed To Checkout" button
    And I click "Register / Login" button
    When I enter name "QA E2E" and email address "DYNAMIC_EMAIL" in the signup form
    And I click "Signup" button
    And I fill all required details: Password, Date of Birth
    And I fill all address details: First Name, Last Name, Address, State, City, Zipcode, Mobile Number
    And I click "Create Account" button
    And I click "Continue" button
    And I should see the text "Logged in as QA E2E"
    And I click "Cart" button
    And I click "Proceed To Checkout" button
    Then I should see Address Details and Review Your Order
    When I enter description in comment "Fast delivery" and click "Place Order"
    And I enter payment details: Name "QA", Card "411111111111", CVC "311", Expiration "12" "2025"
    And I click "Pay and Confirm Order" button
    Then I should see the text "ORDER PLACED!"
    And I click "Delete Account" button

  @checkout @e2e
  Scenario: Place Order: Register before Checkout
    # Fluxo: Cria Conta primeiro -> Loga -> Enche Carrinho -> Checkout
    Given I navigate to the url "https://automationexercise.com/login"
    When I enter name "QA Pre" and email address "DYNAMIC_EMAIL" in the signup form
    And I complete the registration process
    And I should see the text "Account Created!"
    And I click "Continue" button
    And I should see the text "Logged in as QA Pre"
    And I add products to cart
    And I click "Cart" button
    And I click "Proceed To Checkout" button
    Then I should see Address Details and Review Your Order
    When I enter description in comment "Please handle with care" and click "Place Order"
    And I process the payment
    Then I should see the text "ORDER PLACED!"
    And I click "Delete Account" button

  @checkout @e2e
  Scenario: Place Order: Login before Checkout
    # Fluxo: Usuário Existente -> Loga -> Carrinho -> Checkout
    Given I navigate to the url "https://automationexercise.com/login"
    And I enter valid email "alunoQAunyleya@gmail.com" and password "password123"
    And I click "login" button
    And I add products to cart
    And I click "Cart" button
    And I click "Proceed To Checkout" button
    Then I should see Address Details and Review Your Order
    When I enter description in comment "Leave at the front door" and click "Place Order"
    And I process the payment
    Then I should see the text "ORDER PLACED!"

  @checkout @invoice
  Scenario: Verify Invoice Download after Order
    # Fluxo: Compra completa -> Download da Nota
    Given I am logged in with valid credentials
    And I add products to cart
    And I proceed to checkout and payment
    Then I should see the text "ORDER PLACED!"
    When I click "Download Invoice" button
    Then the invoice file should be downloaded
    And I click "Continue" button