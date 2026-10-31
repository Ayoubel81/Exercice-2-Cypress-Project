class HomePage {
  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  }


  test() {
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.url().should("include","dashboard");
    cy.contains("manda user").should("be.visible");
    cy.get("input[placeholder='Search']").type("Maintena");
    cy.contains("Maintenance").should("be.visible").click();
    cy.get("h6[class='oxd-text oxd-text--h6 orangehrm-admin-access-title']").then(($text) => {
        const txt = $text.text();
        expect(txt).to.contains("Access")

    });



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
      .should("be.visible")
      .click();
    cy.contains("a", new RegExp(`^toutes les ${categoryName} homme$`, "i"))
      .should("be.visible")
      .click();
  }
}

module.exports = HomePage;