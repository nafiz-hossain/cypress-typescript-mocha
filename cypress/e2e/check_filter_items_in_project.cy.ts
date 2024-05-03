describe('Portfolio Projects', () => {
    beforeEach(() => {
      // Visit the portfolio website
      cy.visit('http://nafiz-hossain.github.io/portfolio');
    });
  
    it('should show only industrial section projects when filtered by Industrial section', () => {
      // Click on the "Industrial" section filter
      cy.contains('INDUSTRIAL PROJECTS').click();
  
      // Check if only industrial section projects are visible
      cy.contains('CommChat Metaverse Messenger').should('exist');
      cy.contains('NID Application system').should('exist');
      cy.contains('Datahub').should('exist');
  
      // Check if personal projects are not visible
      cy.contains('Script Utility Toolbox').should('not.exist');
      cy.contains('Portfolio').should('not.exist');
      cy.contains('LearnHub').should('not.exist');
      cy.contains('cseduBoiGhor').should('not.exist');
      cy.contains('MyScheduler').should('not.exist');
      cy.contains('Admission-Assistant').should('not.exist');
      cy.contains('Tic-Tac-Toe').should('not.exist');
      cy.contains('snake-pygame').should('not.exist');
      cy.contains('Space Invaders').should('not.exist');
    });
  
    it('should show personal projects when filtered by Personal section', () => {
      // Click on the "Personal" section filter
      cy.contains('PERSONAL PROJECTS').click();
  
      // Check if personal projects are visible
      cy.contains('Script Utility Toolbox').should('exist');
      cy.contains('Portfolio').should('exist');
      cy.contains('LearnHub').should('exist');
      cy.contains('cseduBoiGhor').should('exist');
      cy.contains('MyScheduler').should('exist');
      cy.contains('Admission-Assistant').should('exist');
      cy.contains('Tic-Tac-Toe').should('exist');
      cy.contains('snake-pygame').should('exist');
      cy.contains('Space Invaders').should('exist');
  
      // Check if industrial section projects are not visible
      cy.contains('CommChat Metaverse Messenger').should('not.exist');
      cy.contains('NID Application system').should('not.exist');
      cy.contains('Datahub').should('not.exist');
    });
  });
  