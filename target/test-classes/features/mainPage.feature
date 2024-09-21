@dashboards
Feature: Verify main page

  Background: Verify main page
    Given User is on the main page

  @logo
  Scenario: Verify main page logo
    Then verify that logo is available

  @gift_shop
  Scenario: Verify Gift Shop
    Then verify that Gift Shop is clickable

  @contact_information
  Scenario: Verify NAU contact information
    And User scrolls down the page
    Then User sees the contact information

  @search_box
  Scenario Outline: Verify Search Box works as expected
    When User searches "<searchValue>"
    Then Expected title "<expectedTitle>" should include search value

    Examples: Search values User want to search in Search Box
      | searchValue   | expectedTitle |
      | admissions    | admissions    |
      | transcript    | transcript    |
      | calender      | calender      |
      | courses       | courses       |
      | financial aid | financial aid |

  @warning_message
  Scenario Outline: Verify warning message appears when User search invalid value
    When User searches invalid "<searchText>"
    And Expected title "<expectedText>" should include search value
    Then User should see "Oops!" as a warning message

    Examples: Search values User want to search in Search Box
      | searchText | expectedText |
      | *ay*ne     | *ay*ne       |
      | 1n2a3u     | 1n2a3u       |
      | %@#        | %@#          |