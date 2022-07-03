import IdentificationPage from '../pageObjects/IdentificationPage';

class GenderIdentificationPage extends IdentificationPage {
    constructor(){
        super();
        this.HEADER = 'Invitation to Self-Identify Gender, Ethnicity/Race';
    }
}

export default new GenderIdentificationPage();