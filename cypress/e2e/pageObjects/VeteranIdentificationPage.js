import IdentificationPage from '../pageObjects/IdentificationPage';

class VeteranIdentificationPage extends IdentificationPage {
    constructor(){
        super();
        this.HEADER = 'Invitation to Self-Identify Protected Veteran Status';
    }
}

export default new VeteranIdentificationPage();