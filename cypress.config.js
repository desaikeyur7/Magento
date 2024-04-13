const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  env: {
    DEV_URL: "http://dev.magento.softwaretestingboard.com/",
    STAGING_URL: "http://staging.magento.softwaretestingboard.com/",
    PROD_URL: "http://magento.softwaretestingboard.com/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "**/*.feature",
  },
});
