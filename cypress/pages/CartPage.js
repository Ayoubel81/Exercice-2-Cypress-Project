class CartPage {
  openCart() {
    cy.get('a[title="Mon panier"]')
      .first()
      .click();
  }
  

  verifyCartIsVisible(productName,size) {
    cy.get("body").should("be.visible");
    cy.xpath(`//button[contains(., "${productName}")]`)
      .should("be.visible");
    cy.xpath(`//p[contains(., "${size}")]`)
      .should("be.visible");
  }
}

module.exports = CartPage;