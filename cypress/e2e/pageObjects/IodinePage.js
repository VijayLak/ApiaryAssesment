import basePage from './basePage';
class IodinePage extends basePage {
    get companyDropDown(){
        return this.getElement('#menu-item-4050 > a');
    }

    get careersOption(){
        return this.getElementWithXpath(`//*[@id="custom_html-4"]//a[contains(@href,'/careers')]`);
    }

    openIodinePage(){
         this.goToApp('https://iodinesoftware.com/');
         this.companyDropDown.should('be.visible');
    }

    openCareerPage(){
        this.realElementMouseClick(this.companyDropDown);
        this.careersOption.should('be.visible');
        this.openLinkInSameWindow(this.careersOption).click();
    }
    
}

export default new IodinePage();