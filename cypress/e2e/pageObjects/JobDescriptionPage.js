import CareersPage from '../pageObjects/CareersPage';

class JobDescriptionPage extends CareersPage{

    get ApplyButton(){
        return this.getElementFromFrame(this.FRAME,'#gnewtonJobDescriptionBtn > div.gnewtonBlueBtn.gnewtonApplyBtn');
    }

    getjobTitle(option){
        return this.getElementFromFrameWithXpath(this.FRAME,`//*[@id="gnewtonJobDescriptionText"]//b[contains(text(),"${option}")]`);
    }

}

export default new JobDescriptionPage();