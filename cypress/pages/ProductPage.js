class ProductPage {
  verifyProductDetails(product) {
    cy.get("h1")
      .should("be.visible")
      .and("contain.text", product);
    cy.get("body").should("contain.text", "€");
    cy.xpath("//span[text()='Ajouter au panier']")
      .should("be.visible");
  }

  selectSize(size) {
    cy.xpath("//div[@data-placeholder='Sélectionnez votre taille']//button")
      .should("be.visible")
      .click();
    cy.xpath(`//li[contains(@class,'dropdown-option')]//span[contains(text(),'${size}')]`)
      .should("be.visible")
      .click();

    cy.xpath("//button[contains(@class,'dropdown-trigger')]//span")
      .should("be.visible")
      .and("contain.text", size);
  }

  addToCart() {
    cy.contains("button", /ajouter au panier/i)
      .should("be.visible")
      .click();
    cy.get("h2[id='dialog_title']")
      .should("be.visible")
      .and("contain.text", "L’article a été ajouté à votre panier");
  }
}

module.exports = ProductPage;