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
TC05 | Search for a valid product                   | Execute size selection for size M
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

Verify product image gallery behavior.

Shopping cart and checkout

Verify updating product quantities.

Verify removing a product from the cart.

Verify cart subtotal and total calculations.

Verify adding multiple products.

Verify the cart persists when navigating between pages.

Verify checkout validation, delivery information, and payment steps, where testable.

Additional quality checks

Verify responsive behavior on desktop, tablet, and mobile.

Verify accessibility basics, including keyboard navigation, labels, and image alternative text.

Verify error messages and form validation.

Verify performance and browser compatibility.

Verify analytics events for important customer journeys, if required.