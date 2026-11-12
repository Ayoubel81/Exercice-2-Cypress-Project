const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://www.lacoste.com",

    specPattern: [
      "cypress/e2e/**/*.cy.js",
      "cypress/api/**/*.cy.js"
    ],

    chromeWebSecurity: true,
    viewportWidth: 1440,
    viewportHeight: 900,

    defaultCommandTimeout: 60000,
    pageLoadTimeout: 60000,

    video: true,
    screenshotOnRunFailure: true
  },
  env: {
    apiUrl: "https://api.exchangeratesapi.io"
  }
});