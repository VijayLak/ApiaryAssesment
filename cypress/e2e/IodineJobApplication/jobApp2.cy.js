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
import {preparePage,waitForPage} from '../../support/util';
const iframeCalls = require('../../fixtures/iframeCalls.json');
const jobToApply = require('../../fixtures/jobProfile.json');

describe('To Apply for Iodine SDET Position',() => {
    before('Navigate to the Iodine Site',() => {
        cy.viewport(1280, 720);
        IodinePage.openIodinePage();
        
    });

    it('Visit the Iodine Career Page',() => {
        preparePage(iframeCalls['CAREERS_HOME']);
        IodinePage.openCareerPage();
        cy.url().should('include', '/careers');
        waitForPage(iframeCalls['CAREERS_HOME']);
    });

    it('Click on SDET Option on Career Home Page',() => {
        preparePage(iframeCalls['JOB_DESCRIPTION']);
        CareersHomePage.careerHome.should('be.visible');
        CareersHomePage.getJobOption(jobToApply['SDET']).click();
        waitForPage(iframeCalls['JOB_DESCRIPTION']);

    });

    it('Validate Job Description Title',() => {
        preparePage(iframeCalls['SUBMIT_RESUME']);
        JobDescription.getjobTitle(jobToApply['SDET']).invoke('text').should('eq',jobToApply['SDET']);
        JobDescription.ApplyButton.click();
        waitForPage(iframeCalls['SUBMIT_RESUME']);
    });

    it('Answer Immigration Questions',() => {
        preparePage(iframeCalls['SUBMIT_QUESTIONNAIRE']);
        ImmigrationQuestionsPage.authorizedToWork_YES.should('be.visible');
        ImmigrationQuestionsPage.continueAppButton.should('have.class','disabled');
        // selecting options
        ImmigrationQuestionsPage.answerYes();
        ImmigrationQuestionsPage.continueAppButton.should('not.have.class','disabled');
        ImmigrationQuestionsPage.continueAppButton.click();
        waitForPage(iframeCalls['SUBMIT_QUESTIONNAIRE']);
    });

    it('Complete Self Identification Page',() => {
        preparePage(iframeCalls['SHOW_VEVRAA']);
        SelfIdentificationPage.continueButton.should('be.visible');
        SelfIdentificationPage.continueButton.click();
        waitForPage(iframeCalls['SHOW_VEVRAA']);
    });

    it('Complete Gender Self Identification Page',() => {
        preparePage(iframeCalls['VEVRAA_GENDER']);
        GenderIdentificationPage.pageHeader.invoke('text').should('contain',GenderIdentificationPage.HEADER);
        GenderIdentificationPage.continueButton.click();
        waitForPage(iframeCalls['VEVRAA_GENDER']);
    });

    it('Complete Veteran Self Identification Page',() => {
        preparePage(iframeCalls['VEVRAA_VETRAN']);
        VeteranIdentificationPage.pageHeader.invoke('text').should('contain',VeteranIdentificationPage.HEADER);
        VeteranIdentificationPage.continueButton.click();
        waitForPage(iframeCalls['VEVRAA_VETRAN']);
    });

    it('Complete Disability Self Identification Page',() => {
        preparePage(iframeCalls['SUBMIT_VEVRAA']);
        DisabilityIdentificationPage.pageHeader.invoke('text').should('contain',DisabilityIdentificationPage.HEADER);
        DisabilityIdentificationPage.continueButton.click();
        waitForPage(iframeCalls['SUBMIT_VEVRAA']);
    });

    it('Submit Form - Document Upload',() => {
        SubmitFormPage.header.invoke('text').should('contain',SubmitFormPage.HEADER);
        SubmitFormPage.uploadResume('cypress/fixtures/myresume.pdf');
        SubmitFormPage.resumeDropped.invoke('text').should('contain','myresume');
    });

    it('Submit Form Validation',() => {
        SubmitFormPage.submitButton.click();
        SubmitFormPage.submissionForm.within(() => {
            cy.get('input:invalid').then(items => {
                // Validates the Top most element error
                cy.get(items[0]).invoke('prop','validationMessage')
                .should('equal', 'Please fill out this field.');
            })
        })
    });
})
