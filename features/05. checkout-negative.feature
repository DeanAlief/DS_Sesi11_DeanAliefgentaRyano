@digital-skola @checkout
Feature: Swag Labs - checkout - negative
  
  Background: User on the login page
    Given Dean is on the login page
    When Dean login with "standard_user" credential
    Then Dean should see home page

  @negative
  Scenario: As a standard_user, i want to finish my transaction but i left one field empty so now i should be getting error message
    When Dean adding item into the shopping cart
    Then Dean proceeds to finish the transaction but leaving Last name field empty
    Then Dean should see the error "Error: Last Name is required"