Feature: Enroll in new training

If I am logged in, I want to navigate to tranings page and enroll in a new training

Scenario: Enroll into training for customer
    Given I am logged in
    When I navigate to trainings page
    And I want to enroll in a new training
    Then I start the training

Scenario: Enroll into training for guest
    Given I navigate to trainings page
    When I want to enroll in a new training
    And I am logging in
    Then I start the training

@focus
Scenario: Resume training for customer
    Given I am logged in
    When I navigate to trainings page
    And I want to resume training
    Then I continue the training

Scenario: Preview training
    Given I navigate to trainings page
    When I click on training
    Then I see preview of this training