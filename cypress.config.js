// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Cypress will automatically merge this with cypress.env.json
    baseUrl: "https://buggy.justtestit.org",
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    supportFile: "cypress/support/e2e.js",
  },
});
