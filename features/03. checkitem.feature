@digital-skola @checkitem
Feature: Swag Labs - check item description
  
  Background: User on the login page
    Given Dean is on the login page
    When Dean login with "standard_user" credential
    Then Dean should see home page

  @positive
  Scenario: As a standard_user, i want to check item details
    When Dean clicked sauce labs backpack
    Then Dean should see item details page

