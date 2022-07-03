import CareersPage from '../pageObjects/CareersPage';
class ImmigrationQuestionsPage extends CareersPage {
    get authorizedToWork_YES(){
        return this.getElementFromFrame(this.FRAME,'#y_8a7883a97c7b0baf017ca44b07f32134');
    }

    get authorizedToWork_NO(){
        return this.getElementFromFrame(this.FRAME,'#n_8a7883a97c7b0baf017ca44b07f32134');
    }

    get sponsorship_YES(){
        return this.getElementFromFrame(this.FRAME,'#y_8a7883a97c7b0baf017ca44cda7d2224');
    }

    get sponsorship_NO(){
        return this.getElementFromFrame(this.FRAME,'#n_8a7883a97c7b0baf017ca44cda7d2224');
    }

    get continueAppButton(){
        return this.getElementFromFrame(this.FRAME,'#saveBtn');
    }

    answerYes(){
        this.authorizedToWork_YES.click();
        this.sponsorship_YES.click();
    }
}

export default new ImmigrationQuestionsPage();