describe('Portfolio Projects', () => {
    beforeEach(() => {
      // Visit the portfolio website
      cy.visit('http://nafiz-hossain.github.io/portfolio');
    });
  
    it('should contain "CommChat Metaverse Messenger"', () => {
      cy.contains('CommChat Metaverse Messenger').should('exist');
    });
  
    it('should contain "NID Application system"', () => {
      cy.contains('NID Application system').should('exist');
    });
  
    it('should contain "Datahub"', () => {
      cy.contains('Datahub').should('exist');
    });
  
    it('should contain "Script Utility Toolbox"', () => {
      cy.contains('Script Utility Toolbox').should('exist');
    });
  
    it('should contain "Portfolio"', () => {
      cy.contains('Portfolio').should('exist');
    });
  
    it('should contain "LearnHub"', () => {
      cy.contains('LearnHub').should('exist');
    });
  
    it('should contain "cseduBoiGhor"', () => {
      cy.contains('cseduBoiGhor').should('exist');
    });
  
    it('should contain "MyScheduler"', () => {
      cy.contains('MyScheduler').should('exist');
    });
  
    it('should contain "Admission-Assistant"', () => {
      cy.contains('Admission-Assistant').should('exist');
    });
  
    it('should contain "Tic-Tac-Toe"', () => {
      cy.contains('Tic-Tac-Toe').should('exist');
    });
  
    it('should contain "snake-pygame"', () => {
      cy.contains('snake-pygame').should('exist');
    });
  
    it('should contain "Space Invaders"', () => {
      cy.contains('Space Invaders').should('exist');
    });
  
    // Add similar tests for other projects
  });
  