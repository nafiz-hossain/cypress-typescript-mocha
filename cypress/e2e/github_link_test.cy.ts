describe('Github link test', ()=>{
    beforeEach(() => {
        cy.visit('http://nafiz-hossain.github.io/portfolio')
    })
    it('Github button availability', ()=>{
        cy.get('[class="sc-gsFSXq bSXTty"]')
    })

    it('Clicks on the "Github Profile" link', () => {
        cy.get('div.sc-kAyceB.bKssKc')
          .find('a.sc-gsFSXq.bSXTty') 
          .click();    
          cy.url().should('include', 'github.com/nafiz-hossain')
                 
    });
})