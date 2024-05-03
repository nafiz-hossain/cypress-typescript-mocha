describe('Experience Section', () => {
    beforeEach(() => {
      // Visit the portfolio website
      cy.visit('http://nafiz-hossain.github.io/portfolio');
    });
  
    it('should contain Software Engineer QA section', () => {
      cy.contains('Software Engineer QA').should('exist');
      cy.contains('Tiger IT Bangladesh Ltd').should('exist');
      cy.contains('June 2020 - Present').should('exist');
      cy.contains('Developed and maintained the messaging app across macOS, Windows, and Linux platforms').should('exist');
      cy.contains('Skills').should('exist');
      cy.contains('Typescript').should('exist');
      cy.contains('Javascript').should('exist');
      cy.contains('Postman').should('exist');
      cy.contains('Jmeter').should('exist');
      cy.contains('HiveMQTT').should('exist');
      cy.contains('CSS').should('exist');
      cy.contains('Electron').should('exist');
      cy.get('img[src*="ti-logo.png"]').should('exist');

    });
  
    it('should contain Co Founder section', () => {
      cy.contains('Co Founder').should('exist');
      cy.contains('Project- Feed-a-Family').should('exist');
      cy.contains('Mar 2020 - Present').should('exist');
      cy.contains('During the 2020 COVID-19 pandemic').should('exist');
      cy.contains('Skills').should('exist');
      cy.contains('Volunteering').should('exist');
      cy.contains('Communication').should('exist');
      cy.contains('Collaboration').should('exist');
      cy.get('img[src*="project-feed-a-family.jpg"]').should('exist');
    });
  
    it('should contain General Secretary section', () => {
      cy.contains('General Secretary').should('exist');
      cy.contains('CSEDU Students\' Club').should('exist');
      cy.contains('Jan 2019 - Feb 2020').should('exist');
      cy.contains('This club is the voice of the students of CSEDU').should('exist');
      cy.contains('Skills').should('exist');
      cy.contains('Effective Communication').should('exist');
      cy.contains('Leadership').should('exist');
      cy.contains('Time Management').should('exist');
      cy.contains('Responsibility').should('exist');
      cy.contains('Accountability').should('exist');
      cy.contains('Innovation').should('exist');
      cy.get('img[src*="csedusc.jpeg"]').should('exist');

    });
  
    it('should contain Executive Member section', () => {
      cy.contains('Executive Member').should('exist');
      cy.contains('CSEDU Students\' Club').should('exist');
      cy.contains('Jan 2018 - Jan 2019').should('exist');
      cy.contains('The club, embodying the voices of CSEDU students').should('exist');
      cy.contains('Skills').should('exist');
      cy.contains('Teamwork').should('exist');
      cy.contains('Organizational Skills').should('exist');
      cy.contains('Networking').should('exist');
      cy.contains('Fundraising').should('exist');
      cy.get('img[src*="csedusc.jpeg"]').should('exist');

    });
  });
  