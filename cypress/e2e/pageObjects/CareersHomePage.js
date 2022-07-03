import CareersPage from '../pageObjects/CareersPage';

class CareersHomePage extends CareersPage {
    get careerHome(){
        return this.getElementFromFrame(this.FRAME,'#gnewtonCareerHome');
    }

    getJobOption(option){
        return this.getElementFromFrameWithXpath(this.FRAME,`//*[@id="gnewtonCareerHome"]//div[@class="gnewtonCareerGroupJobTitleClass"]//a[contains(text(),"${option}")]`);
    }

}

export default new CareersHomePage();
