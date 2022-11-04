// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import '@percy/cypress';

Cypress.Commands.add('fillMandatoryfields', () => {
    cy.get('#firstname').type('Emily');
    cy.get('#lastname').type('Batista');
    cy.get('#email_address').type('teste1238@hotmail.com');
    cy.get('#password').type('teste1234@');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
});