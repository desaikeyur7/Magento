# Magento-Master

This repository contains an end-to-end (e2e) testing suite for a Magento-based web application. The tests are written using Cypress, a modern JavaScript testing framework.

## Project Structure

- **allure-reports**: This folder stores the generated Allure reports for test execution results.
- **cypress**: This folder contains all the Cypress test files and configuration.
  - **e2e**: Contains end-to-end feature files.
    - **BuyProduct.feature**: Feature file containing tests related to the homepage.
  - **fixtures**: Contains fixture files used for test data.
    - **urls.json**: JSON file storing base URLs.
  - **support**: Contains support files used by Cypress tests.
    - **page-objects**: Folder containing page object files for test elements.
    - **step-definitions**: Contains step definition files for Cucumber scenarios.
        - **BuyProductSteps.js**: Step definition file for buying products.
  - **command.js**: Custom Cypress commands file.
  - **e2e.js**: Entry point for running end-to-end tests. This file is processed and loaded automatically before test files. 
- **node_modules**: Folder containing dependencies installed via npm.
- **.gitignore**: Git ignore file to specify which files and directories to ignore in version control.
- **cypress.config.js**: Configuration file for Cypress.
- **package-lock.json**: Automatically generated file containing the exact versions of npm dependencies installed.
- **package.json**: File containing project metadata and dependencies.

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Execute end-to-end tests using `npm run test:e2e`.
5. View test execution reports in the `allure-reports` folder.

## Install dependencies
    npm install

## Execute end-to-end tests 
    npm run test

## Use tags to run a tagged feature file or a collection of feature files
npm run test --TAGS="@regression"

## Reports
Upon completion of the test run, the report will be automatically generated and accessible at /allure-results.


## Test result screenshot 

![Screenshot 2024-04-13 at 20 09 52](https://github.com/desaikeyur7/Magento/assets/30195677/ba64dcd9-d3f9-4994-b333-119ba99c5295)

