const HomePage = require("../pages/HomePage");
const SearchResultsPage = require("../pages/SearchResultsPage");
const ProductPage = require("../pages/ProductPage");
const CartPage = require("../pages/CartPage");

describe("Lacoste Fr Tests", () => {
  const homePage = new HomePage();
  const searchPage = new SearchResultsPage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();

  const productName = "Polo";
  const productCategory = "Chaussures";
  const size = "M";
  const color = "Noir";

  beforeEach(() => {
    cy.fixture('lacosteData').as('data');
    cy.fixture('users').as('users');
    homePage.visit();
  });

  it('Check website access', () => {
    cy.request({
      url: 'https://www.lacoste.com/fr',
      failOnStatusCode: false,
      followRedirect: true
    }).then((response) => {
      cy.log(`Status: ${response.status}`);
      cy.log(`Final URL: ${response.redirectedToUrl || 'N/A'}`);
      cy.log(`Content-Type: ${response.headers['content-type']}`);
    });

    cy.window().then((win) => {
      console.log({
        userAgent: win.navigator.userAgent,
        platform: win.navigator.platform,
        language: win.navigator.language,
        webdriver: win.navigator.webdriver
      });
    });
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
    productPage.selectSize(size);
    productPage.addToCart();
  });


  
  it("should display the selected product in the cart", () => {
    homePage.searchProduct(productName);
    searchPage.openFirstProduct();
    productPage.selectSize(size);
    productPage.addToCart();
    cartPage.openCart();
    cartPage.verifyCartIsVisible(productName, size);
  });



  it("should filter and sort products", () => {
    homePage.openCategory(productCategory);
    searchPage.filterByColor(color);
    searchPage.sortByPriceAscending();
  });


});