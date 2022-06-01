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
  describe("Button is loaded test example ", () => {
    it("Should check whether the given element is loaded", async () => {
      await browser.findElement({ id: "button1" });
    });
  });
  describe("Submit Button no credentials test example ", () => {
    it("Submit button clicked with no input", async () => {
      const submitButton = await browser.findElement({ id: "button1" });
      await submitButton.click();
    });
  });

  describe("Username test example ", () => {
    it("Add username", async () => {
      const user = await browser.findElement({ id: "uname" });
      await user.sendKeys("user1");
    });
  });

  describe("Password test example ", () => {
    it("Add password", async () => {
      const pass = await browser.findElement({ id: "password" });
      await pass.sendKeys("pass1");
    });
  });

  it("Get username", function () {
    return new Promise((resolve) => {
      browser
        .findElement({ id: "uname" })
        .then((input) => expect(input).to.equal("user1"))
        .then((input) => assert.equal(input, "user1"));
      resolve();
    });
  });

  it("Get password", function () {
    return new Promise((resolve) => {
      browser
        .findElement({ id: "password" })
        .then((input) => expect(input).to.equal("pass1"))
        .then((input) => assert.equal(input, "pass1"));
      resolve();
    });
  });

  describe("Submit button with credentials test example ", () => {
    it("Submit button clicked with input", async () => {
      const submitButton = await browser.findElement({ id: "button1" });
      await submitButton.click();
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
