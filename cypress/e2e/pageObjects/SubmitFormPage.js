import CareersPage from '../pageObjects/CareersPage';

class SubmitFormPage extends CareersPage{
    constructor(){
        super();
        this.HEADER = 'Thank you for your interest. Please complete the fields below and click "Submit".';
    }
    get chooseAFileButton(){
        return this.getElementFromFrame(this.FRAME,'#resumeDropLocalFile');
    }

    get fileUploadButton(){
        return this.getElementFromFrame(this.FRAME,'#uploadResumeInput');
    }
    
    get header(){
        return this.getElementFromFrame(this.FRAME,'#gnewtonHelpTextOfSubmission');
    }

    get resumeDropped(){
        return this.getElementFromFrame(this.FRAME,'#resumeDropped');
    }

    get submitButton() {
        return this.getElementFromFrame(this.FRAME,'#gnewotn_input_18');
    }

    get submissionForm(){
        return this.getElementFromFrame(this.FRAME,'#gnewtonForm');
    }

    get firstNameFromFrame() {
        return this.getElementFromFrame(this.FRAME,'#firstName');
    }

    get firstName() {
        return this.getElement('#firstName');
    }

    uploadResume(filePath){
        this.chooseAFileButton.click();
        this.fileUploadButton.selectFile(filePath,{force: true});
    }

}

export default new SubmitFormPage();
