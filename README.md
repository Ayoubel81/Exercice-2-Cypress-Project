Exercice 2 - Cypress Project

1. Project Overview
This project automates functional tests for the Lacoste Fr website using Cypress and the Page Object Model design pattern.

The objective is to validate key customer journeys, including product search, category navigation, product details, size selection, cart management, and product filtering

2. Technologies Used

Cypress – End-to-end test automation.

JavaScript – Test implementation.

Page Object Model  – Separation of page locators and actions from test scenarios.

Fixtures (JSON) – Test data management.

GitHub Actions – Continuous integration and automated test execution.

Git and GitHub – Version control and project hosting.

3. Automated Test Cases
ID   | Test Scenario                                | Validation
TC01 | Search for a valid product                   | Verify search results for "polo"
TC02 | Search for a nonexistent product             | Verify the no-results message
TC03 | Open a product category                      | Check page visibility and category URL
TC04 | Display product details                      | Verify product details after opening a product
TC05 | Select a product size                        | Execute size selection for size M
TC06 | Add a product to the cart                    | Execute the add-to-cart action
TC07 | Verify the cart contents                     | Verify the cart contains the expected product and size
TC08 | Filter products by color                     | Execute the color filter for black products
TC09 | Sort products by price                       | Execute ascending price sorting


4. Tests Not Yet Implemented

The following scenarios are recommended improvements and are not covered by the provided test code.

Website access and navigation

Verify the homepage loads without unexpected errors.

Verify navigation links and the main menu.

Product search and catalog

Verify search suggestions and autocomplete.

Verify search behavior with empty input, special characters, and different letter cases.

Verify product images, names, prices, and availability.

Verify that filters return only products matching the selected criteria.

Verify sorting by price in both ascending and descending order.

Verify pagination or loading additional products.

Product details

Verify product description, price, images, and availability.

Verify color selection and associated product images.

Verify that unavailable sizes cannot be selected.

Verify size selection is required when applicable.

Shopping cart and checkout

Verify updating product quantities.

Verify removing a product from the cart.

Verify cart subtotal and total calculations.

Verify adding multiple products.

Verify checkout validation, delivery information, and payment steps, where testable.

Verify error messages and form validation.




5. Prerequisites

Before running the project, install:

Node.js (a version supported by the installed Cypress release).
npm.

6. Installation

Install dependencies:

npm install

If the Cypress browser binary is not installed, run:

npx cypress install



7. Running the Tests

Open Cypress Test Runner

npx cypress open

Select E2E Testing, choose a browser, and run the desired test file.
---------------------------------------------------------
Run tests in headless mode

npx cypress run
---------------------------------------------------------
To run a specific test file:

npx cypress run --spec "cypress/e2e/lacoste.cy.js"

---------------------------------------------------------
Reports, screenshots, and videos

The available Cypress configuration can enable screenshots on test failures and video recording.

For example:

npx cypress run --config video=true,screenshotOnRunFailure=true



8. CI/CD Pipeline – GitHub Actions

The project uses GitHub Actions to automatically execute Cypress tests when code is pushed to the main branch.

The workflow is configured in:

.github/workflows/cypress.yml

Pipeline steps

Checkout repository: Downloads the project source code.

Run Cypress tests: Executes the automated end-to-end tests on an Ubuntu runner.

Generate test evidence: Enables video recording and screenshots on test failures.

Upload artifacts: Saves available screenshots and videos for later review, even if the tests fail.

View pipeline results

    1) Open the project repository on GitHub.

    2) Navigate to the Actions tab.

    3) Select the latest workflow run.

    4) Review the test execution status and logs.

    5) Download the cypress-test-results artifact if it was generated.