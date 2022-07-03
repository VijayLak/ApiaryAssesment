import CareersPage from '../pageObjects/CareersPage';

class SelfIdentificationPage extends CareersPage {
    get continueButton(){
        return this.getElementFromFrame(this.FRAME,'#gnewton-submit');
    }
}

export default new SelfIdentificationPage();