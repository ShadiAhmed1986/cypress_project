describe('My First Test', () => {
  it('URL Test', () => {
    //verify the url contains 'google'
    cy.visit('https://www.google.com')
    cy.url().should('include','google')
  })

  //Create second test case
  it('Title Test', () => {
    //verify the title equals Google
    cy.visit('https://www.google.com')
    cy.title().should('eq','Google')
  })
})