import "cypress-real-events/support";
import "cypress-xpath";

export default class basePage {
    goToApp(url){
        return cy.visit(url);
    }

    getElement(element){
        return cy.get(element);
    }

    getElementWithXpath(element){
        return cy.xpath(element);
    }

    getElementFromFrame(frame,element){
        return cy.switchToIframes(frame).find(element);
    }

    getElementFromFrameWithXpath(frame,element){
        return cy.switchToIframes(frame).xpath(element);
    }

    openLinkInSameWindow(element){
        return element.invoke('removeAttr','target');
    }

    realElementMouseClick(element){
        return element.realClick('mouse');
    }

    waitForElement(element){
        return cy.contains(element);
    }
}
