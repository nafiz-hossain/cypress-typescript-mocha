describe('Checking if profile picture is missing', () => {
    it('Check profile picture', () => {
        cy.visit('http://nafiz-hossain.github.io/portfolio');
        
        // Check if the image with the specified src exists
        cy.get('#Right img').should('have.attr', 'src', '/portfolio/static/media/nafiz2023_dp.9295f0f29ab15f127b30.jpeg');
    })   
})
