class CartPage {
  openCart() {
    cy.get('a[title="Mon panier"')
      .first()
      .click();
  }

  verifyCartContains(productName) {
    cy.get("body").should("contain.text", productName);
  }

  verifyCartIsVisible(productName,size) {
    cy.get("body").should("be.visible");
    cy.xpath("//button[contains(text(),'"+productName+"')]");
    cy.xpath("//p[contains(text(),'"+size+"')]");;
  }
}

module.exports = CartPage;