import { cli } from "cypress"

describe('Check navigation bar items', () => {
    it('Check Header clickable items ', () => {
      cy.visit('http://nafiz-hossain.github.io/portfolio')
    //   cy.should('have.title', 'Google')
        // expect(true).to.equal(true)
        // cy.contains('Google')
        cy.get('.sc-iGgWBj.eqSWhH').contains('Contact').click().should('have.text', 'Contact')
})
  })
