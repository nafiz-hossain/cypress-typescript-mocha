describe('Check Lets talk button if takes to contact form', () => {
    it('Check profile picture', () => {
        cy.visit('http://nafiz-hossain.github.io/portfolio');
        
        cy.contains('Let\'s Talk').click()
        cy.get('#contact').should('exist');

        // Check if the image with the specified src exists
        // cy.get('#Right img').should('have.attr', 'src', '/portfolio/static/media/nafiz2023_dp.9295f0f29ab15f127b30.jpeg');
    })   
})
