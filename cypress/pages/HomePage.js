class HomePage {
  visit() {
    cy.visit("/fr");
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
    cy.xpath("//span[contains(text(),'"+categoryName+"')]").click();
    cy.contains("a", new RegExp(`^toutes les ${categoryName} homme$`, "i"))
      .should("be.visible")
      .click();
  }
}

module.exports = HomePage;