@digital-skola @logout
Feature: Swag Labs - logout
  
  Background: User on the login page
    Given Dean is on the login page
    When Dean login with "standard_user" credential
    Then Dean should see home page

  @positive
  Scenario: As a standard_user, i want to log out of the site
    When Dean clicked logout
    Then Dean should see login page
    