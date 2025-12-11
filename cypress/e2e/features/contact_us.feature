Feature: Contact Us Form
  As a user
  I want to contact the support team
  So that I can resolve my queries

  Background:
    Given I navigate to the url "https://automationexercise.com/contact_us"

  @contact @smoke
  Scenario: Submit Contact Us Form with Valid Data
    Then I should see the text "GET IN TOUCH"
    When I enter name "QA Contact", email "qa@contact.com", subject "Help Needed" and message "This is a test message"
    And I upload the file "example.json"
    And I click "Submit" button on contact form
    Then I should see the text "Success! Your details have been submitted successfully."

  @contact @ui
  Scenario: Verify Contact Us Page Elements
    Then I should see the text "GET IN TOUCH"
    And I should see the text "Feedback For Us"
    And I should see the text "Contact Us"

  @contact @negative
  Scenario: Submit Empty Contact Form
    When I click "Submit" button on contact form
    Then the browser should validate the mandatory fields

  @contact @navigation
  Scenario: Return Home from Contact Us
    When I enter name "QA Back", email "qa@back.com", subject "Return Home" and message "Testing button"
    And I click "Submit" button on contact form
    Then I should see the text "Success! Your details have been submitted successfully."
    When I click "Home" button
    Then I should be redirected to the "dashboard" page