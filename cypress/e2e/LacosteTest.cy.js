const HomePage = require("../pages/HomePage");
const SearchResultsPage = require("../pages/SearchResultsPage");
const ProductPage = require("../pages/ProductPage");
const CartPage = require("../pages/CartPage");

describe("Lacoste Fr Tests", () => {
  const homePage = new HomePage();
  const searchPage = new SearchResultsPage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();

  const productName = "polo";
  const productCategory = "Chaussures";
  const size = "M";
  const color = "Noir";

  beforeEach(() => {
    cy.fixture('lacosteData').as('data');
    cy.fixture('users').as('users');
    homePage.visit();
  });

  it("test 2 users as", function () {

      cy.get("input[placeholder='Username']").type(this.users.firstUser[0].username);
      cy.get("input[placeholder='Password']").type(this.users.firstUser[0].password);
      cy.get("button[type='submit']").click();
  });


  it("test users as", () => {
    cy.get("@users").then((users) => {
      cy.get("input[placeholder='Username']").type(users.firstUser[0].username);
      cy.get("input[placeholder='Password']").type(users.firstUser[0].password);
      cy.get("button[type='submit']").click();
    })
  });


  it("test", () => {
    homePage.test();
  });

  it("should display results for a valid search", () => {
    homePage.searchProduct(productName);
    searchPage.verifyResults(productName);
  });


  it("should display a no-results message", () => {
    homePage.searchProduct("XYZNONEXISTENT999");
    searchPage.verifyNoResults();
  });



  it("should open a product category", () => {
    homePage.openCategory(productCategory);
    cy.get("body").should("be.visible");
    cy.url().should("include", productCategory.toLowerCase());
  });


  it("should display product details", () => {
    homePage.searchProduct(productName);
    searchPage.openFirstProduct();
    productPage.verifyProductDetails(productName);
  });


  it("should allow selecting a product size", () => {
    homePage.searchProduct(productName);
    searchPage.openFirstProduct();
    productPage.selectSize(size);
  });



  it("should add a product to the cart", () => {
    homePage.searchProduct(productName);
    searchPage.openFirstProduct();

    productPage.addToCart();
  });


  
  it("should display the selected product in the cart", () => {
    homePage.searchProduct(productName);
    searchPage.openFirstProduct();

    productPage.addToCart();
    cartPage.openCart();
    cartPage.verifyCartIsVisible(productName, size);
  });



  it("should filter and sort products", () => {
    homePage.visit();
    homePage.openCategory(productCategory);

    searchPage.filterByColor(color);
    searchPage.sortByPriceAscending();
  });


});