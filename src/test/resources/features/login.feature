@login
Feature: User login as a Student

  Background:Verify login page
    Given User is on the main page
    When User clicks on Portal365 module

  @successful_Login
  Scenario: Verify login is successful with valid credentials
    And User enters valid email address "ncalis@na.edu" in the email field
    And User press the Next button
    And User enters valid password "pN*$u8Rb" in the password field
    And User press the Sign in button
    And User clicks on the No button
    Then page title should be "Microsoft Office Home"

  @negative_test1
  Scenario: Verify login is unsuccessful once user signs out
    And User enters valid email address "ncalis@na.edu" in the email field
    And User press the Next button
    And User enters valid password "pN*$u8Rb" in the password field
    And User press the Sign in button
    And User clicks on the No button
    Then page title should be "Microsoft Office Home"
    And User signs out from the Portal365
    Then page title should be "Sign out"

  @negative_test2
  Scenario: Verify login is unsuccessful with invalid email address
    And User enters invalid email address "adalk@na@com" in the email field
    And User press the Next button
    Then Page title should be "Sign in to your account"

  @negative_test3
  Scenario: Verify login is unsuccessful with invalid password
    And User enters valid email address "ncalis@na.edu" in the email field
    And User press the Next button
    And User enters invalid password "dgki789" in the password field
    And User press the Sign in button
    Then User sees a message that "Forgot my password"