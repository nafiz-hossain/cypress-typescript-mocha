describe('Skill Section', () => {
    beforeEach(() => {
      cy.visit('http://nafiz-hossain.github.io/portfolio');
    });
  
    it('should contain all the skills with icons', () => {
      // Check the presence of the "Skills" section heading
      cy.contains('Skills').should('exist');
  
      // Test Tools section
      cy.contains('Test Tools').should('exist');
      cy.contains('Postman').should('exist');
      cy.get('img[src*="postman.png"]').should('exist');
      cy.contains('JMeter').should('exist');
      cy.get('img[src*="jmeter.png"]').should('exist');
      cy.contains('Selenium').should('exist');
      cy.get('img[src*="selenium.png"]').should('exist');
      cy.contains('MQTTX').should('exist');
      cy.get('img[src*="mqttx.png"]').should('exist');
      cy.contains('PyAutoGUI').should('exist');
      cy.get('img[src*="pyautogui.png"]').should('exist');
      cy.contains('Cypress').should('exist');
      cy.get('img[src*="cypress.png"]').should('exist');
      cy.contains('Burp Suite').should('exist');
      cy.get('img[src*="burpsuite.png"]').should('exist');
      cy.contains('GitHub Copilot').should('exist');
      cy.get('img[src*="GitHub-Mark.png"]').should('exist');
      cy.contains('ChatGPT').should('exist');
      cy.get('img[src*="chatgpt.png"]').should('exist');
  
      // Backend & Database section
      cy.contains('Backend & Database').should('exist');
      cy.contains('Node Js').should('exist');
      cy.get('img[src*="node-js.svg"]').should('exist');
      cy.contains('Python').should('exist');
      cy.get('img[src*="python-original.svg"]').should('exist');
      cy.contains('MySQL').should('exist');
      cy.get('img[src*="mysql-original-wordmark.svg"]').should('exist');
      cy.contains('Postgresql').should('exist');
      cy.get('img[src*="postgres.png"]').should('exist');
      cy.contains('Redis').should('exist');
      cy.get('img[src*="redis.svg"]').should('exist');
      cy.contains('Java').should('exist');
      cy.get('img[src*="java-original.svg"]').should('exist');
      cy.contains('Kotlin').should('exist');
      cy.get('img[src*="kotlinlang-icon.svg"]').should('exist');
  
      // DevOps section
      cy.contains('DevOps').should('exist');
      cy.contains('Docker').should('exist');
      cy.get('img[src*="docker.png"]').should('exist');
      cy.contains('Jenkins').should('exist');
      cy.get('img[src*="jenkins.png"]').should('exist');
  
      // Others section
      cy.contains('Others').should('exist');
      cy.contains('Bitbucket').should('exist');
      cy.get('img[src*="bitbucket.png"]').should('exist');
      cy.contains('GitHub').should('exist');
      cy.get('img[src*="GitHub-Mark.png"]').should('exist');
      cy.contains('VS Code').should('exist');
      cy.get('img[src*="vscode.png"]').should('exist');
      cy.contains('Figma').should('exist');
      cy.get('img[src*="figma.png"]').should('exist');
      cy.contains('Asana').should('exist');
      cy.get('img[src*="asana.png"]').should('exist');
      cy.contains('Jira').should('exist');
      cy.get('img[src*="jira.png"]').should('exist');
    });
  });
  