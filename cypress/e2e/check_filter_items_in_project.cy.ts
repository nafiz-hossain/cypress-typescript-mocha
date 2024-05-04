describe('Portfolio Projects', () => {
    beforeEach(() => {
      // Visit the portfolio website
      cy.visit('http://nafiz-hossain.github.io/portfolio');
    });
  
    it('should show only industrial section projects when filtered by Industrial section', () => {
      cy.get('#projects').contains('INDUSTRIAL PROJECTS').click();
  
      cy.get('#projects').contains('CommChat Metaverse Messenger').should('exist');
      cy.get('#projects').contains('NID Application system').should('exist');
      cy.get('#projects').contains('Datahub').should('exist');
  
      cy.get('#projects').contains('Script Utility Toolbox').should('not.exist');
      cy.get('#projects').contains('Portfolio').should('not.exist');
      cy.get('#projects').contains('LearnHub').should('not.exist');
      cy.get('#projects').contains('cseduBoiGhor').should('not.exist');
      cy.get('#projects').contains('MyScheduler').should('not.exist');
      cy.get('#projects').contains('Admission-Assistant').should('not.exist');
      cy.get('#projects').contains('Tic-Tac-Toe').should('not.exist');
      cy.get('#projects').contains('snake-pygame').should('not.exist');
      cy.get('#projects').contains('Space Invaders').should('not.exist');
    });
  
    it('should show personal projects when filtered by Personal section', () => {
      cy.get('#projects').contains('PERSONAL PROJECTS').click();
      cy.get('#projects').contains('Script Utility Toolbox').should('exist');
      cy.get('#projects').contains('Portfolio').should('exist');
      cy.get('#projects').contains('LearnHub').should('exist');
      cy.get('#projects').contains('cseduBoiGhor').should('exist');
      cy.get('#projects').contains('MyScheduler').should('exist');
      cy.get('#projects').contains('Admission-Assistant').should('exist');
      cy.get('#projects').contains('Tic-Tac-Toe').should('exist');
      cy.get('#projects').contains('snake-pygame').should('exist');
      cy.get('#projects').contains('Space Invaders').should('exist');
  
      cy.get('#projects').contains('CommChat Metaverse Messenger').should('not.exist');
      cy.get('#projects').contains('NID Application system').should('not.exist');
      cy.get('#projects').contains('Datahub').should('not.exist');
    });
  });
  