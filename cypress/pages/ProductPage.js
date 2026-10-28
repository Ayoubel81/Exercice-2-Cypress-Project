class ProductPage {
  verifyProductDetails(product) {
    cy.get("h1").should("include", product);
    cy.get("body").should("contain.text", "€");
    cy.xpath("//span[text()='Ajouter au panier']").should("be.visible");
  }

  selectSize(size) {
    cy.xpath("//div[@data-placeholder='Sélectionnez votre taille']//button")
      .click();
    cy.xpath("//li[@class='dropdown-option']//span[contains(text(),'"+size+"')]")
      .click();

    cy.xpath("//button[@class='dropdown-trigger']//span")
      .should("be.visible")
      .and("contain.text", size);
  }

  addToCart() {
    cy.contains("button", /ajouter au panier/i)
      .click();
    cy.contains("h2[id='dialog_title']").should("contain.text", "L’article a été ajouté à votre panier");
  }
}

module.exports = ProductPage;