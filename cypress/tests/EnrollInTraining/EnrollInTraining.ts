import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

// Scenario: Preview training for guest
//     Given I am not logged in
//     When I navigate to trainings page
//     And I click on training
//     Then I see preview of this training

Given('I navigate to trainings page', () => {
    cy.visit('/');
});

When('I click on training', () => {
    cy.get('a').contains('Working with business logic in React').click();
});

Then('I see preview of this training', () => {
    cy.url().should('contain', '/training/3');
    cy.contains('Enhance your React proficiency').should('be.visible');
});

// Scenario: Enroll into training for customer
//     Given I am logged in
//     When I navigate to trainings page
//     And I want to enroll in a new traning
//     Then I start the training

Given('I am logged in', () => {
    cy.visit('/');
    cy.get('a').contains('Login').click();
    cy.get('input[type=email]').type('x@y.z');
    cy.get('input[type=password]').type('xyz');
    cy.get('button[type=submit]').click();

    cy.contains('Leo Messi').should('be.visible');
});

When('I want to enroll in a new training', () => {
    cy.get('li')
        .contains('Enhance your React proficiency')
        .get('button')
        .contains('Enroll now')
        .click();
});

Then('I start the training', () => {
    cy.url().should('contain', '/training/3');
    cy.contains('Enhance your React proficiency').should('not.exist');
    cy.contains('What is business logic in React apps?').should('be.visible');
});

// Scenario: Enroll into training for guest
//     Given I navigate to trainings page
//     And I want to enroll in a new training
//     And I am logging in
//     Then I start the training

When('I am logging in', () => {
    cy.url().should('contain', '/login?redirect_url=/trainings/3');
    cy.get('input[type=email]').type('x@y.z');
    cy.get('input[type=password]').type('xyz');
    cy.get('button[type=submit]').click();
});

// Scenario: Resume training for customer
//     Given I am logged in
//     When I navigate to trainings page
//     And I want to resume training
//     Then I continue training

When('I want to resume training', () => {
    cy.get('li')
        .contains('Pure, factory functions and closuresy')
        .get('button')
        .contains('Resume')
        .click();
});

Then('I continue the training', () => {
    cy.url().should('contain', '/training/1');
    cy.contains("Master JavaScript's essence with").should('not.exist');
    cy.contains(
        "Welcome to the training. Let's start with the very first concept right away.",
    ).should('be.visible');
    cy.contains('4 / 5').should('be.visible');
});
