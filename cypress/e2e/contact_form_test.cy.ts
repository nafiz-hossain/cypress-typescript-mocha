describe('Check contact form', () => {
    beforeEach(() => {
        cy.visit('http://nafiz-hossain.github.io/portfolio')
    })
    it('Contact form test with valid data', () => {
        cy.get('[name="from_email"]').type('test_mail@gmail.com')
        cy.get('[name="subject"]').type('Test subject')
        cy.get('[name="message"]').type('This is a test message')
        cy.get('[name="from_name"]').type('Test name')
        cy.get('[type="submit"]').click()
        cy.contains('Email sent successfully!').should('be.visible')

    })

    it('Contact form test with invalid mail', () => {
        cy.get('[name="from_email"]').type('test_mail')
        cy.get('[name="subject"]').type('Test subject')
        cy.get('[name="message"]').type('This is a test message')
        cy.get('[name="from_name"]').type('Test name')
        cy.get('[type="submit"]').click()
        cy.contains('Please enter a valid email address.').should('be.visible')

    })
})
