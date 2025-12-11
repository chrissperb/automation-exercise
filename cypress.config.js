const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const webpackMain = require("webpack"); 

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: "https://automationexercise.com",
    chromeWebSecurity: false,
    
    defaultCommandTimeout: 10000, 

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      const options = {
        webpackOptions: {
          resolve: {
            extensions: [".ts", ".js"],
            fallback: {
              crypto: require.resolve("crypto-browserify"),
              stream: require.resolve("stream-browserify"),
              vm: require.resolve("vm-browserify"),
              path: require.resolve("path-browserify"),
              fs: false, 
            },
          },
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                    options: config,
                  },
                ],
              },
            ],
          },
          plugins: [
            new NodePolyfillPlugin(),
            new webpackMain.ProvidePlugin({
              process: "process/browser",
              Buffer: ["buffer", "Buffer"],
            }),
          ],
        },
      };

      on("file:preprocessor", webpack(options));
      
      require('@testomatio/reporter/lib/adapter/cypress-plugin')(on, config);

      return config;
    },
  },
});