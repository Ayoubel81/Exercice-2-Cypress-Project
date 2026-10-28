const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.lacoste.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 10000,
    video: true,
    screenshotOnRunFailure: true,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Lacoste FR - Test Report",
    embeddedScreenshots: true,
    inlineAssets: true
    }
  },
});
