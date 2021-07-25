describe('Search',()=>{
    it('amazon search',()=>{
        cy.amazonSearch('tea pot')
        cy.get('.a-color-state').should('have.text','"tea pot"')
        cy.title().should('include','teapot')
        cy.screenshot()
    })
})