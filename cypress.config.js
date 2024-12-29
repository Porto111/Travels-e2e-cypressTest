const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").defalt

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 15000,
    baseUrl: "https://phptravels.net/",
    specPattern: "**/*/.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
