$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "User login as a Student",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.background({
  "name": "Verify login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Portal365 module",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@successful_Login"
    }
  ]
});
formatter.step({
  "name": "User enters valid email address \"ncalis@na.edu\" in the email field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_valid_email_address_in_the_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press the Next button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_press_the_Next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid password \"pN*$u8Rb\" in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_valid_password_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press the Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_press_the_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the No button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_the_No_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page title should be \"Microsoft Office Home\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Portal365 module",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify login is unsuccessful once user signs out",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative_test1"
    }
  ]
});
formatter.step({
  "name": "User enters valid email address \"ncalis@na.edu\" in the email field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_valid_email_address_in_the_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press the Next button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_press_the_Next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid password \"pN*$u8Rb\" in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_valid_password_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press the Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_press_the_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the No button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_the_No_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page title should be \"Microsoft Office Home\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User signs out from the Portal365",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_signs_out_from_the_Portal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page title should be \"Sign out\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Portal365 module",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify login is unsuccessful with invalid email address",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative_test2"
    }
  ]
});
formatter.step({
  "name": "User enters invalid email address \"adalk@na@com\" in the email field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_invalid_email_address_in_the_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press the Next button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_press_the_Next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be \"Sign in to your account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_sees_a_message_that_includes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_main_page()"
});
