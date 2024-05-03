describe('Education Section', () => {
    beforeEach(() => {
      cy.visit('http://nafiz-hossain.github.io/portfolio');
    });
  
    it('should contain all education details', () => {
      // Check the presence of the "Education" section heading
      cy.contains('Education').should('exist');
  
      // University of Dhaka details
      cy.contains('University of Dhaka').should('exist');
      cy.contains('B.Sc in Computer Science').should('exist');
      cy.contains('Jan 2015 - Dec 2019').should('exist');
      cy.contains('Publication Title: A Fast and Compact Binary to BCD Converter Circuit').should('exist');
      cy.contains('Publication URL: https://ieeexplore.ieee.org/abstract/document/9019980').should('exist');
  
      // Cantonment College, Jessore details
      cy.contains('Cantonment College, Jessore').should('exist');
      cy.contains('Higher Secondary Certificate in Science').should('exist');
      cy.contains('2011 - 2013').should('exist');
      cy.contains('Grade: GPA 5.00').should('exist');
  
      // Jessore Zilla School details
      cy.contains('Jessore Zilla School').should('exist');
      cy.contains('Secondary School Certificate in Science').should('exist');
      cy.contains('2005 - 2011').should('exist');
      cy.contains('Grade: GPA 5.00').should('exist');
    });
  
    it('should contain education icons', () => {
      // Check the presence of icons for each educational institution
      cy.get('img[src*="Dhaka_University_logo.png"]').should('exist'); // University of Dhaka icon
      cy.get('img[src*="ccj.png"]').should('exist'); // Cantonment College, Jessore icon
      cy.get('img[src*="jzs.png"]').should('exist'); // Jessore Zilla School icon
    });
  });
  