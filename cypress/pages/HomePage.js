class HomePage {
  visit() {
    cy.openLacoste();
  }

  verifyHomepage() {
    cy.url().should("include", "/fr");
    cy.get("body").should("be.visible");
  }

  searchProduct(productName) {
    cy.get('input[placeholder="Rechercher un produit"]')
      .should("be.visible")
      .clear()
      .type(`${productName}{enter}`);
  }

  openCategory(categoryName) {
    cy.xpath(`//span[contains(text(),'${categoryName}')]`)
      .first()
      .should("be.visible")
      .click();
    cy.get(`a.nav-panel-tag-link[href*="/homme/${categoryName.toLowerCase()}/"]`)
      .should('be.visible')
      .click();
  }
}

module.exports = HomePage;