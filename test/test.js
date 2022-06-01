/**
 * Dependency Modules
 */
var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
require("geckodriver"); // Application Server
const serverUri = "http://localhost:3000/#";
const appTitle = "React Selenium App";
//const firefox = require("selenium-webdriver/firefox");

/**
 * Config for Chrome browser
 * @type {webdriver}
 */
var browser = new webdriver.Builder()
  .usingServer()
  .withCapabilities({ browserName: "firefox" })
  //.setFirefoxOptions(new firefox.Options().addArguments("--headless"))
  .build();

/**
 * Config for Firefox browser (Comment Chrome config when you intent to test in Firefox)
 * @type {webdriver}
 */
/*
 var browser = new webdriver.Builder()
  .usingServer()
  .withCapabilities({ browserName: "chrome" })
  .build();
  */ /**
 * Function to get the title and resolve it it promise.
 * @return {[type]} [description]
 */
function logTitle() {
  return new Promise((resolve, reject) => {
    browser
      .getTitle()
      .then(function (title) {
        console.log("title:" + title);
        resolve(title);
      })
      .catch((err) => reject(err));
  });
}

describe("Home Page", function (done) {
  /**
   * Test case to load our application and check the title.
   */
  it("Should load the home page and get title", function () {
    return new Promise((resolve) => {
      browser
        .get(serverUri)
        .then(logTitle)
        .then((title) => {
          assert.equal(title, appTitle);
          resolve();
        })
        .then(() => done());
    });
  });
  /**
   * Test case to check whether the given element is loaded.
   */
  it("Should check whether the given element is loaded", function () {
    return new Promise((resolve, reject) => {
      browser
        .findElement({ id: "button1" })
        .then((elem) => {
          resolve();
        })
        .catch((err) => reject(err));
    });
  });

  it("Submit button clicked with no input", function () {
    return new Promise((resolve, reject) => {
      const submitButton = browser.findElement({ id: "button1" });
      submitButton.click();
      resolve();
    });
  });

  it("Add username", function () {
    return new Promise((resolve, reject) => {
      browser
        .findElement({ id: "uname" })
        .sendKeys("user1")
        .then((input) => expect(input).to.equal("user1"));
      resolve();
    });
  });

  it("Add password", function () {
    return new Promise((resolve, reject) => {
      browser
        .findElement({ id: "password" })
        .sendKeys("pass1")
        .then((input) => expect(input).to.equal("pass1"));
      resolve();
    });
  });

  it("Submit button clicked with input", function () {
    return new Promise((resolve, reject) => {
      const submitButton = browser.findElement({ id: "button1" });
      submitButton.click();
      resolve();
    });
  });

  /**
   * End of test cases use.

  after(function () {
    // End of test use this.
    browser.quit();
  });
  */
});
