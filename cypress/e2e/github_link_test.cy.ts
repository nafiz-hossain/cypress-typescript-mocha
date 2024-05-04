describe('Github link test', () => {
    beforeEach(() => {
        cy.visit('http://nafiz-hossain.github.io/portfolio');
    });

    it('should check availability of Github button', () => {
        // Assert that the Github button is present
        cy.get('[class="sc-gsFSXq bSXTty"]').should('exist');
    });

    it('Check redirection', () => {
        cy.visit('http://nafiz-hossain.github.io/portfolio');
        
        // Check if the link with the specified text content exists and has the correct href attribute
        cy.contains('Github Profile').should('have.attr', 'href', 'https://github.com/nafiz-hossain');
    })
});
