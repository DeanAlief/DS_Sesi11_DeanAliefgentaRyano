const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');
const itemPage = require('../pageobjects/item.page.js');
const additemPage = require('../pageobjects/additem.page.js');
const loginPage = require('../pageobjects/login.page.js');

Given(/^Dean is on the login page$/, async () => {
    await LoginPage.open()
})

When(/^Dean login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username)
})

Then(/^Dean should see home page$/, async() => {
    await HomePage.validateHomePage()
})

Then(/^Dean should see error "(.*)"$/, async (dynamicMessage) => {
    await LoginPage.validateLockedOutUserError(dynamicMessage)
})

When(/^Dean clicked sauce labs backpack$/, async () => {
    await itemPage.validateItem()
})

Then(/^Dean should see item details page$/, async() => {
    await itemPage.open()
})

When(/^Dean adding item into the shopping cart$/, async () => {
    await additemPage.addItem()
})

Then(/^Dean proceeds to finish the transaction$/, async () => {
    await additemPage.enterinfo(process.env.FIRST_NAME, process.env.LAST_NAME, process.env.POSTAL_CODE)
})

Then(/^Dean should see checkout complete page$/, async() => {
    await additemPage.finishcheckout()
})

Then(/^Dean proceeds to finish the transaction but leaving Last name field empty$/, async () => {
    await additemPage.enterinfo(process.env.FIRST_NAME, process.env.EMPTY, process.env.POSTAL_CODE)
})

Then(/^Dean should see the error "(.*)"$/, async (dynamicMessage) => {
    await additemPage.emptyfieldError(dynamicMessage)
})

When(/^Dean clicked logout$/, async () => {
    await loginPage.logout()
})

Then(/^Dean should see login page$/, async () => {
    await loginPage.open()
})
