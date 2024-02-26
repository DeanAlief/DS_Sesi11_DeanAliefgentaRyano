const { $ , expect } = require ('@wdio/globals')
const Page = require ('./page.js');


const variables = {
    inventoryDetail: $('#item_4_title_link'),
    backtoHome: $('.left_component')
}

class ItemPage extends Page {

    async validateItem(){
        await variables.inventoryDetail.click();
        expect(browser).toHaveUrlContaining('/inventory-item.html')
        expect(variables.inventoryDetail).toBeDisplayed()
    }

    async open(){
        return super.open('/inventory-item.html');
    }
}

module.exports = new ItemPage();
