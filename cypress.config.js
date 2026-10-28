const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.lacoste.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 10000,
    video: true,
    videoUploadOnPasses: false,
    screenshotOnRunFailure: true,
  },
});
