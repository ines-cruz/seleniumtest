# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Selenium

In another terminal, in the project directory, run the following command `npm run s-test`

This will run the following tests:

-  clicking on submit button without username and
password

- adding a username

- adding a password

- clicking on submit with the credentials

If you wish to run the tests with the headless option you can uncomment in `test/test.js` that option.

## Findings

More info on other frameworks that are similar to Selenium: https://www.perfecto.io/blog/selenium-alternatives

Cucumber:  "While Selenium is an automation tool for web apps, Cucumber is an automation tool for behavior-driven development (BDD). In addition, Selenium executes UI tests while Cucumber does acceptance testing." (so I think Selenium is more what we are looking for)

Regarding Cypress vs Selenium: "Selenium is made up of bindings, or libraries, and the WebDriver, which controls the browsers. These two components work through the JSON network. Alternatively, while Cypress is used for UI testing, it uses its own unique DOM manipulation and runs directly in the browser with no network communication."

Regarding best practices: https://www.parasoft.com/blog/automated-web-ui-testing-best-practices-challenges-tools/
