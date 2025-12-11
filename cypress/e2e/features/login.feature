Feature: User Authentication (Login)
  As a registered user
  I want to login to my account
  So that I can manage my orders

  Background:
    Given I navigate to the url "https://automationexercise.com/login"

  @login @happy_path
  Scenario: Login User with correct email and password
    When I enter valid email "alunoQAunyleya@gmail.com" and password "password123"
    And I click "login" button
    Then I should see the text "Logged in as"
    And I should not see the login form

  @login @negative
  Scenario: Login User with incorrect email and password
    When I enter invalid email "wrong@test.com" and password "wrongpass"
    And I click "login" button
    Then I should see the error message "Your email or password is incorrect!"

  @login @functionality
  Scenario: Logout User
    Given I am logged in with valid credentials
    When I click "Logout" button
    Then I should be redirected to the "login" page
    And I should see the text "Login to your account"

  @login @negative
  Scenario: Login with empty fields
    When I leave email and password fields empty
    And I click "login" button
    Then I should remain on the login page