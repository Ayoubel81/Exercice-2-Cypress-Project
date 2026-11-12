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
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... }


// cypress/support/commands.js


Cypress.Commands.add('openLacoste', () => {

  cy.visit('/fr', {
    failOnStatusCode: false,
    timeout: 60000
  });

  cy.get('body').then(($body) => {

    const pageContent = $body.text();

    if (pageContent.includes('Access Denied')) {
      cy.log('Akamai 403 detected');
    } else {
      cy.log('Lacoste page loaded');
    }

  });

  cy.get("span[class='didomi-continue-without-agreeing']").click();
  cy.xpath("//button[contains(text(),'Are you in France? For optimal service, we recommend you shop on our France website.')]").click();



});


Cypress.Commands.add('detectCaptcha', () => {
  cy.get('body').then(($body) => {
    const captcha = $body.find(
      'iframe[src*="recaptcha"], .g-recaptcha'
    ).length > 0;

    if (captcha) {
      cy.screenshot('google-captcha-detected');

      throw new Error(
        'Test bloqué : Google CAPTCHA détecté'
      );
    }
  });
});