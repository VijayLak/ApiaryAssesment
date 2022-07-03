/// <reference types="cypress" />
import IodinePage from '../pageObjects/IodinePage';
import CareersHomePage from '../pageObjects/CareersHomePage';
import JobDescription from '../pageObjects/JobDescriptionPage';
import ImmigrationQuestionsPage from '../pageObjects/ImmigrationQuestionsPage';
import SelfIdentificationPage from '../pageObjects/SelfIdentificationPage';
import GenderIdentificationPage from '../pageObjects/GenderIdentificationPage';
import VeteranIdentificationPage from '../pageObjects/VeteranIdentificationPage';
import DisabilityIdentificationPage from '../pageObjects/DisabilityIdentificationPage';
import SubmitFormPage from '../pageObjects/SubmitFormPage';

describe('To Apply for Iodine SDET Position',() => {
    before('Navigate to the Iodine Site',() => {
        cy.viewport(1280, 720);
        IodinePage.openIodinePage();
        
    });

    it('Visit the Iodine Career Page',() => {
        IodinePage.openCareerPage();
        cy.url().should('include', '/careers');
    });

    it('Click on SDET Option on Career Home Page',() => {
        const jobToApply = require('../../fixtures/jobProfile.json');
        CareersHomePage.careerHome.should('be.visible');
        CareersHomePage.getJobOption(jobToApply['SDET']).click();
        cy.wait(1000);
        JobDescription.getjobTitle(jobToApply['SDET']).invoke('text').should('eq',jobToApply['SDET']);
        JobDescription.ApplyButton.click();
    });

    it('Answer Immigration Questions',() => {
        cy.wait(1000);
        ImmigrationQuestionsPage.authorizedToWork_YES.should('be.visible');
        ImmigrationQuestionsPage.continueAppButton.should('have.class','disabled');
        // selecting options
        ImmigrationQuestionsPage.answerYes();
        ImmigrationQuestionsPage.continueAppButton.should('not.have.class','disabled');
        ImmigrationQuestionsPage.continueAppButton.click();
    });

    it('Complete Self Identification Page',() => {
        cy.wait(1000);
        SelfIdentificationPage.continueButton.should('be.visible');
        SelfIdentificationPage.continueButton.click();
    });

    it('Complete Gender Self Identification Page',() => {
        cy.wait(1000);
        GenderIdentificationPage.pageHeader.invoke('text').should('contain',GenderIdentificationPage.HEADER);
        GenderIdentificationPage.continueButton.click();
    });

    it('Complete Veteran Self Identification Page',() => {
        cy.wait(1000);
        VeteranIdentificationPage.pageHeader.invoke('text').should('contain',VeteranIdentificationPage.HEADER);
        VeteranIdentificationPage.continueButton.click();
    });

    it('Complete Disability Self Identification Page',() => {
        cy.wait(1000);
        DisabilityIdentificationPage.pageHeader.invoke('text').should('contain',DisabilityIdentificationPage.HEADER);
        DisabilityIdentificationPage.continueButton.click();
    });

    it('Submit Form - Document Upload',() => {
        cy.wait(3000);
        SubmitFormPage.header.invoke('text').should('contain',SubmitFormPage.HEADER);
        SubmitFormPage.uploadResume('cypress/fixtures/myresume.pdf');
        SubmitFormPage.resumeDropped.invoke('text').should('contain','myresume');
    });

    it('Submit Form Validation',() => {
         //clearing the first name field
        SubmitFormPage.firstNameFromFrame.clear();
        SubmitFormPage.submitButton.click(); 
        SubmitFormPage.submissionForm.within(() => {
            SubmitFormPage.firstName.invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.');
        })
    });
})
