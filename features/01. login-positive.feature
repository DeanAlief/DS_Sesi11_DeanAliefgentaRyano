@digital-skola @login
Feature: Swag Labs - Login - Positive 

  @positive
  Scenario: As a standard_user, I want to log in successfully
    Given Dean is on the login page
    When Dean login with "standard_user" credential
    Then Dean should see home page