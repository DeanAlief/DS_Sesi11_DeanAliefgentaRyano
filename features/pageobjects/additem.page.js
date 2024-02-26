const { $ , expect } = require ('@wdio/globals')
const Page = require ('./page.js');


const elements = {
    additembtn: $('#add-to-cart-sauce-labs-backpack'),
    iconCart: $('.shopping_cart_link'),
    checkoutbtn: $('#checkout'),
    fieldfirstname: $('#first-name'),
    fieldlastname: $('#last-name'),
    fieldpostalcode: $('#postal-code'),
    continuebtn: $('#continue'),
    finishbtn: $('#finish'),
    backhomebtn: $('#back-to-products'),
    errorEmptyform: (dynamicMessage) => $(`//*[text()="${dynamicMessage}"]`)
}

class AddItemPage extends Page {
 
    async addItem(){
        await elements.additembtn.click();
        await elements.iconCart.click();
        expect(browser).toHaveUrlContaining('/cart.html')
        expect(elements.checkoutbtn).toBeDisplayed()
    }

    async enterinfo(firstname,lastname,postalcode){
        await elements.checkoutbtn.click();
        await elements.fieldfirstname.waitForDisplayed({timeout: 25000});
        await elements.fieldfirstname.setValue(firstname);
        await elements.fieldlastname.setValue(lastname);
        await elements.fieldpostalcode.setValue(postalcode);
        await elements.continuebtn.click();
        expect(browser).toHaveUrlContaining('/checkout-step-two.html')
        expect(elements.finishbtn).toBeDisplayed()
    }

    async finishcheckout(){
        await elements.finishbtn.click();
        expect(browser).toHaveUrlContaining('/checkout-complete.html')
        expect(elements.backhomebtn).toBeDisplayed

    }

    async emptyfieldError (dynamicMessage){
        await elements.errorEmptyform(dynamicMessage).waitForDisplayed({ timeout: 2500 });
        await expect(elements.errorEmptyform(dynamicMessage)).toBeDisplayed()
    }
    

    

    async open(){
        return super.open('/cart.html');
    }
}

module.exports = new AddItemPage();