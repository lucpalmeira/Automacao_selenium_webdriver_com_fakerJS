const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: "test_webdriver",
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "http://automationexercise.com",
      browser: "chrome",
      waitForTimeout: 5000,
      desiredCapabilities: {
        chromeOptions: {},
      },
    },
  },
  include: {
    I: "./steps_file.js",
  },
  bootstrap: null,
  teardown: null,
  mocha: {},
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
    wdio: {
      enabled: true,
      services: ["selenium-standalone"],
    },
  },
};
