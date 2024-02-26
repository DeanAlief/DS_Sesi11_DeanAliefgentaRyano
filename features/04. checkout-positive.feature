@digital-skola @checkout
Feature: Swag Labs - checkout - positive
  
  Background: User on the login page
    Given Dean is on the login page
    When Dean login with "standard_user" credential
    Then Dean should see home page

  @positive
  Scenario: As a standard_user, i want to finish my transaction
    When Dean adding item into the shopping cart
    Then Dean proceeds to finish the transaction
    Then Dean should see checkout complete page
