class SearchResultsPage {

  verifyResults(productName) {
    cy.contains("produits trouvés")
      .should("be.visible");

    cy.get("body").should("contain.text", productName);
  }

  verifyNoResults() {
    cy.contains("pas de résultats")
      .should("be.visible");
  }
  
  openFirstProduct() {
    cy.get('//div[contains(@class,"product-tile-image-hover")]')
      .first()
      .click();
  }

  filterByColor(color) {
    cy.xpath("//label[contains(@aria-label,'"+color+"')]").click();
    cy.contains("button[data-filter-id='searchColorID']").should("be.visible");
  }

  sortByPriceAscending() {
    cy.xpath("//label[contains(text(),'+ cher')]").click();
  }



}

module.exports = SearchResultsPage;