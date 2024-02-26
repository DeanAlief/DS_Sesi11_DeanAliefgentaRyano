const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const homelement = {
    iconCart: $('.shopping_cart_link')
}

class HomePage extends Page {

    async validateHomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(homelement.iconCart).toBeDisplayed()
    }

    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();