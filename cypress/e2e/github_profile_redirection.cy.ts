describe('Checking if redirection to GitHub profile is working', () => {
    it('Check redirection', () => {
        cy.visit('http://nafiz-hossain.github.io/portfolio');
        
        // Check if the link with the specified text content exists and has the correct href attribute
        cy.contains('Github Profile').should('have.attr', 'href', 'https://github.com/nafiz-hossain');
    })
})
