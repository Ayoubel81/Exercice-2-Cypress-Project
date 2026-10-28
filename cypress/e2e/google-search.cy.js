
describe('Google search tests', () => {

  beforeEach(() => {
    cy.fixture('lacosteData').as('data');
  });

  it('should open Lacoste US from Google', function () {
    const site = this.data.sites[0];
    searchAndVerify(site);
  });

  it('should open Lacoste FR from Google', function () {
    const site = this.data.sites[1];
    searchAndVerify(site);
  });

  function searchAndVerify(site) {
    cy.visit('https://www.google.com');

    cy.get('textarea[name="q"]')
      .first()
      .type(`${site.keyword}{enter}`);



    cy.contains('a', /Lacoste/i)
      .should('be.visible')
      .click();

      
    cy.get('body').should('be.visible');
    cy.url().should('include', site.url);
  }

});
