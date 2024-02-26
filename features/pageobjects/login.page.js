const { $, expect } = require('@wdio/globals')
const Page = require('./page');

//tipe variable ada const, var, let
// const errorLockedOutUser = (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)
// get fieldUsername () { return $('#user-name'); }
// get fieldPassword () { return $('#password'); }
// get buttonLogin () { return $('#login-button'); }

//variable grouping
const element = {
    fieldUsername: $('#user-name'),
    fieldPassword: $('#password'),
    buttonLogin: $('#login-button'),
    errorLockedOutUser: (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`),
    burgerbtn: $('#react-burger-menu-btn'),
    logoutbtn: $('#logout_sidebar_link')
}

class LoginPage extends Page {

    async login (username) {
        await element.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await element.fieldUsername.setValue(username);
        await element.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await element.buttonLogin.click();
    }

    async validateLockedOutUserError (dynamicMessage) {
        await element.errorLockedOutUser(dynamicMessage).waitForDisplayed({ timeout: 2500 });
        await expect(element.errorLockedOutUser(dynamicMessage)).toBeDisplayed()
    }

    async logout() {
        await element.burgerbtn.click();
        await element.logoutbtn.click();
        expect(browser).toHaveUrlContaining('/');
    }
    
    open () {
        return super.open('/'); // NOTE: will open https://www.saucedemo.com/
    }
}


module.exports = new LoginPage();