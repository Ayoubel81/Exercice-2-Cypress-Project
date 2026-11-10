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
    cy.get('div[class="plp-tile l-fill-width "]')
      .first()
      .click();
  }

  filterByColor(color) {
    cy.xpath(`//label[contains(@aria-label,'${color}')]`)
      .should("be.visible")
      .click();
    cy.get("button[data-filter-id='searchColorID']").should("be.visible");
    cy.xpath("//button[@data-filter-id='searchColorID']//span").should("contain.text", "Couleur (1)");
  }

  sortByPriceAscending() {
    cy.xpath("//label[contains(text(),'+ cher')]").click();
    cy.url().should("include", "sortBy=price-high-to-low");
  }



}

module.exports = SearchResultsPage;