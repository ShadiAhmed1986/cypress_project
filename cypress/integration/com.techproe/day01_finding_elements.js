describe('Finding Elements', () => {
    it('get method', () => {
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
        cy.contains('Log in').click()

        //Assertions:
        //1.Asserting if URL contains 'Logon'
        cy.url().should('include','Logon')

        //2.Assert if Log in is visible
        cy.get('.row > .mb-4').should('be.visible')
    })
  
  })