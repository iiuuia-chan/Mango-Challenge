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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

// Helper para login
export function uiLogin() {
  const rawUser = Cypress.env("USER_LOGIN");
  const rawPass = Cypress.env("USER_PASSWORD");
  const user = rawUser == null ? "" : String(rawUser);
  const pass = rawPass == null ? "" : String(rawPass);
  expect(user, "USER_LOGIN no definido").to.have.length.greaterThan(0);
  expect(pass, "USER_PASSWORD no definido").to.have.length.greaterThan(0);
  cy.visit("/");

  cy.get('input[name="login"], [data-np-autofill-field-type="username"]')
    .first()
    .clear()
    .type(user);

  cy.get('input[type="password"], [data-np-autofill-field-type="password"]')
    .first()
    .clear()
    .type(pass, { log: false });

  cy.contains('button, input[type="submit"]', /^login$/i)
    .first()
    .click();

  cy.contains("profile", { timeout: 10000 }).should("be.visible");
}

Cypress.Commands.add("sessionLogin", () => {
  cy.session("auth", uiLogin, { cacheAcrossSpecs: false });
});
