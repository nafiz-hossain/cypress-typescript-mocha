import { cli } from "cypress"

describe('Check navigation bar items', () => {
    beforeEach(() => {
        cy.visit('http://nafiz-hossain.github.io/portfolio')
    })

    it('Check Header clickable items: Contact', () => {
        cy.get('.sc-iGgWBj.eqSWhH').contains('Contact').click().should('have.text', 'Contact')
    })

    it('Check Header clickable items: Projects', () => {
        cy.get('.sc-iGgWBj.eqSWhH').contains('Projects').click().should('have.text', 'Projects')
    })

    it('Check Header clickable items: About', () => {
        cy.get('.sc-iGgWBj.eqSWhH').contains('About').click().should('have.text', 'About')
    })
    it('Check Header clickable items: Education', () => {
        cy.get('.sc-iGgWBj.eqSWhH').contains('Education').click().should('have.text', 'Education')
    })
    it('Check Header clickable items: Skills', () => {
        cy.get('.sc-iGgWBj.eqSWhH').contains('Skills').click().should('have.text', 'Skills')
    })
    it('Check Header clickable items: Experience', () => {
        cy.get('.sc-iGgWBj.eqSWhH').contains('Experience').click().should('have.text', 'Experience')
    })
})
