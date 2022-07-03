import IdentificationPage from '../pageObjects/IdentificationPage';

class DisabilityIdentificationPage extends IdentificationPage {
    constructor(){
        super();
        this.HEADER = 'Voluntary Self-Identification of Disability';
    }
}

export default new DisabilityIdentificationPage();