import CareersPage from '../pageObjects/CareersPage';
export default class IdentificationPage extends CareersPage {
    get pageHeader(){
        return this.getElementFromFrame(this.FRAME,'#gnewton-vevraa-form > div.gnewtonForm-title-bar.gnewtonForm-header > div');
    }

    get continueButton(){
        return this.getElementFromFrame(this.FRAME,'#gnewton-submit');
    }
}