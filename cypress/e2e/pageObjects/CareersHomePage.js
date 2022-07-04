import CareersPage from '../pageObjects/CareersPage';

class CareersHomePage extends CareersPage {
    get careerHome(){
        return this.getElementFromFrame(this.FRAME,'#gnewtonCareerHome');
    }

    getJobOption(option){
        return this.getElementFromFrameWithXpath(this.FRAME,`//*[@id="gnewtonCareerHome"]//div[@class="gnewtonCareerGroupJobTitleClass"]//a[contains(text(),"${option}")]`);
    }

    waitForPageLoad(){
        cy.intercept({
            method: "GET",
            url: "https://recruitingbypaycor.com/career/CareerHome.action*",
          }).as("getJobIntro");
        cy.wait('@getJobIntro',{timeout:10000}).its('response.statusCode').should('equal', 200);
    }

}

export default new CareersHomePage();
