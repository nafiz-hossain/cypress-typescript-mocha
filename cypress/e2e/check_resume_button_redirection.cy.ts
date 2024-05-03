describe('Checking if redirection to Resume is working', () => {
    it('Check redirection to google drive link for resume', () => {
        cy.visit('http://nafiz-hossain.github.io/portfolio');
        
        // Check if the link with the specified text content exists and has the correct href attribute
        cy.contains('Check Resume').should('have.attr', 'href').and('match', /drive/);

    })
})
